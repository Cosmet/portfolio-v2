import '../css/designs.scss'
import React from 'react'
import { connect } from 'react-redux'

const Designs = (props) => {

  return (
    <div className="designs">
    <h2>Designs</h2>
      <h2>Under Construction</h2>
    </div>
  )
}

const mapState = (state) => {
  return {
  }
}

const mapDispatch = (dispatch) => {
  return {
  }
}

export default connect(mapState, mapDispatch)(Designs)
