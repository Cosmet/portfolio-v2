const Sequelize = require('sequelize')
const db = require('../db')

const Project = db.define('project', {
  name: {
    type: Sequelize.STRING,
  },
  description: {
    type: Sequelize.TEXT,
  },
  cover: {
    type: Sequelize.STRING,
  },
  demo: {
    type: Sequelize.STRING,
  },
  code: {
    type: Sequelize.STRING,
  },
  video: {
    type: Sequelize.STRING,
  }
})

module.exports = Project
