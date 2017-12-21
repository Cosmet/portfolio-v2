const { mapStack } = require('./_variables-seed')

const gamepackig = {
  project: {
    name: 'Gamepackig',
    description: 'Mock e-commerce website that sells gaming systems, computers, and accessories.',
    cover: 'assets/projects/gamepackig/cover.png',
    demo: 'https://gamepackig.herokuapp.com/',
    code: 'https://github.com/ThethreeMuscoders/gamepackig',
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
    {
      title: 'Find A Product',
      description: 'Search through the products easily with our filter for name, price, category, and rating.',
      image: 'assets/projects/gamepackig/filter.png',
      order: 0,
    },
    {
      title: 'Cart',
      description: 'Add items to your cart. The cart persists from unauthorized user to authorized user.',
      image: 'assets/projects/gamepackig/cart.png',
      order: 1,
    },
    {
      title: 'Checkout',
      description: 'Fill out your details and look over your order then finalize the order.',
      image: 'assets/projects/gamepackig/checkout.png',
      order: 2,
    },
    {
      title: 'Order Received',
      description: 'Success! Your order has been placed.',
      image: 'assets/projects/gamepackig/confirmed.png',
      order: 3,
    },
    {
      title: 'Leave A Review',
      description: 'Want to leave some feedback on the product you ordered?',
      image: 'assets/projects/gamepackig/reviews.png',
      order: 4,
    },
    {
      title: 'Admin Dashboard',
      description: "Admins can remove, add, update and view all products, reviews, users, and orders. Don't worry the API is secured too. :)",
      image: 'assets/projects/gamepackig/admin.png',
      order: 5,
    },
  ],
}

gamepackig.stack = mapStack(gamepackig.stack)

module.exports = gamepackig
