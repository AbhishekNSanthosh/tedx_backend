const express = require("express");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
const connectToDB = require("./utils/database");

dotenv.config();
const app = express();

app.use(cors());
app.use(express.json());
app.use(bodyParser.json());

app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

app.get("/api/v1/", (req, res) => {
  return res.status(200).json({
    resCode: 200,
    status: "SUCCESS",
    message: "Backend application of Tedx CCET",
  });
});

app.listen(process.env.PORT || 9000, async () => {
  connectToDB();
  console.log(`Server started listening at port ${process.env.PORT || 9000}`);
});
