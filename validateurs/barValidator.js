const { param } = require('express-validator');

const validateIdBar= [param('id').notEmpty().isNumeric()];

module.exports = { validateIdBar };
