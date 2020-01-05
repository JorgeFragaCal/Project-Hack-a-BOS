"use strict";

const Joi = require("@hapi/joi");
const mysqlPool = require("../../../database/mysql-pool");

async function validateSchema(payload) {
  const schema = Joi.object({
    username: Joi.string()
      .trim()
      .min(1)
      .max(45)
      .required(),
    name: Joi.string()
      .trim()
      .min(1)
      .max(45)
      .required(),
    lastname: Joi.string()
      .trim()
      .min(1)
      .max(45)
      .required(),
    email: Joi.string()
      .trim()
      .min(1)
      .max(45)
      .required(),
    phone: Joi.string()
      .trim()
      .min(1)
      .max(11)
      .required(),
    password: Joi.string()
      .trim()
      .min(1)
      .max(45)
      .required(),
    image: Joi.string()
      .trim()
      .min(1)
      .max(65536)
      .required(),
    address: Joi.string()
      .trim()
      .min(1)
      .max(45)
      .required(),
    city: Joi.string()
      .trim()
      .min(1)
      .max(45)
      .required(),
    country: Joi.string()
      .trim()
      .min(1)
      .max(45)
      .required(),
    userType: Joi.string()
      .trim()
      .min(1)
      .max(45)
      .required(),
    timeREgister: Joi.string()
      .trim()
      .min(1)
      .max(45)
      .required(),
    userId: Joi.string()
      .guid({
        version: ["uuidv4"]
      })
      .required(),
    userId: Joi.string()
      .guid({
        version: ["uuidv4"]
      })
      .required()
    // skills: Joi.array().items(Joi.string().guid({ version: ['uuidv4'] })),
  });

  Joi.assert(payload, schema);
}

/**
 * Create a new skill if does not exist
 * @param {Object} req
 * @param {Object} res
 * @param {Function} next
 * @returns {Object} Skill created
 */
async function updateUser(req, res, next) {
  const { userId } = req.claims;
  const userData = {
    ...req.body,
    userId
  };

  try {
    await validateSchema(userData);
  } catch (e) {
    console.error(e);
    return res.status(400).send(e);
  }

  try {
    const connection = await mysqlPool.getConnection();
    const now = new Date()
      .toISOString()
      .replace("T", " ")
      .substring(0, 19);
    const sqlUpdateUser = `UPDATE user
      SET username = ?,
        name = ?,
        lastname = ?,
        email = ?,
        phone = ?,
        password = ?,
        image = ?,
        address = ?,
        city = ?,
        country = ?,
        userType = ?,
        timeREgister = ?
      WHERE id = ?
        AND iduser = ?`;

    await connection.query(sqlUpdateUSer, [
      userData.username,
      userData.name,
      userData.lastname,
      userData.email,
      userData.phone,
      userData.password,
      userData,
      image,
      userData.address,
      userData.city,
      userData.country,
      userData.userType,
      userData.timeREgister,
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
