"use strict";
const express = require("express");
const multer = require("multer");
const checkAccountSession = require("../controllers/account/check-account-session");
const uploadAvatar = require("../controllers/user/upload-avatar-controller");
const getUser = require("../controllers/user/get-user-controller");
/*Create object multer*/
const upload = multer();
const router = express.Router();

router.post(
  "/avatar",
  checkAccountSession,
  upload.single("avatar"),
  uploadAvatar
);
router.get("/:id", getUser);

module.exports = router;
