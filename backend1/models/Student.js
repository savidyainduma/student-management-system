const { DataTypes } = require('sequelize');
const sequelize = require('./sequelize');

const Student = sequelize.define('Student', {
  FullName: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  BirthDate: {
    type: DataTypes.DATEONLY,
    allowNull: false,
  },
  Gender: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  ContactNumber: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  Address: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  ParentContact: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

module.exports = Student;
