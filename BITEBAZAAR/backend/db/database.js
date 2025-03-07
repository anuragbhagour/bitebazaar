const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('mydb', 'admin', 'secret', {
  host: 'localhost',
  dialect: 'postgres'
});

module.exports = sequelize;
