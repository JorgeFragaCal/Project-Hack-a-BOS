"use strict";
const express = require("express");
const checkAccontSession = require("../controllers/account/cheack-account-session");
const createEvent = require("../controllers/events/create-event-controller");
const filterEventByCity = require("../controllers/events/filter-event-city-controller");
const filterEventBySkill = require("../controllers/events/filter-event-skill-controller");
const getEvents = require("../controllers/events/get-events-controller");
const getUserEvent = require("../controllers/events/get-user-events-controller");
const updateEvent = require("../controllers/events/update-event-controller");
const router = express.Router();

router.get("/my-events", checkAccontSession, getUserEvent);
router.get("/", getEvents);
router.get("/event/?skill", filterEventBySkill);
router.get("/event/?city", filterEventByCity);
router.post("/", createEvent);
router.put("/:id", checkAccontSession, updateEvent);

module.exports = router;
