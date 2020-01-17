"use strict";

const router = require("express").Router();

const createAccount = require("../controllers/account/create-account-controller");
const getAccounts = require("../controllers/account/get-accounts-controller");

router.post("/", createAccount);
router.get("/", getAccounts);

module.exports = router;
