const { todoUser } = require("../../models");

const logout = async (req, res) => {
  req.user = null;
  res.clearCookie("token");
  res.status(200);
};

module.exports = {
  logout,
};
