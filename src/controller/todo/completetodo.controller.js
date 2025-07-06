const mongoose = require("mongoose");
const { todoModels } = require("../../models");

const todoComplete = async (req, res) => {
  const { id } = req.params;

  // Validate ObjectId
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json({ message: "Invalid Todo ID" });
  }

  try {
    console.log("Updating Todo:", id);
    console.log("Payload:", req.body);

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
