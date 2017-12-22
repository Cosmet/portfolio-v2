const { mapStack } = require('./_variables-seed')

const campusCompanion = {
  project: {
    name: 'Campus Companion',
    description: 'Student management system for school administrators allowing management of one or multiple campuses and their respective students.',
    cover: 'assets/projects/campus-companion/cover.png',
    demo: '',
    code: 'https://github.com/Cosmet/senior-enrichment',
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
    {
      title: 'View Campuses',
      description: 'Manage multiple campuses easily by clicking on it. You can view all of the students in each campus.',
      image: 'assets/projects/campus-companion/campuses.png',
      order: 0,
    },
    {
      title: 'Add New Campus',
      description: 'Want to add a new campus into your system? No problem. Do it in less than 10 seconds!',
      image: 'assets/projects/campus-companion/add-campus.png',
      order: 1,
    },
    {
      title: 'Edit Campus',
      description: 'Did a campus change its name or logo? No problem! Changing that is just as easy as adding a new campus.',
      image: 'assets/projects/campus-companion/edit-campus.png',
      order: 2,
    },
    {
      title: 'View Students',
      description: 'Want to see a list of every student in your system? No problem here is a list of every student in every campus you manage.',
      image: 'assets/projects/campus-companion/students.png',
      order: 3,
    },
    {
      title: 'Add New Student',
      description: "It's the new semester and you have hundreds of students to add into the system? Easy. Adding their information is easier than peanut butter and jelly.",
      image: 'assets/projects/campus-companion/add-student.png',
      order: 4,
    },
    {
      title: 'Edit Student',
      description: "Student changed their email or wants a new ID picture? Don't sweat.",
      image: 'assets/projects/campus-companion/edit-student.png',
      order: 5,
    },
    {
      title: 'Search',
      description: 'Want to find information about a specific student? This search bar is the best thing since sliced bread. No more scrolling through a list of thousands of students',
      image: 'assets/projects/campus-companion/search.png',
      order: 6,
    },
  ],
};

campusCompanion.stack = mapStack(campusCompanion.stack)

module.exports = campusCompanion
