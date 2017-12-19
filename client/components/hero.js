import '../css/hero.scss'
import { RotateText, grabText } from '../functions'
import React, { Component } from 'react'
import { connect } from 'react-redux'

class Hero extends Component {

  componentDidMount() {
    grabText();
  }

  render() {
    const { textToRotate } = this.props;

    return (
      <div className="hero">
        <div>
          <div className="home-img polaroid">
            <a title="Damian Michniak">
              <img className="img-center" src="assets/selfie2.jpg" />
            </a>
          </div>

          <div className="title">
            <h1>Hi, I'm Damian.
            <br />I'm a full stack software engineer.
            <br />I design &amp; build
            <br />
              <span className="txt-rotate" data-period="2000" data-rotate={textToRotate} />
            </h1>
          </div>

        </div>
      </div>
    )
  }
}

const mapState = (state) => {
  return {
    textToRotate: [
      'corporate websites.',
      'user interfaces.',
      'landing pages.',
      'web applications.'
    ],
  }
}

const mapDispatch = (dispatch) => {
  return {
  }
}

export default connect(mapState, mapDispatch)(Hero)
