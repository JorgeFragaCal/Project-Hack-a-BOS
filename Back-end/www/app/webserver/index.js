"use strict";

const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const routes = require("./routes");

const app = express();
app.use(bodyParser.json());
/**
 * Enable CORS to avoid problems with frontend using our backend API
 */
app.use(cors());

/**
 * Add all routes using app.use('/api/YOUR_ROUTER_NAME', routes.YOUR_ROUTER_GROUP)
 */
app.use("/api/account", routes.account);
app.use("/api/auth", routes.auth);
app.use("/api/events", routes.events);
app.use("/api/user", routes.user);
app.use("/api/rankings", routes.rankings);

/**
 * Create a default router for endpoint / to send next string: 'base url : /api'
 */
app.get("/", (req, res, next) => {
  res.send("base url: /api");
});

/**
 * Create a special router to send 404 with next message if pathname is invalid: 'Sorry, API endpoint not found!'
 */
app.use((req, res) => {
  return res.status(404).send("ERROR 404 PAGE NOT FOUND");
});

/**
 * Create special middleware to catch any error and send to user error 500 with the message
 */
app.use((err, req, res, next) => {
  return res.status(500).send({
    message: err.message
  });
});

/**
 * Start listening requests at a given port
 * @param {Number} port
 */
let server = null;
async function listen(port) {
  try {
    if (server) {
      return server;
    }

    server = await app.listen(port);
    return server;
  } catch (e) {
    console.error("Can't listen", e);
    throw e;
  }
}

/**
 * Stop listening requests
 */
async function close() {
  if (server) {
    await server.close();
    server = null;
  } else {
    console.error("Can't close a non started server");
  }
}

module.exports = {
  listen,
  close
};
