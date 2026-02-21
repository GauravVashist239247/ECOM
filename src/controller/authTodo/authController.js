const { todoUser } = require("../../models");
const jwt = require("jsonwebtoken");

const SECRET = process.env.JWT_SECRET;

// Register controller
const register = async (req, res) => {
  const { email, name, password } = req.body;

  try {
    const exists = await todoUser.findOne({ email });
    if (exists) return res.status(409).json({ message: "User already exists" });

    const user = await todoUser.create({ email, name, password });
    const token = jwt.sign(
      {
        id: user._id,
        email: user.email,
        name: user.name,
        password: user.password,
      },
      SECRET,
      { expiresIn: "1h" },
    );

    res.status(201).json({ token, email: user.email });
  } catch (err) {
    res
      .status(500)
      .json({ message: "Registration failed", error: err.message });
  }
};

// Login controller
const login = async (req, res) => {
  const { email, name, password } = req.body;

  try {
    const user = await todoUser.findOne({ email });
    if (!user || !(await user.comparePassword(password))) {
      return res.status(401).json({ message: "Invalid email or password" });
    }

    const token = jwt.sign(
      {
        id: user._id,
        email: user.email,
        name: user.name,
        password: user.password,
      },
      SECRET,
      { expiresIn: "1h" },
    );

    console.log("req user of auth contoleer login", req.user);
    // res.setHeader("Set-cookie", "isLoggedIn=tru=/;");
    // .render("/")
    return res
      .status(200)
      .cookie("token", token, {
        httpOnly: true, // prevents JavaScript access
        secure: true, // set to true if using HTTPS
        sameSite: "none", // or 'Strict' or 'None' for cross-site
        maxAge: 24 * 60 * 60 * 1000, // 1 day
      })
      .json({ token, email: user.email });
  } catch (err) {
    res.status(500).json({ message: "Login failed", error: err.message });
  }
};

const checkAuth = (req, res) => {
  if (req.user) {
    res.status(200).json({ loggedIn: true, user: req.user });
    console.log(req.user);
  } else {
    res.status(200).json({ loggedIn: false });
  }
};

module.exports = { register, login, checkAuth };
