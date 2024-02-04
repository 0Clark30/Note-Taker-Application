const express = require("express");
const path = require("path");
const fs = require("fs")
const PORT = process.env.PORT || 3001;
const htmlRoutes = require('./routes/html')
const api = require('./routes/api')
const app = express();

// Middleware for parsing JSON and urlencoded form data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(express.static("public"));

// GET Route for notes html
app.use(htmlRoutes);
app.use(api);

app.get("*", (req, res) =>
res.sendFile(path.join(__dirname, "/public/index.html"))
)

app.listen(PORT, () =>
  console.log(`App listening at ${PORT}`)
);
