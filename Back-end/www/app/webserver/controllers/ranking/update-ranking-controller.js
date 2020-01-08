"use strict";

const Joi = require("@hapi/joi");
const mysqlPool = require("../../../database/mysql-pool");

async function validateSchema(payload) {
  const schema = Joi.object({
    skills: Joi.string()
      .trim()
      .min(1)
      .max(45)
      .required(),
    puntuation: Joi.string()
      .trim()
      .min(1)
      .max(11)
      .required(),
    events_idevents: Joi.string()
      .guid({
        version: ["uuidv4"]
      })
      .required(),
    user_iduser: Joi.string()
      .guid({
        version: ["uuidv4"]
      })
      .required()
    // tags: Joi.array().items(Joi.string().guid({ version: ['uuidv4'] })),
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
async function updateRanking(req, res, next) {
  const { events_idevents } = req.params;
  const { userId } = req.claims;
  const rankingData = {
    ...req.body,
    events_idevents,
    user_iduser
  };

  try {
    await validateSchema(noteData);
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
    const sqlUpdateRanking = `UPDATE events
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
        AND user_iduser = ?`;

    await connection.query(sqlUpdateRanking, [
      rankingData.skills,
      rankingData.puntuation,
      events_idevents,
      user_iduser
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

module.exports = updateRanking;
