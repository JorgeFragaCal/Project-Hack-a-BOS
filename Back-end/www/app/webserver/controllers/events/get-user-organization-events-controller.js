"use strict";
const mysqlPool = require("../../../database/mysql-pool");
async function getUserOrganizateEvent(req, res, next) {
  /**
   * Select User Events
   */
  const { id } = req.params;
  try {
    const sqlQuery = `SELECT title, image,id
    FROM  events 
    WHERE creator = ?
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
module.exports = getUserOrganizateEvent;
