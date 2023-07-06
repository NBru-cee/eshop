const app = require("./app");
const connectDatabase = require("./db/Database");

//Handling uncaught exceptions
process.on("uncaughtException", (err) => {
   console.log(`Error: ${err.message}`);
   console.log("Shutting down the server for handling uncaught exceptions");
});

//config
if (process.env.NODE_ENV !== "PRODUCTION") {
   require("dotenv").config({
      path: "./config/.env",
   });
}

//connect db
connectDatabase();

// create server
const server = app.listen(process.env.PORT, () => {
   console.log(`Server running on http://localhost:${process.env.PORT}`);
});

//unhandled promise rejection
process.on("unhandledRejection", (err) => {
   console.log(`Error: ${err.message}`);
   console.log("Shutting down the sever for unhandled promise rejection");

   server.close(() => {
      process.exit(1);
   });
});
