"use strict";
const mysqlPool = require("../../../database/mysql-pool");
async function getUser(req, res, next) {
  /*
    Get User Global Puntuation
    */
  const { id } = req.params;
  try {
    const sqlQuery = `SELECT sum(puntuation)'puntuation' 
    FROM Hackathones2.ranking 
    WHERE user_iduser=?;
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
module.exports = getUser;
