const User = require('./user')
const Project = require('./project')
const Contribution = require('./contribution')
const Feature = require('./feature')
const TeamMember = require('./teamMember')
const Tech = require('./tech')

/**
 * If we had any associations to make, this would be a great place to put them!
 * ex. if we had another model called BlogPost, we might say:
 *
 *    BlogPost.belongsTo(User)
 */
Project.hasMany(Contribution)
Project.hasMany(Feature)
Project.hasMany(TeamMember)
Project.hasMany(Tech, { as: 'stack' })
/**
 * We'll export all of our models here, so that any time a module needs a model,
 * we can just require it from 'db/models'
 * for example, we can say: const {User} = require('../db/models')
 * instead of: const User = require('../db/models/user')
 */
module.exports = {
  User,
  Project,
  Contribution,
  Feature,
  TeamMember,
  Tech,
}
