const express = require("express");
const {
  addnotes,
  getallnotes,
  deleteNotes,

  login,
  register,
  allTodoUser,
  addTodo,
  todos,
  deleteTodo,
  todoComplete,
  logout,
} = require("../controller");
const { verifyAuthentication } = require("../middleware/authTodo.middleware");
// const { checkAuth } = require("../controller/authTodo/authController");

const router = express.Router();

router.post("/register", register);
router.post("/login", login);
router.post("/logout", logout);
router.get("/login", allTodoUser);
// router.get("/check", checkAuth);

router.post("/note", addnotes);
router.get("/notes", getallnotes);
router.delete("/notes/:id", deleteNotes);

router.post("/todo", addTodo);
router.get("/todos", todos);
router.delete("/deletetodo/:id", deleteTodo);

router.put("/updatetodo/:id", todoComplete);

module.exports = router;
