const { mapStack } = require('./_variables-seed')

const pitchPerfect = {
  project: {
    name: 'Pitch Perfect',
    description: 'Real-time peer to peer video communication chat room to practice your elevator pitch.',
    cover: 'assets/projects/pitch-perfect-cover.png',
    demo: 'https://pitch-perfect-practice.herokuapp.com/',
    code: 'https://github.com/Cosmet/pitch-perfect',
  },
  stack: [
    'Javascript',
    'React',
    'Express',
    'Node',
    'PostgreSQL',
    'Sequelize',
    'Sass',
    'Socket.io',
    'PeerJS',
    'WebRTC',
  ],
  team: [
    {
      name: 'Damian Michniak'
    },
  ],
  contributions: [
    {
      description: "Won people’s choice award for Fullstack Academy's hackathon project."
    },
    {
      description: 'Implemented a second server over HTTPS to handle connections securely between two clients.'
    },
  ],
  features: [

  ],
}

pitchPerfect.stack = mapStack(pitchPerfect.stack)

module.exports = pitchPerfect
