// models/User.js
const mongoose = require("mongoose");
const userSchema = new mongoose.Schema({
  name: String,
  email: { type: String, unique: true },
  password: { type: String },
  role: { type: String, enum: ["customer", "admin"], default: "customer" },
  address: String,
});
module.exports = mongoose.model("User", userSchema);
