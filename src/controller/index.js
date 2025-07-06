const { getallnotes, addnotes, deleteNotes } = require("./notes");
const { todos, addTodo, deleteTodo } = require("./todo");
const { userRegister, removeUser, alluser, allUser } = require("./user");

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
};
