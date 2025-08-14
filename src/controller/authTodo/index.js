const { register, login } = require("./authController");
const allTodoUser = require("./getallTodoUser.controller");
const { logout } = require("./logoutUser.controller");

module.exports = {
  register,
  login,
  allTodoUser,
  logout,
};
