"use strict";
const mysqlPool = require("../../../database/mysql-pool");
async function filterEvent(req, res, next) {
  const { skill, city, date_init, date_final } = req.query;

  if (skill) {
    try {
      const sqlQuery = `SELECT  *
      FROM Hackathones.ranking 
      INNER JOIN events on ranking.events_idevents = events.id
      WHERE skills = ?
      order by puntuation desc
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

  if (city) {
    try {
      const sqlQuery = `SELECT *
    FROM events
    WHERE city = ?
   
     ;`;
      const connection = await mysqlPool.getConnection();
      const [rows] = await connection.execute(sqlQuery, [city]);
      connection.release();

      console.log("rows", rows);

      return res.status(200).send({
        data: rows
      });
    } catch (e) {
      return res.status(500).send({ message: e.message });
    }
  }
  if (date_init && date_final) {
    try {
      const sqlQuery = `SELECT *
    FROM events
    WHERE start_date between ? and ?
   
     ;`;
      const connection = await mysqlPool.getConnection();
      const [rows] = await connection.execute(sqlQuery, [
        date_init,
        date_final
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
  res.status(400).send("not filter found");
}
module.exports = filterEvent;
