const express = require("express");
const connectDB = require("./config/db");

const app = express();

const PORT = process.env.PORT || 4000;

connectDB();

app.use(express.json({ extended: false }));

app.listen(PORT, console.log(`Running on port ${PORT}`));
