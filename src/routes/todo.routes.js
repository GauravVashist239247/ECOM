const express = require("express");
const { todos, addTodo, deleteTodo } = require("../controller");

const router = express.Router();

router.post("/todo", addTodo);
router.get("/todos", todos);
router.delete("/deletetodo/:id", deleteTodo);

module.exports = router;
