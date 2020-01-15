"use strict";
const Joi = require("@hapi/joi");
const mysqlPool = require("../../../database/mysql-pool");
const uuidV4 = require("uuid/v4");

async function validateSchema(payload) {
  const schema = Joi.object({
    title: Joi.string().required(),
    start_date: Joi.string().required(),
    address: Joi.string(),
    city: Joi.string(),
    country: Joi.string(),
    description: Joi.string(),
    image: Joi.string(),
    email: Joi.string()
      .email()
      .required(),
    prize: Joi.string(),
    web: Joi.string(),
    price: Joi.string()
  });
  Joi.assert(payload, schema);
}

async function createEvent(req, res, next) {
  const eventData = { ...req.body };
  try {
    await validateSchema(eventData);
  } catch (e) {
    console.log(e);
    return res.status(400).send(e);
  }

  const eventId = uuidV4();
  try {
    const connection = await mysqlPool.getConnection();
    const sqlInsercion = "INSERT INTO events SET ? ";

    await connection.query(sqlInsercion, {
      id: eventId,
      title: eventData.title,
      start_date: eventData.start_date,
      country: eventData.country,
      city: eventData.city,
      description: eventData.description,
      image: eventData.image,
      email: eventData.email,
      web: eventData.web,
      prize: eventData.price
    });
    connection.release();

    res.status(201).send("event created");
  } catch (e) {
    console.error(e);
    return res.status(500).send({ message: e.message });
  }
}
module.exports = createEvent;
