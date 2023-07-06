const ErrorHandler = require("../utils/ErrorHandler");

module.exports = (err, req, res, next) => {
      err.statusCode = err.statusCode || 500;
      err.message = err.message || "Internal Server Error";

      //wrong mongodb id error
      if (err.name == "CastError") {
            const message = `Resources not found with this id.. Invalid ${err.path}`;
            err = new ErrorHandler(message, 400);
      }

      //duplicate key error
      if (err.code === 1100) {
            const message = `Duplicate key ${Object.keys(
                  err.keyValue
            )} Entered`;
            err = new ErrorHandler(message, 400);
      }

      //wrond jwt error
      if (err.name === "JsonWebTokenError") {
            const message = `Your url is invalid please try again later`;
            err = new ErrorHandler(message, 400);
      }

      //jwt expiration error
      if (err.name === "TokenExpiredError") {
            const message = `Your url is expired please try again later`;
            err = new ErrorHandler(message, 400);
      }
      res.status(err.statusCode).json({
            success: false,
            message: err.message,
      });
};
