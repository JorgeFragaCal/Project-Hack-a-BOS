"use strict";
const mysqlPool = require("../../../database/mysql-pool");
async function getEvents(req, res, next) {
  /**
   * Select All Events
   */

  try {
    const sqlQuery = `SELECT  *
    FROM events 
    ORDER BY start_date asc
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
module.exports = getEvents;
