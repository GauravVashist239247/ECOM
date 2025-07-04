const status = require("statuses");
const { userDetailSchema } = require("../../models");

const removeUser = async (req, res) => {
  try {
    const { id } = req.params;

    const User = await userDetailSchema.findById(id);
    if (!User) {
      return res.status(404).json({ status: 404, message: "user not found" });
    }
    await userDetailSchema.findByIdAndDelete(id);
    res
      .status(200)
      .json({ status: 200, data: User, message: "User delete sucessfully" });
  } catch (error) {
    res.status(404);
  }
};

module.exports = removeUser;
