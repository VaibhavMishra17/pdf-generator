const express = require("express");
const path = require("path");
const dotenv = require("dotenv");
dotenv.config();

const app = express();
const port = process.env.PORT || 6000;

app.use(express.static(path.join(__dirname, "/public")));

app.get("", (req, res) => {
  res.render("index");
});

app.listen(port, () => {
  console.log(`Server started at http://localhost:${port}`);
});
