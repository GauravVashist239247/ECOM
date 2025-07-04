const { userDetailSchema } = require("../../models");

const allUser = async (req, res) => {
  try {
    const allUsers = await userDetailSchema.find().select("-password");

    if (!allUsers) {
      res.json({
        status: 404,
        message: "Users not found",
      });
    }
    // res.status(200).json({
    //   status: 200,
    //   message: "user data retrieved successfully",
    //   data: allUsers,
    // });
    res.status(200).json([allUsers]);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

module.exports = allUser;
