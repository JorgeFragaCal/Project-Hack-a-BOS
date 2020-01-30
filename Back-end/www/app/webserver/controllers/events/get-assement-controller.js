'use strict';
const mysqlPool = require('../../../database/mysql-pool');
async function getAssement(req, res, next) {
  /**
     
     */
  const { id } = req.params;
  try {
    const sqlQuery = `SELECT avg(assement)'assement' FROM Hackathones2.user_assment_events where events_idevents=?;
    ;`;

    const connection = await mysqlPool.getConnection();
    const [rows] = await connection.execute(sqlQuery, [id]);
    connection.release();

    console.log('rows', rows);

    return res.status(200).send({
      data: rows
    });
  } catch (e) {
    return res.status(500).send({ message: e.message });
  }
}
module.exports = getAssement;
