const express = require("express");
const cookieParser = require("cookie-parser");
const cors = require("cors");
const dotenv = require("dotenv");

dotenv.config();

const { authrouter, todorouter, userrouter } = require("./routes");
const { verifyAuthentication } = require("./middleware/authTodo.middleware");

const app = express();

// ✅ CORS config that allows all origins (for development only)
const corsOptions = {
  origin: (origin, callback) => {
    if (!origin) return callback(null, true); // Allow non-browser clients like curl
    return callback(null, true); // Allow all origins
  },
  credentials: true, // ✅ Allow cookies
};

app.use(cors(corsOptions));
app.use(cookieParser());
app.use(express.json({ limit: "16kb" }));
app.use(express.urlencoded({ extended: true, limit: "16kb" }));

// ✅ Attach user to every request based on token
app.use(verifyAuthentication);

// ✅ Test server route
app.get("/", (req, res) => {
  res.status(200).json({ message: "Server is reachable" });
});

// ✅ Authenticated user route
app.get("/me", verifyAuthentication, (req, res) => {
  if (!req.user) {
    return res.status(401).json({ message: "Unauthorized" });
  }
  console.log("req user of app / me", req.user);
  res.status(200).json({ user: req.user });
});

// ✅ Routes
app.use("/todo", todorouter); // protected todo routes
app.use("/login", authrouter); // login + register
// app.use("/usser", userrouter);

module.exports = app;
