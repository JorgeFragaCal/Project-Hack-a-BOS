"use strict";

const account = require("./account-router");
const auth = require("./auth-router");
const events = require("./event-router");
const user = require("./user-router");
module.exports = {
  account,
  auth,
  events,
  user
};
