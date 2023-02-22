//Import from package
const express = require("express");
const mongoose = require("mongoose");

//Initializations
const PORT = 5000;
//initialize expreess and save it in a variable
const app = express();

const DB =
  "mongodb+srv://sohag:sohag123@cluster0.vdxnceo.mongodb.net/?retryWrites=true&w=majority";

//App routes

// Connections
mongoose
  .connect(DB)
  .then(() => {
    console.log("Connection Successful");
    app.get("/home", (req, res) => {
      res.send("this is home page");
    });
  })
  .catch((e) => {
    console.log(e);
  });

app.listen(PORT, "0.0.0.0", () => {
  console.log(`Connected at port ${PORT}`);
});
