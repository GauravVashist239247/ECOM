const express = require("express");
const {
  todos,
  addTodo,
  deleteTodo,
  addnotes,
  getallnotes,
  deleteNotes,
  todoComplete,
} = require("../controller");

const router = express.Router();

router.post("/todo", addTodo);
router.get("/todos", todos);
router.delete("/deletetodo/:id", deleteTodo);
router.post("/note", addnotes);
router.get("/notes", getallnotes);
router.delete("/notes/:id", deleteNotes);
router.put("/updatetodo/:id", todoComplete);

module.exports = router;
