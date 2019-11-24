"use strict";
const express = require("express");
const multer = require("multer");
const checkAccountSession = require("../controllers/account/cheack-account-session");
const uploadAvatar = require("../controllers/user/upload-avatar-controller");

/*Create object multer*/
const upload = multer();
const router = express.Router();

router.post(
  "/avatar",
  checkAccountSession,
  upload.single("avatar"),
  uploadAvatar
);

module.exports = router;
