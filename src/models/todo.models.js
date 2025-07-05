const mongoose = require("mongoose");

const TodoSchema = new mongoose.Schema({
  name: { type: String, require: true },
  task: { type: String, require: true },
  duedate: {
    type: Date,
    default: Date.now(),
  },
});

module.exports = mongoose.model("Todo", TodoSchema);
