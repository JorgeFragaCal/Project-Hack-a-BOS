"use strict";
const mysqlPool = require("../../../database/mysql-pool");
async function getUserEvent(req, res, next) {
  /**
   * Select User Events
   */
  const { userId, role } = req.claims;
  try {
    const sqlQuery = `SELECT ?
    FROM user_participate_events 
    INNER JOIN user 
    ON user_participate_events.user_iduser = user.id
    INNER JOIN events 
    ON user_participate_events.events_idevents = events.idevents
    WHERE user_participate_events.user_iduser = ?
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
      userId
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
module.exports = getUserEvent;
