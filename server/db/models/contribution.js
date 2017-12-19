const Sequelize = require('sequelize')
const db = require('../db')

const Contribution = db.define('contribution', {
  description: {
    type: Sequelize.TEXT,
  },
})

module.exports = Contribution
