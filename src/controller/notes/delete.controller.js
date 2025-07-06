const { notesModels } = require("../../models");

const deleteNotes = async (req, res) => {
  try {
    const { id } = req.params;
    const noteDelete = await notesModels.findById(id);
    if (!noteDelete) {
      res.status(404).json({
        status: 404,
        message: "note not found",
      });
    }
    await notesModels.findByIdAndDelete(id);
    res.status(200).json({
      status: 200,
      data: noteDelete,
      message: "note delete successfully",
    });
  } catch (error) {
    res.status(500);
    res.json({
      status: 500,
      message: "server error" || error.message,
    });
  }
};

module.exports = deleteNotes;
