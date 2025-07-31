const express = require("express");
const cookieParser = require("cookie-parser");
const cors = require("cors");
const dotenv = require("dotenv");

dotenv.config();

const { authrouter, todorouter } = require("./routes");
const { verifyAuthentication } = require("./middleware");

const app = express();

// ✅ CORS config for sending cookies
const corsOptions = {
  origin: "http://localhost:5173",
  credentials: true,
};

app.use(cors(corsOptions));
app.use(cookieParser());
app.use(express.json({ limit: "16kb" }));
app.use(express.urlencoded({ extended: true, limit: "16kb" }));

// ✅ Run token verification on all requests
app.use(verifyAuthentication);

// ✅ Routes
app.get("/", (req, res) => {
  res.status(200).json({ message: "Server is reachable" });
});

// ✅ User info route for frontend
app.get("/me", (req, res) => {
  if (!req.user) {
    return res.status(401).json({ message: "Unauthorized" });
  }
  res.status(200).json({ user: req.user });
});

app.use("/login", authrouter);
app.use("/todo", todorouter);

module.exports = app;
