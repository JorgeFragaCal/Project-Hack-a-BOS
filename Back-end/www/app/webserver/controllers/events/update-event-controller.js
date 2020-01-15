"use strict";

const Joi = require("@hapi/joi");
const mysqlPool = require("../../../database/mysql-pool");

async function validateSchema(payload) {
  const schema = Joi.object({
    title: Joi.string()
      .trim()
      .min(1)
      .max(45)
      .required(),
    start_date: Joi.string()
      .trim()
      .min(1)
      .max(45)
      .required(),
    address: Joi.string()
      .trim()
      .min(1)
      .max(45)
      .required(),
    city: Joi.string()
      .trim()
      .min(1)
      .max(45)
      .required(),
    country: Joi.string()
      .trim()
      .min(1)
      .max(45)
      .required(),
    description: Joi.string()
      .trim()
      .min(1)
      .max(65536)
      .required(),
    image: Joi.string()
      .trim()
      .min(1)
      .max(65536)
      .required(),
    email: Joi.string()
      .trim()
      .min(1)
      .max(45)
      .required(),
    prize: Joi.string()
      .trim()
      .min(1)
      .max(45)
      .required(),
    web: Joi.string()
      .trim()
      .min(1)
      .max(45)
      .required()
  });

  Joi.assert(payload, schema);
}

/**
 * Create a new tag if does not exist
 * @param {Object} req
 * @param {Object} res
 * @param {Function} next
 * @returns {Object} Tag created
 */
async function updateEvent(req, res, next) {
  const { eventId } = req.params;
  const { userId } = req.claims;
  const eventData = {
    ...req.body,
    eventId,
    userId
  };

  try {
    await validateSchema(req.body);
  } catch (e) {
    console.error(e);
    return res.status(400).send(e);
  }

  try {
    const connection = await mysqlPool.getConnection();
    const now = new Date()
      .toISOString()
      .replace("T", " ")
      .substring(0, 19);
    const sqlUpdateEvent = `UPDATE events
      SET title = ?,
        start_date = ?,
        address = ?,
        city = ?,
        country = ?,
        description = ?,
        image = ?,
        email = ?,
        prize = ?,
        web = ?
      WHERE id = ?
       `;

    await connection.query(sqlUpdateEvent, [
      eventData.title,
      eventData.start_date,
      eventData.address,
      eventData.city,
      eventData.country,
      eventData.description,
      eventData.image,
      eventData.email,
      eventData.prize,
      eventData.web,
      eventId
    ]);
    connection.release();

    return res.status(204).send();
  } catch (e) {
    console.error(e);
    return res.status(500).send({
      message: e.message
    });
  }
}

module.exports = updateEvent;
