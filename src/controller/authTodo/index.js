const { register, login } = require("./authController");
const allTodoUser = require("./getallTodoUser.controller");

module.exports = {
  register,
  login,
  allTodoUser,
};
