const express = require("express");
const path = require("path");
const router = express.Router();
const fs = require("fs");
const jwt = require("jsonwebtoken");
const sendMail = require("../utils/sendMail");
const Shop = require("../model/shop");
const { upload } = require("../multer");
const catchAsyncErrors = require("../middleware/catchAsyncErrors");
const ErrorHandler = require("../utils/ErrorHandler");
const sendShopToken = require("../utils/shopToken");
const isAuthenticated = require("../middleware/auth");

// create shop
router.post("/create-shop", upload.single("file"), async (req, res, next) => {
   try {
      const { name, email, password, address, zipCode, phoneNumber } = req.body;
      const sellerEmail = await Shop.findOne({ email });
      if (sellerEmail) {
         const filename = req.file.filename;
         const filePath = `uploads/${filename}`;
         fs.unlink(filePath, (err) => {
            if (err) {
               console.log(err);
               res.status(500).json({
                  message: "Error deleting file",
               });
            }
         });
         return next(new ErrorHandler("Seller already exists", 400));
      }
      const filename = req.file.filename;
      const fileUrl = path.join(filename);

      const seller = {
         name,
         email,
         password,
         avatar: fileUrl,
         address,
         zipCode,
         phoneNumber,
      };
      const activationToken = createActivationToken(seller);

      const activationUrl = `http://localhost:3000/seller/activation/${activationToken}`;

      try {
         await sendMail({
            email: seller.email,
            subject: "Activate your shop",
            message: `Hello ${seller.name}, please click on the link to activate your shop: ${activationUrl}`,
         });
         res.status(201).json({
            success: true,
            message: `Please check your email:-${seller.email} to activate your shop`,
         });
      } catch (error) {
         return next(new ErrorHandler(error.message, 500));
      }
   } catch (error) {
      return next(new ErrorHandler(error.message, 400));
   }
});

// create activation token
const createActivationToken = (seller) => {
   return jwt.sign(seller, process.env.ACTIVATION_SECRET, {
      expiresIn: process.env.EXPIRATION_TIME,
   });
};

// activate seller
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
            zipCode,
            address,
            phoneNumber,
         } = newSeller;

         let seller = await Shop.findOne({ email });

         if (seller) {
            return next(new ErrorHandler("Seller already exists", 400));
         }

         seller = await Shop.create({
            name,
            email,
            avatar,
            password,
            zipCode,
            address,
            phoneNumber,
         });

         sendShopToken(seller, 201, res);
      } catch (error) {
         return next(new ErrorHandler(error.message, 500));
      }
   })
);

// login shop
router.post(
   "/login-shop",
   catchAsyncErrors(async (req, res, next) => {
      try {
         const { email, password } = req.body;

         if (!email || !password) {
            return next(new ErrorHandler("All fields are required!", 400));
         }

         const seller = await Shop.findOne({ email }).select("+password");

         if (!seller) {
            return next(new ErrorHandler("Seller doesn't exists!", 400));
         }

         const isPasswordValid = await seller.comparePassword(password);

         if (!isPasswordValid) {
            return next(
               new ErrorHandler("Please provide the correct information", 400)
            );
         }

         sendShopToken(seller, 201, res);
      } catch (error) {
         return next(new ErrorHandler(error.message, 500));
      }
   })
);
// load shop
router.get(
   "/get-seller",
   catchAsyncErrors(async (req, res, next) => {
      try {
         const seller = await Shop.findById(req.seller.id);
         if (!seller) {
            return next(new ErrorHandler("Seller doesn't exist", 400));
         }
         res.status(200).json({
            success: true,
            seller,
         });
      } catch (error) {
         return next(new ErrorHandler(error.message, 400));
      }
   })
);

//logout seller
router.get(
   "/logout",
   isAuthenticated,
   catchAsyncErrors(async (req, res, next) => {
      try {
         res.cookie("token", null, {
            expires: new Date(Date.now()),
            httpOnly: true,
         });

         res.status(201).json({
            success: true,
            message: "Logged out successfully!",
         });
      } catch (error) {
         return next(new ErrorHandler(error.message, 500));
      }
   })
);

module.exports = router;
