const Sequelize = require('sequelize')
const db = require('../db')

const TeamMember = db.define('teamMember', {
  name: {
    type: Sequelize.STRING,
  },
})

module.exports = TeamMember
