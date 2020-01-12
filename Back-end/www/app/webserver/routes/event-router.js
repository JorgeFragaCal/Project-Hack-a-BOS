"use strict";
const express = require("express");
const checkAccontSession = require("../controllers/account/check-account-session");
const createEvent = require("../controllers/events/create-event-controller");
const filterEvent = require("../controllers/events/filter-event-controller");
const getEvents = require("../controllers/events/get-events-controller");
const getEvent = require("../controllers/events/get-event-controller");
const getUserEvent = require("../controllers/events/get-user-events-controller");
//const updateEvent = require("../controllers/events/update-event-controller");

const router = express.Router();

router.get("/", getEvents);
router.get("/event/:id", getEvent);
router.get("/my-events", checkAccontSession, getUserEvent);
router.get("/filter", filterEvent);
router.post("/new", createEvent);
//router.put("/event/:id", checkAccontSession, updateEvent);

module.exports = router;
