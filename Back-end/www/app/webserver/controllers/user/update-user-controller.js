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
    avatar: Joi.string()
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
    created_at: Joi.string()
      .trim()
      .min(1)
      .max(45)
      .required(),
    verification_code: Joi.string()
      .trim()
      .min(1)
      .max(100)
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
        created_at = ?,
        verification_code
      WHERE id = ?
        AND iduser = ?`;

    await connection.query(sqlUpdateUser, [
      userData.username,
      userData.name,
      userData.lastname,
      userData.email,
      userData.phone,
      userData.password,
      userData,
      avatar,
      userData.address,
      userData.city,
      userData.country,
      userData.userType,
      userData.created_at,
      userData.verification_code,
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
