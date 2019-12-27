"use strict";
const mysqlPool = require("../../../database/mysql-pool");
async function getEvent(req, res, next) {
  /**
   * Get the details about a Event
   */
  const { id } = req.params;
  try {
    const sqlQuery = `SELECT  *
    FROM events 
    WHERE id=?
    ORDER BY start_date asc
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
module.exports = getEvent;
