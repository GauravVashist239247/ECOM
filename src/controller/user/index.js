const userRegister = require("./auth.controller");
const removeUser = require("./delete.controller");
const allUser = require("./userData.controller");

module.exports = {
  userRegister,
  removeUser,
  allUser,
};
