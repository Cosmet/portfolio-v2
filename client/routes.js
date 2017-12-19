import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Route, Switch, Router } from 'react-router-dom'
import PropTypes from 'prop-types'
import history from './history'
import { Main, Hero, Projects, Designs, Contact, SingleProject } from './components'
import { me, fetchProjects } from './store'

/**
 * COMPONENT
 */
class Routes extends Component {
  componentDidMount() {
    this.props.loadInitialData();
  }

  render() {

    return (
      <Router history={history}>
        <Main>
          <Route exact path="/" component={Hero} />
          <Route exact path="/" component={Projects} />
          <Route exact path="/" component={Designs} />
          <Route exact path="/" component={Contact} />
          <Route exact path="/project/:name" component={SingleProject} />
        </Main>
      </Router>
    )
  }
}

/**
 * CONTAINER
 */
const mapState = (state) => {
  return {
  }
}

const mapDispatch = (dispatch) => {
  return {
    loadInitialData() {
      dispatch(me())
      dispatch(fetchProjects())
    }
  }
}

export default connect(mapState, mapDispatch)(Routes)

/**
 * PROP TYPES
 */
Routes.propTypes = {
  loadInitialData: PropTypes.func.isRequired,
}
