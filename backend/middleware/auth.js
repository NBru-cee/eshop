const ErrorHandler = require("../utils/ErrorHandler");
const catchAsyncErrors = require("./catchAsyncErrors");
const jwt = require("jsonwebtoken");
const User = require("../model/user");
const Shop = require("../model/shop");

const isAuthenticated = catchAsyncErrors(async (req, res, next) => {
   const { token } = req.cookies;
   if (!token) {
      return next(new ErrorHandler(`Please login to continue`, 401));
   }
   const decoded = jwt.verify(token, process.env.JWT_SECRET_KEY);
   req.user = await User.findById(decoded.id);
   next();
});

const isSeller = catchAsyncErrors(async (req, res, next) => {
   const { seller_token } = req.cookies;
   if (!seller_token) {
      return next(new ErrorHandler(`Please login to continue`, 401));
   }
   const decoded = jwt.verify(seller_token, process.env.JWT_SECRET_KEY);
   req.seller = await Shop.findById(decoded.id);
   next();
});

module.exports = { isAuthenticated, isSeller };
