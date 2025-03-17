const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('student_management', 'root', '1234', {
  host: 'localhost',
  dialect: 'mysql',
  logging: console.log
});

module.exports = sequelize;
