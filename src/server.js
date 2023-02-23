//Import from package
const { application, response } = require("express");
const express = require("express");
const mongoose = require("mongoose");

//Import from others
const Note = require("./models/note");

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

    app.get("/home", async (req, res) => {
      res.send("this is home page");
    });

    app.get("/notes/list/:userid", async (req, res) => {
      var notes = await Note.find({userid: req.params.userid});
      res.json(notes);
    })

    app.get("/notes/add", async (req, res) => {
      var newNote = Note({
        id: "005",
        userid: "sohag",
        title: "This is title",
        contect: "This is context reviewer",
      });
      await newNote.save();
      const response = { message: "new note created" };
      res.json(response);
    });
  })
  .catch((e) => {
    console.log(e);
  });

app.listen(PORT, () => {
  console.log(`Connected at port ${PORT}`);
});
