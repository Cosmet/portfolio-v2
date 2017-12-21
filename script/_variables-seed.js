const stackIcons = {
  'Javascript': 'javascript.svg',
  'React': 'react.svg',
  'Express': 'express.svg',
  'Node': 'node.svg',
  'PostgreSQL': 'postgresql.svg',
  'Sequelize': 'sequelize.svg',
  'Sass': 'sass.svg',
  'Firebase': 'firebase.svg',
  'Mocha': 'mocha.svg',
  'Chai': 'chai.svg',
  'Enzyme': 'enzyme.png',
  'Socket.io': 'socket-io.svg',
  'PeerJS': 'peerjs.png',
  'WebRTC': 'webrtc.svg',
  'OAuth': 'oauth.svg',
  'Passport': 'passport.svg',
  'Bulma': 'bulma.png',
  'Karma': 'karma.svg',
};

const mapStack = (arr) => arr.map(stack => ({ name: stack, icon: stackIcons[stack] }));

module.exports = {
  mapStack,
}
