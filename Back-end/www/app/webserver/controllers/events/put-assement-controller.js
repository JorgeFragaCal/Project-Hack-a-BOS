"use strict";
const mysqlPool = require("../../../database/mysql-pool");
async function putAssement(req, res, next) {
  /**
   * Put puntuations on events
   */
  const userAssement = { ...req.body };

  try {
    const sqlQuery = `INSERT INTO user_assment_events SET ? 
    ;`;

    const connection = await mysqlPool.getConnection();
    const [rows] = await connection.execute(sqlQuery, {
      user_iduser: userAssement.user_iduser,
      events_idevents: userAssement.events_idevents,
      assement: userAssement.assement
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
