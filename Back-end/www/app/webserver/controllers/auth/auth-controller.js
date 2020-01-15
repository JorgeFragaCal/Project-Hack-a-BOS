"use strict";

const bcrypt = require("bcrypt");
const Joi = require("@hapi/joi");
const jwt = require("jsonwebtoken");
const mysqlPool = require("../../../database/mysql-pool");

async function validateSchema(payload) {
  const schema = Joi.object({
    email: Joi.string()
      .email()
      .required(),
    password: Joi.string()
      .regex(/^[a-zA-Z0-9]{3,30}$/)
      .required(),
    userType: Joi.string()
  });

  Joi.assert(payload, schema);
}

async function login(req, res, next) {
  const authData = { ...req.body };

  try {
    await validateSchema(authData);
  } catch (e) {
    return res.status(400).send(e);
  }

  try {
    const sqlQuery = `SELECT *
      FROM user
      WHERE email = '${authData.email}'`;

    const connection = await mysqlPool.getConnection();
    const [dataUser] = await connection.query(sqlQuery);

    connection.release();

    if (dataUser.length !== 1) {
      return res.status(401).send("Account does not exist");
    }

    const userData = dataUser[0];

    const isPassworkOk = await bcrypt.compare(
      authData.password,
      userData.password
    );
    if (!isPassworkOk) {
      return res.status(401).send("Account does not exist");
    }

    const paylodJwt = {
      userId: userData.id,
      userType: userData.userType
    };

    const jwtExpiresIn = parseInt(process.env.AUTH_ACCESS_TOKEN_TTL);
    const token = jwt.sign(paylodJwt, process.env.AUTH_JWT_SECRET, {
      expiresIn: jwtExpiresIn
    });

    const response = {
      token,
      expiresIn: jwtExpiresIn,
      userData
    };

    return res.status(200).send(response);
  } catch (e) {
    console.error(e);
    return res.status(500).send({
      message: e.message
    });
  }
}

module.exports = login;
