const express = require("express");
const mongoose = require("mongoose");
const body = require("body-parser");
const mongoRoutes = require("./routes/mongoRoutes");
const cors = require("cors");
const app = express();

app.use(body.json());
app.use(cors());
app.use(body.urlencoded({ extended: false }));

app.use("/api/", mongoRoutes);

function connector() {
  mongoose
    .connect(
      "mongodb+srv://LouisNokes:Password123@cluster0.qqhb1.mongodb.net/?retryWrites=true&w=majority"
    )
    .then(() => {
      console.log("Connected to database!");
      app.listen(8000);
    })
    .catch(() => {
      console.log("Connection failed!");
    });
}

connector();
