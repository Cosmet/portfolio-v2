const Sequelize = require('sequelize')
const db = require('../db')

const Tech = db.define('tech', {
  name: {
    type: Sequelize.STRING,
  },
  icon: {
    type: Sequelize.STRING,
  },
})

module.exports = Tech
