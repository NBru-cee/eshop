const express = require("express");
const path = require("path");
const router = express.Router();
const fs = require("fs");
const jwt = require("jsonwebtoken");
const sendMail = require("../utils/sendMail");
const ErrorHandler = require("../utils/ErrorHandler");
const catchAsyncErrors = require("../middleware/catchAsyncErrors");
const Shop = require("../model/shop");
const { upload } = require("../multer");
const sendShopToken = require("../utils/shopToken");

router.post("/create-shop", upload.single("file"), async (req, res, next) => {
   try {
      const { email } = req.body;
      const sellerEmail = await Shop.findOne({ email });
      if (sellerEmail) {
         const filename = req.file.filename;
         const filePath = `uploads/${filename}`;
         fs.unlink(filePath, (err) => {
            if (err) {
               console.log(err);
               res.status(500).json({ message: "Error deleting file" });
            }
         });
         return next(new ErrorHandler("User already exists", 400));
      }
      const filename = req.file.filename;
      const fileUrl = path.join(filename);

      const seller = {
         name: req.body.name,
         email: email,
         password: req.body.password,
         avatar: fileUrl,
         address: req.body.address,
         phoneNumber: req.body.phoneNumber,
         zipCode: req.body.zipCode,
      };
      const activationToken = createActivationToken(seller);

      const activationUrl = `http://localhost:3000/seller/activation/${activationToken}`;
      try {
         await sendMail({
            email: seller.email,
            subject: "Activate your shop",
            message: `Hello ${seller.email}, please click on the link to activate your shop: ${activationUrl}`,
         });
         res.status(201).json({
            success: true,
            message: `Please check your email: ${seller.email} to activate your shop`,
         });
      } catch (error) {
         return next(new ErrorHandler(error.message, 500));
      }
   } catch (error) {
      return next(new ErrorHandler(error.message, 400));
   }
});

//create activation token
const createActivationToken = (seller) => {
   return jwt.sign(seller, process.env.ACTIVATION_SECRET, {
      expiresIn: process.env.ACTIVATION_EXPIRES,
   });
};

//activate user
router.post(
   "/activation",
   catchAsyncErrors(async (req, res, next) => {
      try {
         const { activationToken } = req.body;
         const newSeller = jwt.verify(
            activationToken,
            process.env.ACTIVATION_SECRET
         );
         if (!newSeller) {
            return next(new ErrorHandler("Invalid token", 400));
         }
         const {
            name,
            email,
            password,
            avatar,
            phoneNumber,
            zipCode,
            address,
         } = newSeller;
         let seller = await Shop.findOne({ email });

         if (seller) {
            return next(new ErrorHandler("Seller already exists", 400));
         }
         seller = await Shop.create({
            name,
            email,
            password,
            avatar,
            phoneNumber,
            zipCode,
            address,
         });
         sendShopToken(seller, 201, res);
      } catch (error) {
         return next(new ErrorHandler(error.message, 400));
      }
   })
);

module.exports = router;
