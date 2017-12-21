/**
 * Welcome to the seed file! This seed file uses a newer language feature called...
 *
 *                  -=-= ASYNC...AWAIT -=-=
 *
 * Async-await is a joy to use! Read more about it in the MDN docs:
 *
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/async_function
 *
 * Now that you've got the main idea, check it out in practice below!
 */
const db = require('../server/db')
const {
  User,
  Project,
  Contribution,
  Feature,
  TeamMember,
  Tech,
} = require('../server/db/models')

async function seed() {
  await db.sync({ force: true })
  console.log('db synced!')
  // Whoa! Because we `await` the promise that db.sync returns, the next line will not be
  // executed until that promise resolves!

  const users = await Promise.all([
    User.create({ email: 'cody@email.com', password: '123' }),
    User.create({ email: 'murphy@email.com', password: '123' })
  ])
  // Wowzers! We can even `await` on the right-hand side of the assignment operator
  // and store the result that the promise resolves to in a variable! This is nice!
  console.log(`seeded ${users.length} users`)

  // ----- end users

  const projects = await Promise.all([
    Project.create({
      name: 'Domination',
      description: 'Turn-based strategy game inspired by the classic board game Risk. Featuring real-time multiplayer and artificial intelligence.',
      cover: 'assets/projects/domination/cover.png',
      demo: '',
      code: '',
      video: 'https://www.youtube.com/embed/watch?v=51-RLBMWXgQ',
    }),
    Project.create({
      name: 'Pitch Perfect',
      description: 'Real-time peer to peer video communication chat room to practice your elevator pitch.',
      cover: 'assets/projects/pitch-perfect-cover.png',
      demo: '',
      code: '',
    }),
    Project.create({
      name: 'Gamepackig',
      description: 'Mock e-commerce website that sells gaming systems, computers, and accessories.',
      cover: 'assets/projects/gamepackig-cover.png',
      demo: '',
      code: '',
    }),
    Project.create({
      name: 'Campus Companion',
      description: 'Student management system for school administrators allowing management of one or multiple campuses and their respective students.',
      cover: 'assets/projects/campus-companion-cover.png',
      demo: '',
      code: '',
    }),
  ]);
  // Wowzers! We can even `await` on the right-hand side of the assignment operator
  // and store the result that the promise resolves to in a variable! This is nice!
  console.log(`seeded ${projects.length} projects`);

  const projectIds = {};
  projects.forEach(project => projectIds[project.name] = project.id);

  // ----- end projects

  const dominationFeatures = [
    {
      title: 'Tutorial',
      description: 'New to the game? Play against our residential AI, Zero, to learn the ropes.',
      image: 'assets/projects/domination/tutorial.png',
      order: 0,
    },
    {
      title: 'Artificial Intelligence',
      description: 'We built an AI using a probability matrix and a genetic algorithm. We pitted several different personality traits against each other over 500,000,000 simulations and 2,000 generations to see which AI was the most powerful to battle you in game.',
      image: 'assets/projects/domination/robot.svg',
      order: 1,
    },
    {
      title: 'New Game',
      description: ' You can start a new game with your own custom settings. You can choose to play against players and AI. Choose the board size, amount of void space, units gained per terittory owned, landmarks, and landmark bonsues.',
      image: 'assets/projects/domination/new-game.png',
      order: 2,
    },
    {
      title: 'Join Game',
      description: 'Play with your friends or strangers by joining a game from the available games list.',
      image: 'assets/projects/domination/join-game.png',
      order: 3,
    },
    {
      title: 'Random Boards',
      description: 'A randomized board is generated each game using a pathfinding algorithm to generate a board that has no isolated hexes. Random tile sprites and landmarks are also assigned.',
      image: 'assets/projects/domination/board.png',
      order: 4,
    },
    {
      title: 'Classes',
      description: 'Choose your class and receive special powers. *This feature is still in development.',
      image: 'assets/projects/domination/class.png',
      order: 5,
    },
    {
      title: 'Allotment & Attack Phase',
      description: 'At the beginning of each turn you receive allotment points based on how many territories and landmarks that you own. You may then attack with any territory that has more than 1 unit. Possible attacks are highlighted with a red border.',
      image: 'assets/projects/domination/attack.png',
      order: 6,
    },
    {
      title: 'Fortification Phase',
      description: 'After your attack you may fortify one of your territories by moving units from a territoy with more than 1 unit on it to its neighbor.',
      image: 'assets/projects/domination/fortification.png',
      order: 7,
    },
    {
      title: 'AI-Turn',
      description: 'We intentionally slowed down the AI so you can track its movements and see what it does. Otherwise they would take over your territories in the blink of an eye!',
      image: 'assets/projects/domination/ai-turn.png',
      order: 8,
    },
    {
      title: 'Turn Indication',
      description: "See who's turn it is easily by looking at who has either the knight, swords, or castle next to their player name.",
      image: 'assets/projects/domination/turn.png',
      order: 9,
    },
    {
      title: 'Battle',
      description: "Roll the dice and see who wins! Attacker rolls 3 dice and defender rolls 2 dice, but wins on ties. Feeling lucky?",
      image: 'assets/projects/domination/battle.png',
      order: 10,
    },
    {
      title: 'Scoreboard',
      description: "See how you rank up against your opponents. Maybe you haven't noticed Zero controls all the landmarks!",
      image: 'assets/projects/domination/scoreboard.png',
      order: 11,
    },
  ].map(feature => {
    return Feature.create({
      ...feature,
      projectId: projectIds['Domination'],
    });
  });

  const features = await Promise.all([
    ...dominationFeatures,
  ]);
  // Wowzers! We can even `await` on the right-hand side of the assignment operator
  // and store the result that the promise resolves to in a variable! This is nice!
  console.log(`seeded ${features.length} features`);


  // ----- end features

  const dominationContributions = [
    'Implemented real-time multiplayer capability.',
    'Implemented a pathfinding algorithm to generate a random valid board on each game.',
    'Designed and developed the core game and game mechanics.',
    'Designed and developed the UI and UX.',
  ].map(description => {
    return Contribution.create({
      description,
      projectId: projectIds['Domination'],
    });
  });

  const pitchPerfectContributions = [
    "Won people’s choice award for Fullstack Academy's hackathon project.",
    'Implemented a second server over HTTPS to handle connections securely between two clients.',
  ].map(description => {
    return Contribution.create({
      description,
      projectId: projectIds['Pitch Perfect'],
    });
  });

  const gamepackigContributions = [
    'Implemented a persistent cart with cookies to enable seamless cart transition from guest to registered user.',
    'Secured the API with a role based permission system to grant admin rights to manage inventory, users and products.',
    'Designed and developed the UI and UX.',
  ].map(description => {
    return Contribution.create({
      description,
      projectId: projectIds['Gamepackig'],
    });
  });

  const campusCompanionContributions = [
    'Created a RESTful interface to add/view/edit/delete students and campuses.',
  ].map(description => {
    return Contribution.create({
      description,
      projectId: projectIds['Campus Companion'],
    });
  });

  const contributions = await Promise.all([
    ...dominationContributions,
    ...pitchPerfectContributions,
    ...gamepackigContributions,
    ...campusCompanionContributions,
  ]);
  // Wowzers! We can even `await` on the right-hand side of the assignment operator
  // and store the result that the promise resolves to in a variable! This is nice!
  console.log(`seeded ${contributions.length} contributions`);

  // ----- end contributions

  const dominationTeamMembers = [
    'Damian Michniak',
    'BreAnna Silva',
    'Zachary Friedman',
    'Christian Sadi',
  ].map(name => {
    return TeamMember.create({
      name,
      projectId: projectIds['Domination'],
    });
  });

  const pitchPerfectTeamMembers = [
    'Damian Michniak',
  ].map(name => {
    return TeamMember.create({
      name,
      projectId: projectIds['Pitch Perfect'],
    });
  });

  const gamepackigTeamMembers = [
    'Damian Michniak',
    'Jesse Barron',
    'Bond Davis',
  ].map(name => {
    return TeamMember.create({
      name,
      projectId: projectIds['Gamepackig'],
    });
  });

  const campusCompanionTeamMembers = [
    'Damian Michniak',
  ].map(name => {
    return TeamMember.create({
      name,
      projectId: projectIds['Campus Companion'],
    });
  });

  const teamMembers = await Promise.all([
    ...dominationTeamMembers,
    ...pitchPerfectTeamMembers,
    ...gamepackigTeamMembers,
    ...campusCompanionTeamMembers,
  ]);
  // Wowzers! We can even `await` on the right-hand side of the assignment operator
  // and store the result that the promise resolves to in a variable! This is nice!
  console.log(`seeded ${teamMembers.length} team members`);

  // ----- end team members

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
  }

  const dominationStack = [
    'Javascript',
    'React',
    'Express',
    'Node',
    'PostgreSQL',
    'Sequelize',
    'Sass',
    'Firebase',
    'Mocha',
    'Chai',
    'Enzyme',
    'Karma',
    'OAuth',
    'Passport',
  ].map(name => {
    return Tech.create({
      name,
      icon: stackIcons[name],
      projectId: projectIds['Domination'],
    });
  });

  const pitchPerfectStack = [
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
  ].map(name => {
    return Tech.create({
      name,
      icon: stackIcons[name],
      projectId: projectIds['Pitch Perfect'],
    });
  });

  const gamepackigStack = [
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
  ].map(name => {
    return Tech.create({
      name,
      icon: stackIcons[name],
      projectId: projectIds['Gamepackig'],
    });
  });

  const campusCompanionStack = [
    'Javascript',
    'React',
    'Express',
    'Node',
    'PostgreSQL',
    'Sequelize',
    'Bulma',
  ].map(name => {
    return Tech.create({
      name,
      icon: stackIcons[name],
      projectId: projectIds['Campus Companion'],
    });
  });

  const stack = await Promise.all([
    ...dominationStack,
    ...pitchPerfectStack,
    ...gamepackigStack,
    ...campusCompanionStack,
  ]);
  // Wowzers! We can even `await` on the right-hand side of the assignment operator
  // and store the result that the promise resolves to in a variable! This is nice!
  console.log(`seeded ${stack.length} technologies`);

  console.log(`seeded successfully`)
}

// Execute the `seed` function
// `Async` functions always return a promise, so we can use `catch` to handle any errors
// that might occur inside of `seed`
seed()
  .catch(err => {
    console.error(err.message)
    console.error(err.stack)
    process.exitCode = 1
  })
  .then(() => {
    console.log('closing db connection')
    db.close()
    console.log('db connection closed')
  })

/*
 * note: everything outside of the async function is totally synchronous
 * The console.log below will occur before any of the logs that occur inside
 * of the async function
 */
console.log('seeding...')
