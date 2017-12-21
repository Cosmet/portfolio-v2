import '../css/single-project.scss'
import React from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'

const SingleProject = (props) => {
  const {
    name,
    description,
    cover,
    demo,
    live,
    video,
    contributions,
    features,
    teamMembers,
    stack,
  } = props;

  return (
    <div className="single-project-wrapper">
      <h1>{name}</h1>

      <div className="single-project-description">
        <p>{description}</p>
      </div>

      {
        video && (
          <div className="single-project-video">
          <iframe width="560" height="315" src={video} frameborder="0" gesture="media" allow="encrypted-media" allowfullscreen></iframe>
          </div>
        )
      }

      {
        features && features
          .sort((a, b) => a.order - b.order)
          .map((feature, i) => {
            const leftOrRight = i % 2 === 1 ? 'left-side' : 'right-side';

            return (
              <div className={`single-project-feature ${leftOrRight}`}>
                <img src={`../${feature.image}`} />
                <div className="feature-text">
                  <h3>{feature.title}</h3>
                  <p>{feature.description}</p>
                </div>
              </div>
            )
          })
      }

      <div className="single-project-stack-wrapper">
        <h2>Technologies Used</h2>
        <div className="single-project-stack">
          {
            stack && stack
              .sort((a, b) => a.name > b.name)
              .map(tech => <p className="dev-icon-wrapper" bubbletooltip={tech.name} ><img className="dev-icon" src={`../assets/icons/${tech.icon}`} /></p>)
          }
        </div>
      </div>

      <div className="single-project-responsibilities">
        <h2>My Contribution</h2>
        <h3>{teamMembers && teamMembers.length > 1 ? 'Full Stack Developer' : 'Solo Developer'}</h3>
        <ul>
          {
            contributions && contributions.map(res => <li>{res.description}</li>)
          }
        </ul>
      </div>

      <div className="single-project-team">
        <h2>Team</h2>
        {
          teamMembers && teamMembers.map(member => {
            return (
              <div className="single-project-member">
                <p>{member.name}</p>
              </div>
            )
          })
        }
      </div>

    </div>
  )
}

const mapState = (state, ownProps) => {
  const projects = state.projects;
  const urlSlugDecoded = ownProps.match.params.name
    .split('-')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
  const [selectedProject] = projects.filter(project => project.name === urlSlugDecoded);

  return {
    name: selectedProject && selectedProject.name,
    description: selectedProject && selectedProject.description,
    cover: selectedProject && selectedProject.cover,
    demo: selectedProject && selectedProject.demo,
    live: selectedProject && selectedProject.live,
    video: selectedProject && selectedProject.video,
    contributions: selectedProject && selectedProject.contributions,
    features: selectedProject && selectedProject.features,
    teamMembers: selectedProject && selectedProject.teamMembers,
    stack: selectedProject && selectedProject.stack,
  }
}

const mapDispatch = (dispatch) => {
  return {
  }
}

export default withRouter(connect(mapState, mapDispatch)(SingleProject))
