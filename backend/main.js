// import express from "express";
// import cors from "cors";

const express = require("express");
const cors = require("cors");

const UserRoute = require("./routes/UserRoute")

const port = process.env.PORT || 7539;

const app = express();
app.use(cors());
app.use(express.json())

app.use(UserRoute);


app.listen(port, () => console.log(`Server is running on ${port}`));