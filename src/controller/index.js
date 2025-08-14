const { register, login, allTodoUser, logout } = require("./authTodo");
const { getallnotes, addnotes, deleteNotes } = require("./notes");

const { addTodo, todos, deleteTodo, todoComplete } = require("./todo");
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
  logout,
};
