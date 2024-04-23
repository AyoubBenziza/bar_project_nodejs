// Imports
const { validationResult } = require("express-validator");

// Middleware Validator
const validate = (req, res, next) => {
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    return res.send({ errors: errors.array() });
  }
  next();
};

// Exports
module.exports = validate;
