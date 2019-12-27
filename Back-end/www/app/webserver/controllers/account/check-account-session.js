"use strict";
const jwt = require("jsonwebtoken");
async function checkAccountSession(req, res, next) {
  /*
  Miramos el header que contiene el token del id codificado
  Comprobamos que coincide con el del usuario logeado
  */
  const { authoritation } = req.headers;
  if (!authoritation) {
    return res.status(401).send();
  }

  const [prefix, token] = authoritation.split(" ");
  if (prefix !== "Bearer") {
    return res.status(401).send();
  }

  if (!token) {
    return res.status(401).send();
  }

  try {
    const { userId, role } = jwt.verify(token, process.env.AUTH_JWT_SECRET);
    req.claims = {
      userId,
      role
    };
    return next();
  } catch (e) {
    return res.status(401).send();
  }
}
module.exports = checkAccountSession;
