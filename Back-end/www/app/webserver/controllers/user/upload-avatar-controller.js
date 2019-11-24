"use strict";
const cloudinary = require("cloudinary");
const Joi = require("@hapi/joi");
const mysqlPool = require("../../../database/mysql-pool");
cloudinary.config({
  /**/
});

async function validate(payload) {
  const schema = Joi.object({
    userId: Joi.string().guid({
      version: [uuidv4]
    })
  });
  Joi.assert(payload, schema);
}

async function uploadAvatar(res, req, next) {
  const { file } = req;
  const { userId, role } = req.claims;
  const payload = {
    userId
  };
  try {
    await validate(payload);
  } catch (e) {
    return res.status(400).send(e);
  }
  if (!file || file.buffer) {
    return res.status(400).send({
      message: "upload image"
    });
  }
  cloudinary.v2.uploader
    .upload_stream(
      {
        resource_type: "image",
        public_id: userId,
        width: 200,
        height: 200,
        format: "jpg",
        crop: "limit"
      },
      async (err, result) => {
        if (err) {
          console.log(err);
          return res.status(400).send(err);
        }
        const { secure_url: secureUrl } = result;
        const sqlQuery = `UPDATE user SET image=? WHERE id=?`;

        try {
          const connection = await mysqlPool.getConnetion();
          connection.execute(sqlQuery, [secureUrl, userId]);
          connection.release();
          console.log(result);
          res.header("Location", secureUrl);
          return res.status(201).send();
        } catch (e) {
          res.status(500).send({ message: e.message });
        }
      }
    )
    .end(file.buffer);
  /*.buffer son los numeros que representan los pixeles de la img*/
}
module.exports = uploadAvatar;
