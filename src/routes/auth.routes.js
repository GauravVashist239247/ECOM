// const express = require("express");

// const multer = require("multer");

// const path = require("path");
// const { userRegister, removeUser, allUser } = require("../controller");

// const router = express.Router();

// const avatarStorage = multer.diskStorage({
//   destination: (req, file, cb) => {
//     cb(null, "uploads/");
//   },

//   filename: (req, file, cb) => {
//     const ext = path.extname(file.originalname);
//     cb(null, `${Date.now()}_${Math.random()}${ext}`);
//   },
// });

// const fileFilter = (req, file, cb) => {
//   console.log(file);
//   if (file.mimetype.startsWith("image/")) {
//     cb(null, true);
//   } else {
//     cb(new Error("Only image files are allowed!"), false);
//   }
// };

// const upload = multer({ storage: avatarStorage, fileFilter });

// router
//   .route("/auth/register")
//   .post(upload.single("profileImage"), userRegister);
// router.route("/auth/:id/remove").delete(removeUser);

// router.route("/allusers").get(allUser);
// module.exports = router;
// src/routes/auth.routes.js
const express = require("express");
const multer = require("multer");
const cloudinaryStorage = require("../config/cloudinaryStorage.js");
const { userRegister, removeUser, allUser } = require("../controller");

const router = express.Router();
const upload = multer({ storage: cloudinaryStorage });

router.post("/auth/register", upload.single("profileImage"), userRegister);
router.delete("/auth/:id/remove", removeUser);
router.get("/allusers", allUser);

module.exports = router;
