'use strict';
const mysqlPool = require('../../../database/mysql-pool');
async function filterRanking(req, res, next) {
	//const { skill, city, date_init, date_final } = req.query;
	const { puntuation, titleranking, user, date_init, date_final } = req.query;

	if (puntuation) {
		try {
			const sqlQuery = `SELECT  *
      FROM Hackathones ranking .ranking 
      INNER JOIN user_participate_events_events_idevents = events.id
      WHERE skills = ?
      order by puntuation desc
      ;`;
			const connection = await mysqlPool.getConnection();
			const [ rows ] = await connection.execute(sqlQuery, [ puntuation ]);
			connection.release();

			console.log('rows', rows);

			return res.status(200).send({
				data: rows
			});
		} catch (e) {
			return res.status(500).send({ message: e.message });
		}
	}

	if (titleranking) {
		try {
			const sqlQuery = `SELECT *
    FROM ranking
    WHERE event = ?
   
     ;`;
			const connection = await mysqlPool.getConnection();
			const [ rows ] = await connection.execute(sqlQuery, [ titleranking ]);
			connection.release();

			console.log('rows', rows);

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
    FROM rankings
    WHERE start_date between ? and ?
   
     ;`;
			const connection = await mysqlPool.getConnection();
			const [ rows ] = await connection.execute(sqlQuery, [ date_init, date_final ]);
			connection.release();

			console.log('rows', rows);

			return res.status(200).send({
				data: rows
			});
		} catch (e) {
			return res.status(500).send({ message: e.message });
		}
	}
	res.status(400).send('not filter found');
}
module.exports = filterRanking;
