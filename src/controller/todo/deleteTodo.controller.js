const { todoModels } = require("../../models");

const deleteTodo = async (req, res) => {
  try {
    const { id } = req.params;

    // Find the todo item
    const todo = await todoModels.findById(id);
    if (!todo) {
      return res.status(404).json({
        status: 404,
        message: "Todo not found",
      });
    }

    console.log("req user of delete", req.user);

    console.log(req.cookies);

    // Check if the logged-in user is the creator of the todo
    // if (todo.createdby !== req.user.email.toString()) {
    //   return res.status(403).json({
    //     status: 403,
    //     message: "You are not authorized to delete this todo",
    //   });
    // }

    // Delete the todo

    if (req.user.email !== todo.createdby) {
      return res.status(403).json({
        status: 403,
        message: "You are not authorized to delete this todo",
      });
    }

    await todoModels.findByIdAndDelete(id);

    return res.status(200).json({
      status: 200,
      data: todo,
      message: "Todo deleted successfully",
    });
  } catch (error) {
    console.error(error);
    console.log(req.user);
    return res.status(500).json({
      status: 500,
      message: "Internal server error",
    });
  }
};

module.exports = deleteTodo;
