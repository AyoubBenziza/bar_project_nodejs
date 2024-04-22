const { body, param, validationResult } = require("express-validator");

const validateIdBeer = [param("idBiere").notEmpty().isNumeric()];
const validateBodyBeer = [
  body("name").notEmpty().isString(),
  body("degree").isFloat({ min: 0 }),
  body("price").isFloat({ min: 0 }),
];

module.exports = { validateBodyBeer, validateIdBeer };
