const { mapStack } = require('./_variables-seed')

const campusCompanion = {
  project: {
    name: 'Campus Companion',
    description: 'Student management system for school administrators allowing management of one or multiple campuses and their respective students.',
    cover: 'assets/projects/campus-companion-cover.png',
    demo: '',
    code: '',
  },
  stack: [
    'Javascript',
    'React',
    'Express',
    'Node',
    'PostgreSQL',
    'Sequelize',
    'Bulma',
  ],
  team: [
    {
      name: 'Damian Michniak',
    }
  ],
  contributions: [
    {
      description: 'Created a RESTful interface to add/view/edit/delete students and campuses.'
    },
  ],
  features: [

  ],
};

campusCompanion.stack = mapStack(campusCompanion.stack)

module.exports = campusCompanion
