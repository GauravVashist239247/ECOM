const express = require("express");
const app = express();
const cors = require("cors");

const router = require("./routes");

const corsOption = {
  credentials: true,
  origin: process.env.CORS_ORIGIN,
  optionSuccessStatus: 200,
};
app.use(cors(corsOption));
app.use(
  express.json({
    limit: "16kb",
  })
);
app.get("/", (req, res) => {
  res.status(200).json({ message: "Server is reachable" });
});

app.use(express.urlencoded({ extended: true, limit: "16kb" }));

app.use("/login", router);

module.exports = app;
