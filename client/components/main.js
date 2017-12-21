import '../css/main.scss'
import React from 'react'
import { connect } from 'react-redux'
import { withRouter, Link } from 'react-router-dom'
import { logout } from '../store'

/**
 * COMPONENT
 *  The Main component is our 'picture frame' - it displays the navbar and anything
 *  else common to our entire app. The 'picture' inside the frame is the space
 *  rendered out by the component's `children`.
 */
const Main = (props) => {
  const { children } = props;

  return (
    <div className="main">
      <h1 className="logo"><Link to="/">dm</Link></h1>
      <div className="social-icons">
        <a href="https://github.com/Cosmet">
          <i className="fa fa-github" aria-hidden="true"></i>
        </a>

        <a href="https://medium.com/@damian.michniak29">
          <i className="fa fa-medium" aria-hidden="true"></i>
        </a>

        <a href="https://www.linkedin.com/in/damian-michniak">
          <i className="fa fa-linkedin" aria-hidden="true"></i>
        </a>

        <a href="/#contact">
          <i className="fa fa-envelope-o" aria-hidden="true"></i>
        </a>
      </div>
      {children}
    </div>
  )
}

/**
 * CONTAINER
 */
const mapState = (state) => {
  return {
    isLoggedIn: !!state.user.id
  }
}

const mapDispatch = (dispatch) => {
  return {
    handleClick() {
      dispatch(logout())
    },
  }
}

// The `withRouter` wrapper makes sure that updates are not blocked
// when the url changes
export default withRouter(connect(mapState, mapDispatch)(Main))

