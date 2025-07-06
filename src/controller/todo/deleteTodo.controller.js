const { todoModels } = require("../../models");

const deleteTodo = async (req, res) => {
  try {
    const { id } = req.params;
    const todo = await todoModels.findById(id);
    if (!todo) {
      return res.status(404).json({
        status: 404,
        message: "not found",
      });
    }
    await todoModels.findByIdAndDelete(id);

    return res.status(201).json({
      status: 201,
      data: todo,
      message: "todo deleted successful",
    });
  } catch (error) {
    return res.json({
      status: 500,
    });
  }
};

module.exports = deleteTodo;
