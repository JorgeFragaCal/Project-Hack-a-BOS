"use strict";
const mysqlPool = require("../../../database/mysql-pool");
async function filterEventBySkill(req, res, next) {
  const { skill } = req.query;
  if (skill) {
    try {
      const sqlQuery = `SELECT *
    INNER JOIN events on ranking.events_idevents = events.idevents
    WHERE skills = ?
    ORDER BY puntuation desc
     ;`;
      const connection = await mysqlPool.getConnection();
      const [rows] = await connection.execute(sqlQuery, [skill]);
      connection.release();

      console.log("rows", rows);

      return res.status(200).send({
        data: rows
      });
    } catch (e) {
      return res.status(500).send({ message: e.message });
    }
  }
}
module.exports = filterEventBySkill;
