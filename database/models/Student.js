const Sequelize = require('sequelize');
const db = require('../db');

const Student = db.define("student", {

  firstname: {
    type: Sequelize.STRING,
    allowNull: false,
    notEmpty: true
  },

  lastname: {
    type: Sequelize.STRING,
    allowNull: false,
    notEmpty: true
  },

  email: {
    type: Sequelize.STRING,
    allowNull: false,
    notEmpty: true,
    validate: {
      isEmail: true
    }
  },

  imageUrl: {
    type: Sequelize.STRING,
    defaultValue: "https://www.naesp.org/wp-content/uploads/2021/03/ForStudentsStock1-600pxSq.png",
    validate: {
      isURL: true
    }
  },
  gpa: {
    type: Sequelize.DECIMAL,
    defaultValue: 0.0,
    validate: {
      max: 4.0,
      min: 0.0
    }
  }

});

module.exports = Student;