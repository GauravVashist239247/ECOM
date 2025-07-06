const { notesModels } = require("../../models");

const addnotes = async (req, res) => {
  try {
    const notes = req.body;
    const notesbody = new notesModels(notes);

    await notesbody.save();
    return res.status(201).json({
      status: 201,
      data: notes,
      message: "notes created successfully",
    });
  } catch (error) {
    return res.json({
      status: 400,
      message: error.message,
    });
  }
};

module.exports = addnotes;
