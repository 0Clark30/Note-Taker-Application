const express = require("express");
const path = require("path");
const api = require("./routes/index.js");

const PORT = process.env.port || 3001;

const app = express();







app.listen(PORT, () =>
  console.log(`Example app listening at http://localhost:${PORT}`)
);