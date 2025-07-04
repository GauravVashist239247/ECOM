const mongoose = require("mongoose");

const TodoSchema = new mongoose.Schema({
  task: { type: String, require: true },
  duedate: {
    type: Date,
    default: Date.now(),
  },
});

module.exports = mongoose.model("Todo", TodoSchema);
