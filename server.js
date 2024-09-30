const fs = require("fs");
const express = require("express");

const app = express();

// default URL = Health check

app.get("/", (req, res) => {
  res.status(200).json({
    status: "Success",
    message: "Application is running oyy",
    data: [],
  });
});

// if(req url === "abdi") {}
// get digunakan untuk menuju url yang sesuai dengan /
app.get("/abdi", (req, res) => {
  res.status(200).json({
    message: "ping successfully !",
  });
});

// middleware untuk url yang tidak ada di aplikasi
// use digunakan untuk membuat middleware sendiri
app.use((req, res, next) => {
  res.status(404).json({
    status: "Failed",
    message: "URL not exist!",
  });
});

app.listen("3000", () => {
  console.log("start aplikasi kita di port 3000");
});
