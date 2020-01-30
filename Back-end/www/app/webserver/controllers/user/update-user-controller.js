"use strict";

const Joi = require("@hapi/joi");
const mysqlPool = require("../../../database/mysql-pool");

async function validateSchema(payload) {
  const schema = Joi.object({
    username: Joi.string().max(45),
    name: Joi.string().max(45),
    lastName: Joi.string().max(45),
    email: Joi.string()
      .max(45)
      .email(),
    phone: Joi.string().max(11),
    avatar: Joi.string().max(65536),
    address: Joi.string().max(100),
    city: Joi.string().max(45),
    country: Joi.string().max(45),
    anonymous: Joi.string().max(45)
  });

  Joi.assert(payload, schema);
}

async function updateUser(req, res, next) {
  const { userId } = req.claims;
  const userData = { ...req.body };

  try {
    await validateSchema(req.body);
  } catch (e) {
    console.error(e);
    return res.status(400).send(e);
  }

  try {
    const connection = await mysqlPool.getConnection();

    const sqlUpdateUser = `UPDATE user
      SET username = ?,
        name = ?,
        lastname = ?,
        email = ?,
        phone = ?,
        avatar= ?,
        address = ?,
        city = ?,
        country = ?,
        anonymous =?
      WHERE id = ?`;

    await connection.query(sqlUpdateUser, [
      userData.username,
      userData.name,
      userData.lastName,
      userData.email,
      userData.phone,
      userData.avatar,
      userData.address,
      userData.city,
      userData.country,
      userData.anonymous,
      userId
    ]);
    connection.release();

    return res.status(204).send();
  } catch (e) {
    console.error(e);
    return res.status(500).send({
      message: e.message
    });
  }
}

module.exports = updateUser;
