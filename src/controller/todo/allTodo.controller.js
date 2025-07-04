const { todoModels } = require("../../models");

const todos = async (req, res) => {
  try {
    const alltodos = await todoModels.find();

    if (alltodos.length === 0) {
      return res.status(404).json({
        status: 404,
        message: "No todos found",
      });
    }

    return res.status(200).json({
      status: 200,
      data: alltodos,
      message: "Todo tasks fetched successfully",
    });
  } catch (error) {
    return res.status(500).json({
      status: 500,
      message: error.message || "Server error",
    });
  }
};

module.exports = todos;
