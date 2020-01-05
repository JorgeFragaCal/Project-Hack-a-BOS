"use strict";

const router = require("express").Router();
const checkAccontSession = require("../controllers/account/check-account-session");
const createAccount = require("../controllers/account/create-account-controller");
const getAccounts = require("../controllers/account/get-account-controller");

router.post("/", createAccount);
router.get("/", getAccounts);

module.exports = router;
