"use strict";

const router = require("express").Router();
const checkAccontSession = require("../controllers/account/cheack-account-session");
const createAccount = require("../controllers/account/create-account-controller");
//const getAccount = require("../controllers/account/get-account-controller");
//const updateAccount = require("../controllers/account/update-account-controller");

//router.get("/:id", checkAccontSession, getAccount);
router.post("/", createAccount);
//router.put("/:id", checkAccontSession, updateAccount);

module.exports = router;
