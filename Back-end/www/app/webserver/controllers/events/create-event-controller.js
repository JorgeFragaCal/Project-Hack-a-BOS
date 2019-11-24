"use strict";
const Joi = require("@hapi/joi");
const mysqlPool = require("../../../database/mysql-pool");
async function validateSchema(payload) {
  const schema = Joi.object({
    title: Joi.string().required(),
    start_date: Joi.date()
      .format("YYYY-MM-DD")
      .required(),
    address: Joi.string(),
    city: Joi.string(),
    country: Joi.string(),
    description: Joi.string(),
    image: Joi.string(),
    email: Joi.string()
      .email()
      .required(),
    price: Joi.string(),
    web: Joi.string()
  });
  Joi.assert(payload, schema);
}

async function createEvent(res, req, next) {
  const eventData = { ...req.body };
  try {
    await validateSchema(eventData);
  } catch (e) {
    console.error(e);
    return res.status(400).send(e);
  }

  const { userId, role } = req.claims;
  if (role === "organizador") {
    try {
      const connection = await mysqlPool.getConnection();
      const sqlInsercion = "INSERT INTO `Hackathones`.`event` SET ? ";
      await connection.query(sqlInsercion, {
        title: eventData.title,
        start_date: eventData.start_date,
        address: eventData.address,
        city: eventData.city,
        country: eventData.country,
        description: eventData.description,
        image: eventData.image,
        email: eventData.email,
        price: eventData.price,
        web: eventData.web
      });
      connection.release();

      res.status(201).send("event created");
    } catch (e) {
      return res.status(500).send({ message: e.message });
    }
  } else {
    return res.status(401).send("Unauthorized");
  }
}
module.exports = createEvent;
