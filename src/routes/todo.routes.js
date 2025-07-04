const express = require("express");
const { todos, addTodo } = require("../controller");

const router = express.Router();

router.post("/todo", addTodo);
router.get("/todos", todos);

module.exports = router;
