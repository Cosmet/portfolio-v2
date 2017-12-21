const db = require('../server/db')
const {
  User,
  Project,
  Contribution,
  Feature,
  TeamMember,
  Tech,
} = require('../server/db/models')
const domination = require('./_domination-seed')
const pitchPerfect = require('./_pitch-perfect-seed')
const campusCompanion = require('./_campus-companion-seed')
const gamepackig = require('./_gamepackig-seed')

const projectData = [
  domination,
  pitchPerfect,
  campusCompanion,
  gamepackig
];

function createModel(model, obj, projectId = {}) {
  return model.create(Object.assign({}, obj, projectId));
}

function createAll(allProjects, projectIds, model, data) {
  const results = [];
  allProjects.forEach(singleProject => {
    const projectId = { projectId: projectIds[singleProject.project.name] };
    singleProject[data].forEach(res => {
      results.push(createModel(model, res, projectId))
    });
  });
  return results;
}

async function seed() {
  await db.sync({ force: true })
  console.log('db synced!')

  const users = await Promise.all([
    User.create({ email: 'cody@email.com', password: '123' }),
    User.create({ email: 'murphy@email.com', password: '123' })
  ])
  console.log(`seeded ${users.length} users`)
  // ----- end users

  const projects = await Promise.all(projectData.map(data => createModel(Project, data.project)));
  console.log(`seeded ${projects.length} projects`);

  const projectIds = {};
  projects.forEach(project => projectIds[project.name] = project.id);
  // ----- end projects

  const features = await Promise.all(createAll(projectData, projectIds, Feature, 'features'));

  console.log(`seeded ${features.length} features`);
  // ----- end features

  const contributions = await Promise.all(createAll(projectData, projectIds, Contribution, 'contributions'));

  console.log(`seeded ${contributions.length} contributions`);
  // ----- end contributions

  const teamMembers = await Promise.all(createAll(projectData, projectIds, TeamMember, 'team'));

  console.log(`seeded ${teamMembers.length} team members`);
  // ----- end team members

  const stack = await Promise.all(createAll(projectData, projectIds, Tech, 'stack'));

  console.log(`seeded ${stack.length} technologies`);
  // ----- end stack

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
