const status = require("statuses");
const { todoModels } = require("../../models");

const addTodo = async (req, res) => {
  try {
    const task = req.body;
    const todoTask = new todoModels(task);

    await todoTask.save();

    return res.status(201).json({
      status: 201,
      data: task,
      message: "Todo task created successfully",
    });
  } catch (error) {
    return res.json({
      status: 400,
      message: error.message,
    });
  }
};

module.exports = addTodo;
