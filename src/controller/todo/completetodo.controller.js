const mongoose = require("mongoose");
const { todoModels } = require("../../models");
const { message } = require("statuses");

const todoComplete = async (req, res) => {
  const { id } = req.params;

  // Validate ObjectId
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json({ message: "Invalid Todo ID" });
  }

  const todo = await todoModels.findById(id);

  try {
    console.log("Updating Todo:", id);
    console.log("Payload:", req.body);
    console.log("user:", req.user);

    if (!req.user) {
      return res.status(401).json({
        status: 401,
        message: " Unauthorized please login",
      });
    }

    if (todo.createdby !== req.user.email) {
      return res.status(403).json({
        status: 403,
        message: "You are not authorized to update this todo",
      });
    }

    const updatedTodo = await todoModels.findByIdAndUpdate(id, req.body, {
      new: true,
      runValidators: true,
    });

    if (!updatedTodo) {
      return res.status(404).json({ message: "Todo not found" });
    }

    res.json({
      status: 200,
      message: "Todo updated successfully",
      data: updatedTodo,
    });
  } catch (err) {
    console.error("Update error:", err);
    res.status(500).json({ message: "Internal server error" });
  }
};

module.exports = todoComplete;
