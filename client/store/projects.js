import axios from 'axios'

/**
 * ACTION TYPES
 */
const GET_PROJECTS = 'GET_PROJECTS'

/**
 * INITIAL STATE
 */
const defaultProjects = []

/**
 * ACTION CREATORS
 */
const getProjects = projects => ({ type: GET_PROJECTS, projects })

/**
 * THUNK CREATORS
 */
export const fetchProjects = () => dispatch =>
  axios.get('/api/projects')
    .then(({data}) => {
      dispatch(getProjects(data))
    })
    .catch(console.error)

/**
* REDUCER
*/
export default function (state = defaultProjects, action) {
  switch (action.type) {
    case GET_PROJECTS:
      return action.projects
    default:
      return state
  }
}
