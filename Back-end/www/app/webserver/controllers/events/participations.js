"use strict";
const mysqlPool = require("../../../database/mysql-pool");
async function participation(req, res, next) {
  /**
   * PArticipations on events
   */
  const { id } = req.params;
  const idUser = { ...req.body };

  try {
    const sqlQuery = `INSERT INTO user_participate_events SET ? 
    ;`;

    const connection = await mysqlPool.getConnection();
    const [rows] = await connection.execute(sqlQuery, {
      user_iduser: idUser.user_iduser,
      events_idevents: idUser.events_idevents
    });
    connection.release();

    return res.status(200).send({
      data: rows
    });
  } catch (e) {
    return res.status(500).send({ message: e.message });
  }
}
module.exports = participation;
