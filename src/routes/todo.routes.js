const express = require("express");
const {
  todos,
  addTodo,
  deleteTodo,
  addnotes,
  getallnotes,
  deleteNotes,
  todoComplete,
  login,
  register,
  allTodoUser,
} = require("../controller");
const { checkAuth } = require("../controller/authTodo/authController");

const router = express.Router();

router.post("/todo", addTodo);
router.get("/todos", todos);
router.delete("/deletetodo/:id", deleteTodo);
router.post("/note", addnotes);
router.get("/notes", getallnotes);
router.delete("/notes/:id", deleteNotes);
router.put("/updatetodo/:id", todoComplete);

router.post("/register", register);
router.post("/login", login);
router.get("/login", allTodoUser);
router.get("/check", checkAuth);

module.exports = router;
