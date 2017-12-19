/**
 * `components/index.js` exists simply as a 'central export' for our components.
 * This way, we can import all of our components from the same place, rather than
 * having to figure out which file they belong to!
 */
export { default as Main } from './main'
export { default as UserHome } from './user-home'
export { Login, Signup } from './auth-form'
export { default as Hero } from './hero'
export { default as Projects } from './projects'
export { default as Designs } from './designs'
export { default as Contact } from './contact'
export { default as SingleProject } from './single-project'

