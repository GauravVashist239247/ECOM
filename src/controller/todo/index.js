const todos = require("./allTodo.controller");
const todoComplete = require("./completetodo.controller");
const deleteTodo = require("./deleteTodo.controller");
const addTodo = require("./todotask.controller");

module.exports = {
  addTodo,
  todos,
  deleteTodo,
  todoComplete,
};
