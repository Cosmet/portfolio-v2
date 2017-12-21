const { mapStack } = require('./_variables-seed')

const gamepackig = {
  project: {
    name: 'Gamepackig',
    description: 'Mock e-commerce website that sells gaming systems, computers, and accessories.',
    cover: 'assets/projects/gamepackig-cover.png',
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
    'Sass',
    'OAuth',
    'Passport',
    'Mocha',
    'Chai',
  ],
  team: [
    {
      name: 'Damian Michniak'
    },
    {
      name: 'Jesse Barron'
    },
    {
      name: 'Bond Davis'
    },
  ],
  contributions: [
    {
      description: 'Implemented a persistent cart with cookies to enable seamless cart transition from guest to registered user.'
    },
    {
      description: 'Secured the API with a role based permission system to grant admin rights to manage inventory, users and products.'
    },
    {
      description: 'Designed and developed the UI and UX.'
    },
  ],
  features: [

  ],
}

gamepackig.stack = mapStack(gamepackig.stack)

module.exports = gamepackig
