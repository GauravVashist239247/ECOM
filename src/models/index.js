const notesModels = require("./notes.models");
const todoModels = require("./todo.models");
const userDetailSchema = require("./userSchema.models");
const todoUser = require("./userTodoSchema.models");
module.exports = {
  userDetailSchema,
  todoModels,
  notesModels,
  todoUser,
};
