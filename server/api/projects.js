const router = require('express').Router()
const {
  Project,
  Contribution,
  Feature,
  TeamMember,
  Tech,
} = require('../db/models')
module.exports = router

router.get('/', (req, res, next) => {
  Project.findAll({
    include: [ Contribution, Feature, TeamMember, { model: Tech, as: 'stack' } ],
  })
    .then(users => res.json(users))
    .catch(next)
})
