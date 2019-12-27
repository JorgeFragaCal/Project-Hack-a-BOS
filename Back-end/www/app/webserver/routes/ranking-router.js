"use strict";
const express = require("express");
const getRankings = require("../controllers/ranking/get-ranking-controller");
const getUserRankings = require("../controllers/ranking/get-user-rankings-controller");

const router = express.Router();

router.get("/", getRankings);
router.get("/user/:id", getUserRankings);

module.exports = router;
