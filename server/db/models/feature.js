const Sequelize = require('sequelize')
const db = require('../db')

const Feature = db.define('feature', {
  image: {
    type: Sequelize.STRING,
  },
  title: {
    type: Sequelize.STRING,
  },
  description: {
    type: Sequelize.TEXT,
  },
  order: {
    type: Sequelize.INTEGER,
  },
})

module.exports = Feature
