const status = require("statuses");
const { userDetailSchema } = require("../../models");
const bcrypt = require("bcrypt");

const userRegister = async (req, res, next) => {
  try {
    const data = req.body;
    const UserPassword = data.password;
    const hashedPassword = await bcrypt.hash(UserPassword, 10);

    data.password = hashedPassword;

    const authUser = new userDetailSchema(data);

    await authUser.save();

    return res
      .status(201)
      .json({ status: 201, data: authUser, message: "Created Sucessfully" });
  } catch (error) {
    if (error.code == 11000) {
      return res.json({
        status: 11000,
        message: "already registered",
      });
    }
  }
};
module.exports = userRegister;
