const { todos, addTodo } = require("./todo");
const { userRegister, removeUser, alluser, allUser } = require("./user");

module.exports = {
  userRegister,
  removeUser,
  allUser,
  addTodo,
  todos,
};
