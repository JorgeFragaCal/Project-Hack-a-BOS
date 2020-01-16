"use strict";
const express = require("express");
const checkAccontSession = require("../controllers/account/check-account-session");
const createEvent = require("../controllers/events/create-event-controller");
const filterEvent = require("../controllers/events/filter-event-controller");
const getEvents = require("../controllers/events/get-events-controller");
const getEvent = require("../controllers/events/get-event-controller");
const getUserEvent = require("../controllers/events/get-user-events-controller");
const getUserOrganizateEvent = require("../controllers/events/get-user-organization-events-controller");
const updateEvent = require("../controllers/events/update-event-controller");
const putAssement = require("../controllers/events/put-assement-controller");
const participation = require("../controllers/events/put-participations-controller");
const deleteEvent = require("../controllers/events/delete-event-controller");

const router = express.Router();

router.get("/", getEvents);
router.get("/event/:id", getEvent);
router.get("/organizated-events/:id", getUserOrganizateEvent);
router.get("/filter", filterEvent);

router.post("/new", checkAccontSession, createEvent);
router.post("/event/:eventId", checkAccontSession, participation);

router.put("/event/:eventId", checkAccontSession, updateEvent);
router.put("/event/rating/:eventId", checkAccontSession, putAssement);

router.delete("/event/:eventId", checkAccontSession, deleteEvent);

module.exports = router;
