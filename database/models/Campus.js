const Sequelize = require('sequelize');
const db = require('../db');

const Campus = db.define("campus", {

  name: {
    type: Sequelize.STRING,
    allowNull: false,
    notEmpty: true
  },

  imageUrl:{
    type:Sequelize.STRING,
    defaultValue:"https://cdn.wallethub.com/wallethub/posts/85332/best-worst-college-towns-in-america.png",
    validate: {
      isURL: true
    }
  },

  address:{
    type: Sequelize.STRING,
    allowNull: false,
    notEmpty: true
  },

  description: {
    type: Sequelize.STRING,
  }

});

module.exports = Campus;