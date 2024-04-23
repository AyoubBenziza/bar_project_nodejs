const { param, body } = require("express-validator");

const validateIdBar = [param("idBar").notEmpty().isNumeric()];

const validateBarBody = [
  body("name").notEmpty().isString().withMessage("Name must be a string"),
  body("tel")
    .isMobilePhone({ local: "fr - FR" })
    .withMessage(`Le numéro de téléphone doit être au format: 01 02 03 04 04`),
  body("email").isEmail().isString().withMessage("Email must be a string"),
  body("description").isString().withMessage("Description must be a string"),
];

module.exports = { validateIdBar, validateBarBody };
