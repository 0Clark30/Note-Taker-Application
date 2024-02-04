const router = require("express").Router();
const fs = require("fs");
const { v4: uuidv4 } = require("uuid");
router.get("/api/notes", async (req, res) => {
  try {
    const db = await JSON.parse(fs.readFileSync("db/db.json", "utf8"));
    res.json(db);
  } catch (error) {
    console.error("Error reading notes:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

router.post("/api/notes", (req, res) => {
  try {
    const db = JSON.parse(fs.readFileSync("db/db.json", "utf8"));
    const newNote = {
        id: uuidv4(),
      title: req.body.title,
      text: req.body.text,
    };
    db.push(newNote);
    fs.writeFileSync("db/db.json", JSON.stringify(db, null, 2));
    res.json(newNote);
  } catch (error) {
    console.error("Error adding note:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});



module.exports = router;
