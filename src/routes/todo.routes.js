const express = require("express");
const {
  todos,
  addTodo,
  deleteTodo,
  addnotes,
  getallnotes,
  deleteNotes,
} = require("../controller");

const router = express.Router();

router.post("/todo", addTodo);
router.get("/todos", todos);
router.delete("/deletetodo/:id", deleteTodo);
router.post("/note", addnotes);
router.get("/notes", getallnotes);
router.delete("/notes/:id", deleteNotes);

module.exports = router;
