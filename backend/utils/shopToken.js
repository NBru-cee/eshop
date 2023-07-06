//create token and saving it in cookies
const sendShopToken = (seller, statusCode, res) => {
   const token = seller.getJwtToken();

   //options for cookies
   const options = {
      expires: new Date(Date.now() + 90 * 24 * 60 * 60 * 1000),
      httpOnly: true,
      secure: true,
   };
   res.status(statusCode).cookie("seller_token", token, options).json({
      success: true,
      seller,
      token,
   });
};

module.exports = sendShopToken;
