const { DataTypes } = require('sequelize');
const sequelize = require('./sequelize');

const Student = sequelize.define('Student', {
  full_name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  birth_date: {
    type: DataTypes.DATEONLY,
    allowNull: false,
  },
  gender: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  contact_number: {
    type: DataTypes.STRING(10),
    allowNull: false,
  },
  address: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  parent_contact: {
    type: DataTypes.STRING(10),
    allowNull: false,
  },
},
{
    timestamps:false
});




module.exports = Student;
