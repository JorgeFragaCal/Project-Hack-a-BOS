"use strict";
const mysqlPool = require("../../../database/mysql-pool");
async function getSkills(req, res, next) {
  /**
   * Select All Skills
   */
  try {
    const sqlQuery = `SELECT distinct skills
    FROM ranking 
    ORDER BY skills desc
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
module.exports = getSkills;
