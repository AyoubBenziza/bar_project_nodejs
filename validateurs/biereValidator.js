const { body, param, validationResult } = require("express-validator");

const validateIdBeer = [param("idBiere").notEmpty().isNumeric()];
const validateBodyBeer = [
  body("name").notEmpty().isString().withMessage("Name must be a string"),
  body("degree")
    .notEmpty()
    .isFloat({ min: 0 })
    .withMessage("degree must be a number over 0"),
  body("price")
    .notEmpty()
    .isFloat({ min: 0 })
    .withMessage("degree must be a number over 0"),
];

module.exports = { validateBodyBeer, validateIdBeer };
