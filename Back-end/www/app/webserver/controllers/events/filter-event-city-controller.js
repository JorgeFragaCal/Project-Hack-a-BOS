"use strict";
const mysqlPool = require("../../../database/mysql-pool");
async function filterEventByCity(req, res, next) {
  const { city } = req.query;
  if (city) {
    try {
      const sqlQuery = `SELECT ?
    FROM events
    WHERE city = ?
    ORDER BY puntuation desc
     ;`;
      const connection = await mysqlPool.getConnection();
      const [rows] = await connection.execute(sqlQuery, [
        {
          title: title,
          start_date: start_date,
          country: country,
          city: city,
          description: description,
          image: image,
          email: email,
          web: web
        },
        city
      ]);
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
module.exports = filterEventByCity;
