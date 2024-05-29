// require ("dotenv").config();
// import express, { json } from "express";
const express = require('express');
const app = express();
// import mongoose from "mongoose";
const mongoose = require("mongoose");
const question = require("./models/questionsSchema")
// import "./db/conn";
require("./db/conn");
const bodyParser = require('body-parser');
const router = require("./routes/router");
const cors = require("cors");
// import cors from "cors";
// import router from "./routes/router";

const PORT = 8003;

app.use(cors());
// app.use(json());


app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(router);

// const PORT = 5000;
app.listen(PORT,() => {
  console.log(`Server is running on port ${PORT}`);
});

