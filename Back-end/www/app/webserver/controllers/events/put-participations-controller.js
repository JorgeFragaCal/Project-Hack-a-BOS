"use strict";
const mysqlPool = require("../../../database/mysql-pool");
async function participation(req, res, next) {
  /**
   * PArticipations on events
   */
  const { userId } = req.claims;
  const { eventId } = req.params;

  const connection = await mysqlPool.getConnection();
  try {
    const sqlQuery = `INSERT INTO user_participate_events SET ? 
    ;`;

    const [rows] = await connection.query(sqlQuery, {
      user_iduser: userId,
      events_idevents: eventId
    });
    connection.release();

    return res.status(200).send({
      data: rows
    });
  } catch (e) {
    console.error(e);
    if (e.errno === 1062) {
      return res.status(409).send();
    }
    connection.release();
    return res.status(500).send({ message: e.message });
  }
}
module.exports = participation;
