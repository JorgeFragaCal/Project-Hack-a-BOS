"use strict";

const account = require("./account-router");
const auth = require("./auth-router");
const events = require("./event-router");
const user = require("./user-router");
const rankings = require("./ranking-router");
module.exports = {
  account,
  auth,
  events,
  user,
  rankings
};
