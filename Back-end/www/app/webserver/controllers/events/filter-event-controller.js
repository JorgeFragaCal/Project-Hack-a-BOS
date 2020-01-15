"use strict";
const mysqlPool = require("../../../database/mysql-pool");
async function filterEvent(req, res, next) {
  const { skill, city, date_init, date_final } = req.query;

  if (skill && city) {
    try {
      const sqlQuery = `SELECT DISTINCT 
      id, title, start_date,city, image, email, prize, web, address, country
      FROM ranking 
      INNER JOIN events on ranking.events_idevents = events.id
      WHERE skills = ? and LOCATE(?, city) > 0;`;
      const connection = await mysqlPool.getConnection();
      const [rows] = await connection.execute(sqlQuery, [skill, city]);
      connection.release();

      console.log("rows", rows);
      if (!rows.length) {
        return res.status(404).send();
      }

      return res.status(200).send({
        data: rows
      });
    } catch (e) {
      console.error(e);
      connection.release();
      return res.status(500).send({ message: e.message });
    }
  }

  if (skill) {
    try {
      const sqlQuery = `SELECT DISTINCT 
      id, title, start_date,city, image, email, prize, web, address, country
      FROM ranking 
      INNER JOIN events on ranking.events_idevents = events.id
      WHERE skills = ?;`;
      const connection = await mysqlPool.getConnection();
      const [rows] = await connection.execute(sqlQuery, [skill]);
      connection.release();

      console.log("rows", rows);
      if (!rows.length) {
        return res.status(404).send();
      }

      return res.status(200).send({
        data: rows
      });
    } catch (e) {
      console.error(e);
      connection.release();
      return res.status(500).send({ message: e.message });
    }
  }

  if (city) {
    try {
      const sqlQuery = `SELECT *
    FROM events
    WHERE LOCATE(?, city) > 0
     ;`;
      const connection = await mysqlPool.getConnection();
      const [rows] = await connection.execute(sqlQuery, [city]);
      connection.release();

      console.log("rows", rows);
      if (!rows.length) {
        return res.status(404).send();
      }

      return res.status(200).send({
        data: rows
      });
    } catch (e) {
      connection.release();
      return res.status(500).send({ message: e.message });
    }
  }
  if (date_init && date_final) {
    try {
      const sqlQuery = `SELECT *
    FROM events
    WHERE start_date between ${date_init} and ${date_final}
   
     ;`;
      const connection = await mysqlPool.getConnection();
      const [rows] = await connection.execute(sqlQuery, [
        date_init,
        date_final
      ]);
      connection.release();

      console.log("rows", rows);
      if (!rows.length) {
        return res.status(404).send();
      }

      return res.status(200).send({
        data: rows
      });
    } catch (e) {
      connection.release();
      return res.status(500).send({ message: e.message });
    }
  } else {
    try {
      const sqlQuery = `SELECT  *
    FROM events 
    ORDER BY start_date asc
    ;`;

      const connection = await mysqlPool.getConnection();
      const [rows] = await connection.execute(sqlQuery, []);
      connection.release();

      console.log("rows", rows);
      if (!rows.length) {
        return res.status(404).send();
      }

      return res.status(200).send({
        data: rows
      });
    } catch (e) {
      connection.release();
      return res.status(500).send({ message: e.message });
    }
  }
  res.status(400).send("not filter found");
}
module.exports = filterEvent;
