const logout = (req, res) => {
  try {
    res.cookie("token", {
      httpOnly: true,
      sameSite: "None",
      secure: true,
    });

    return res.status(200).json({ message: "Logout successful" });
  } catch (err) {
    console.error("Logout error:", err);
    return res.status(500).json({ error: "Server error during logout" });
  }
};

module.exports = { logout };
