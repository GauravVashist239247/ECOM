const todos = require("../todo/allTodo.controller");
const userRegister = require("./auth.controller");
const removeUser = require("./delete.controller");
const addTodo = require("../todo/todotask.controller");
const allUser = require("./userData.controller");

module.exports = {
  userRegister,
  removeUser,
  allUser,
};
