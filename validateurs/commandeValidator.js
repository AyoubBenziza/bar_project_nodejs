// Imports
const { param, body } = require("express-validator");

// Validators
const validateCommandId = [
  param("idCommand")
    .notEmpty()
    .isNumeric()
    .withMessage("idCommand must be a numeric"),
];

const validateCommandBody = [
  body("name")
    .trim()
    .notEmpty()
    .isString()
    .withMessage("Name must be a string"),
  body("price")
    .notEmpty()
    .isFloat({ min: 0 })
    .withMessage("price must be a number over 0"),
  body("date").notEmpty().isDate().withMessage("date must be a date"),
  body("status")
    .trim()
    .notEmpty()
    .isString()
    .withMessage("status must be a string")
    .isIn(["en cours", "terminée"])
    .withMessage("Status does contain invalid value"),
];

// Exports
module.exports = { validateCommandId, validateCommandBody };
