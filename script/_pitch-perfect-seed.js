const { mapStack } = require('./_variables-seed')

const pitchPerfect = {
  project: {
    name: 'Pitch Perfect',
    description: 'Real-time peer to peer video communication chat room to practice your elevator pitch.',
    cover: 'assets/projects/pitch-perfect/cover.png',
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
    {
      title: 'Your Pitch',
      description: "Don't know what a pitch is? No worries! Here's a quick overview.",
      image: 'assets/projects/pitch-perfect/pitch.png',
      order: 0,
    },
    {
      title: 'Make A Pitch',
      description: "Wondering how to make a pitch? Here's some tips.",
      image: 'assets/projects/pitch-perfect/make-pitch.png',
      order: 1,
    },
    {
      title: 'Find A Partner',
      description: 'Get connected to a random available person with the click of a button!',
      image: 'assets/projects/pitch-perfect/search.png',
      order: 2,
    },
    {
      title: 'Live Video Chat',
      description: 'Practice pitching to your randomized pair.',
      image: 'assets/projects/pitch-perfect/chat.png',
      order: 3,
    },
    {
      title: 'Natural Conversation',
      description: 'The video feed is positioned at the top to force you to have closer eye contact with the webcam producing a more natural conversation.',
      image: 'assets/projects/pitch-perfect/cover.png',
      order: 4,
    },
    {
      title: 'Your Script',
      description: 'Having trouble remembering your pitch? Write it down so you can peek at it when you get stuck.',
      image: 'assets/projects/pitch-perfect/script.png',
      order: 5,
    },
    {
      title: 'Leave Feedback',
      description: 'Got something to say to your partner about their pitch? Leave some feedback using this form so they can always look back at how much they improved.',
      image: 'assets/projects/pitch-perfect/leave-feedback.png',
      order: 6,
    },
    {
      title: 'Receive Feedback',
      description: 'Get instant feedback so you know how you did.',
      image: 'assets/projects/pitch-perfect/get-feedback.png',
      order: 7,
    },
  ],
}

pitchPerfect.stack = mapStack(pitchPerfect.stack)

module.exports = pitchPerfect
