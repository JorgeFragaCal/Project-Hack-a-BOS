"use strict";

const router = require("express").Router();
const checkAccontSession = require("../controllers/account/check-account-session");
const createAccount = require("../controllers/account/create-account-controller");

router.post("/", createAccount);

module.exports = router;
