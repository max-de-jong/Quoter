const express = require("express");
const connectDB = require("./config/db");

const app = express();

const PORT = process.env.PORT || 4000;

connectDB();

app.use(express.json({ extended: false }));

app.use("/api/component", require("./routes/api/component"));

app.get("/", (req, res) => {
  res.send("Server running");
});

app.listen(PORT, console.log(`Running on port ${PORT}`));
