const { register, login, allTodoUser } = require("./authTodo");
const { getallnotes, addnotes, deleteNotes } = require("./notes");
const { todos, addTodo, deleteTodo, todoComplete } = require("./todo");
const { userRegister, removeUser, allUser } = require("./user");

module.exports = {
  userRegister,
  removeUser,
  allUser,
  addTodo,
  todos,
  deleteTodo,
  getallnotes,
  addnotes,
  deleteNotes,
  todoComplete,
  register,
  login,
  allTodoUser,
};
