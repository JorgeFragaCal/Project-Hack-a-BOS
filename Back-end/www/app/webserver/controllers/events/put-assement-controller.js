"use strict";
const mysqlPool = require("../../../database/mysql-pool");
async function putAssement(req, res, next) {
  /**
   * Put puntuations on events
   */
  const { assement } = req.query;
  const { userId } = req.claims;
  const { eventId } = req.params;
  try {
    const sqlQuery = `INSERT INTO user_assment_events SET ?;`;

    const connection = await mysqlPool.getConnection();

    const [rows] = await connection.query(sqlQuery, {
      user_iduser: userId,
      events_idevents: eventId,
      assement: assement
    });
    connection.release();

    return res.status(200).send({
      data: rows
    });
  } catch (e) {
    return res.status(500).send({ message: e.message });
  }
}
module.exports = putAssement;
