const {
  readFromFile,
  readAndAppend,
  writeToFile,
} = require("./helpers/fsUtils");

const router = require("express").Router();

router.get("/notes", async (req, res) => {
  try {
    const data = await readFromFile('../db/db.json');
    res.status(200).json({ notes: data });
  } catch (err) {
    res.status(500).json((err));
  }
});
