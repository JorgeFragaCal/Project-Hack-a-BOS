"use strict";

const bcrypt = require("bcrypt");
const cryptoRandomString = require("crypto-random-string");
const httpServerDomain = process.env.HTTP_SERVER_DOMAIN;
const Joi = require("@hapi/joi");
const mysqlPool = require("../../../database/mysql-pool");
const sendgridMail = require("@sendgrid/mail");
const uuidV4 = require("uuid/v4");
sendgridMail.setApiKey(process.env.SENDGRID_API_KEY);

async function validateSchema(payload) {
  const schema = Joi.object({
    username: Joi.string().required(),
    name: Joi.string(),
    lastName: Joi.string(),
    email: Joi.string()
      .email()
      .required(),
    phone: Joi.string(),
    password: Joi.string()
      .regex(/^[a-zA-Z0-9]{3,30}$/)
      .required(),
    image: Joi.string(),
    address: Joi.string(),
    city: Joi.string(),
    country: Joi.string(),
    userType: Joi.string()
  });
  Joi.assert(payload, schema);
}

async function sendEmailRegistration(userEmail, verificationCode) {
  const linkActivacion = `${httpServerDomain}/api/account/activation?verification_code=${verificationCode}`;
  const msg = {
    to: userEmail,
    from: {
      email: "hackathones@yopmail.com",
      name: "HACKATHONES"
    },
    subject: "Welcome to Hackathones",
    text: "Start participating in a event",
    html: `To confirm the account <a href="${linkActivacion}">activate it here</a>`
  };

  const data = await sendgridMail.send(msg);

  return data;
}

async function createAccount(req, res, next) {
  const accountData = { ...req.body };
  try {
    await validateSchema(accountData);
  } catch (e) {
    return res.status(400).send(e);
  }
  const now = new Date();
  const createdAt = now
    .toISOString()
    .substring(0, 19)
    .replace("T", " ");
  const userId = uuidV4();
  const securePassword = await bcrypt.hash(accountData.password, 10);

  try {
    //const verificationCode = cryptoRandomString({ length: 64 });
    const connection = await mysqlPool.getConnection();
    const sqlInsercion = "INSERT INTO user SET ?";

    await connection.query(sqlInsercion, {
      id: userId,
      username: accountData.username,
      name: accountData.name,
      lastName: accountData.lastName,
      email: accountData.email,
      password: securePassword,
      phone: accountData.phone,
      avatar: accountData.image,
      address: accountData.address,
      city: accountData.city,
      country: accountData.country,
      userType: accountData.userType,
      created_at: createdAt
      //verification_code: verificationCode
    });

    connection.release();

    // await sendEmailRegistration(accountData.email, verificationCode);

    res.status(201).send("account created");
  } catch (e) {
    return res.status(500).send({ message: e.message });
  }
}
module.exports = createAccount;
