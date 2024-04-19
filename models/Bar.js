const sequelize = require('sequelize');
const db = require('../config/database');

const Bar = db.define('bar', 
{
    id : { type: sequelize.INTEGER, primaryKey: true, autoIncrement: true },
    name: { type: sequelize.STRING, unique: true},
    tel: { type: sequelize.STRING  },
    email: { type: sequelize.STRING },
    description: { type: sequelize.TEXT }
});

Bar.hasMany(Biere,  {
    onDelete: "CASCADE",
    onUpdate: "CASCADE",
  })

module.exports = Bar;
