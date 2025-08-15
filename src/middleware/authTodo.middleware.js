const jwt = require("jsonwebtoken");

const SECRET = process.env.JWT_SECRET;

const verifyAuthentication = (req, res, next) => {
  const token = req.cookies.token;

  console.log("middleware token value", token);

  if (!token) {
    req.user = null;
    console.log("ppp");
    return next(); // no token, just proceed
  }

  try {
    const decodedToken = jwt.verify(token, SECRET);
    req.user = decodedToken; // attach user info to request
    console.log("req user=", req.user);
    next();
  } catch (error) {
    console.error("Invalid token:", error.message);
    req.user = null;
    next(); // token invalid, but still continue
  }
};

module.exports = { verifyAuthentication };
