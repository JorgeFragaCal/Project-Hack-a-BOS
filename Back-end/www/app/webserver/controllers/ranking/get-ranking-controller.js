"use strict";
const mysqlPool = require("../../../database/mysql-pool");
async function getRanking(req, res, next) {
  /**
   * Select All Rankings
   */
  try {
    const sqlQuery = `SELECT title ,username , puntuation,skills,user_iduser
    FROM Hackathones.ranking 
    INNER JOIN Hackathones.user on ranking.user_iduser = user.id
    INNER JOIN Hackathones.events on ranking.events_idevents = events.id
    ORDER BY puntuation desc
    ;`;

    const connection = await mysqlPool.getConnection();
    const [rows] = await connection.execute(sqlQuery, []);
    connection.release();

    console.log("rows", rows);

    return res.status(200).send({
      data: rows
    });
  } catch (e) {
    return res.status(500).send({ message: e.message });
  }
}
module.exports = getRanking;
