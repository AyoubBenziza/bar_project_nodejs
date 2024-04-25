const { param, body } = require("express-validator");

const validateIdBar = [param("barId").notEmpty().isNumeric()];

const validateBarBody = [
  body("name").notEmpty().isString().withMessage("Name must be a string"),
  body("tel")
    .notEmpty()
    .withMessage(`Le numéro de téléphone doit être au format: 0102030404`),
  body("email")
    .notEmpty()
    .isEmail()
    .isString()
    .withMessage("Email must be a string"),
  body("description")
    .notEmpty()
    .isString()
    .withMessage("Description must be a string"),
  body("adresse").notEmpty().isString().withMessage("adresse must be a string"),
];

module.exports = { validateIdBar, validateBarBody };
