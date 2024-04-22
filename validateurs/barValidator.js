const { param } = require('express-validator');

const validateIdBar= [param('idBar').notEmpty().isNumeric()];

module.exports = { validateIdBar };
