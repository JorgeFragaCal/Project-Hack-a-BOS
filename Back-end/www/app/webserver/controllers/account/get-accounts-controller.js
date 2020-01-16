
'use strict';
const mysqlPool = require('../../../database/mysql-pool');
async function getAccounts(req, res, next) {
	/**
   * Select All Accounts
   */

	try {
		const sqlQuery = `SELECT  *
    FROM user 
    ORDER BY created_at
    ;`;

		const connection = await mysqlPool.getConnection();
		const [ rows ] = await connection.execute(sqlQuery, [ iduser ]);
		connection.release();

		console.log('rows', rows);

		return res.status(200).send({
			data: rows
		});
	} catch (e) {
		return res.status(500).send({ message: e.message });
	}

}
module.exports = getAccounts;
