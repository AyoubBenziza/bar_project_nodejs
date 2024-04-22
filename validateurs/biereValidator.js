const { body, param, validationResult } = require("express-validator");

const validateIdBeer = [param("idBiere").notEmpty().isNumeric()];
const validateBodyBeer = [
  body("name").notEmpty().isString(),
  body("degree").isFloat,
  body("degree").isFloat,
];

module.exports = { validateBodyBeer, validateIdBeer };
