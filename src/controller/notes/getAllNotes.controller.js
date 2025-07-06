const { notesModels } = require("../../models");

const getallnotes = async (req, res) => {
  try {
    const notes = await notesModels.find();
    if (notes.length === 0) {
      return res.status(404).json({
        status: 404,
        message: "No notes found",
      });
    }

    return res.status(200).json({
      status: 200,
      data: notes,
      message: "notes fetched successfully",
    });
  } catch (error) {
    res.status(500).json({
      status: 500,
      message: "server error" || error.message,
    });
  }
};
module.exports = getallnotes;
