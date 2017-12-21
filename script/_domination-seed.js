const { mapStack } = require('./_variables-seed')

const domination = {
  project: {
    name: 'Domination',
    description: 'Turn-based strategy game inspired by the classic board game Risk. Featuring real-time multiplayer and artificial intelligence.',
    cover: 'assets/projects/domination/cover.png',
    demo: 'https://domination-squad.herokuapp.com/',
    code: 'https://github.com/the-capstones/domination',
    video: 'https://www.youtube.com/embed/51-RLBMWXgQ',
  },
  stack: [
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
  ],
  team: [
    {
      name: 'Damian Michniak'
    },
    {
      name: 'BreAnna Silva'
    },
    {
      name: 'Zachary Friedman'
    },
    {
      name: 'Christian Sadi'
    },
  ],
  contributions: [
    {
      description: 'Implemented real-time multiplayer capability.'
    },
    {
      description: 'Implemented a pathfinding algorithm to generate a random valid board on each game.'
    },
    {
      description: 'Designed and developed the core game and game mechanics.'
    },
    {
      description: 'Designed and developed the UI and UX.'
    },
  ],
  features: [
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
  ],
}

domination.stack = mapStack(domination.stack)

module.exports = domination
