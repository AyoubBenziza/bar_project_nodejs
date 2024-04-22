const { validationResult } = require("express-validator");

const validate = (req, res, next) => {
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    return res.send({ errors: errors.array() });
  }
  next();
};

module.exports = validate;
