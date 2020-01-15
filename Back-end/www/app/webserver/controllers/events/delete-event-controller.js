"use strict";

const mysqlPool = require("../../../database/mysql-pool");

async function deleteEvent(req, res) {
  const { userType } = req.claims;
  const { eventId } = req.params;

  if (userType !== "Organizating") {
    return res.status(403).send();
  }

  const connection = await mysqlPool.getConnection();
  const sqlQuery = "DELETE FROM events WHERE id = ?";

  try {
    const [rows] = await connection.execute(sqlQuery, [eventId]);
    connection.release();

    if (!rows.affectedRows) {
      return res.status(404).send();
    }

    return res.status(200).send();
  } catch (e) {
    console.error(e);
    return res.status(500).send();
  }
}

module.exports = deleteEvent;
