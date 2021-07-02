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
    defaultValue:'https://lh3.googleusercontent.com/proxy/PtR1aT8rbPDsY-4KyGjmjSC9432osqKrpskZm1PUm3oPVS7Aqs2S07S87s45yS3ir1jBe7wVZK9gTxan1Uawi4-VftnWCMu2lSV2YfeWNsNVTyu_cDtKm_O2DR3Ed1libDMHk3AFjatVffg1gCsKXZRTlaqC2fk',
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