"use strict";
const mysqlPool = require("../../../database/mysql-pool");
async function getUserRanking(req, res, next) {
  /**
   * Select User Rankings
   */
  const { id } = req.params;
  try {
    const sqlQuery = `SELECT title , puntuation,skills,username
    FROM ranking 
    INNER JOIN user on ranking.user_iduser = user.id
    INNER JOIN events on ranking.events_idevents = events.id
    WHERE user.id=?
    ORDER BY puntuation desc
    ;`;

    const connection = await mysqlPool.getConnection();
    const [rows] = await connection.execute(sqlQuery, [id]);
    connection.release();

    console.log("rows", rows);

    return res.status(200).send({
      data: rows
    });
  } catch (e) {
    return res.status(500).send({ message: e.message });
  }
}
module.exports = getUserRanking;
