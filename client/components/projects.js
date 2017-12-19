import '../css/projects.scss'
import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

const Projects = (props) => {
  const { projects } = props;
  let projectNum = 1;

  return (
    <div className="projects-wrapper">
      <h2>Projects</h2>
      <div className="projects">
        {
          projects.sort((a,b) => a.name < b.name).map(project => {
            const isMainProject = project.name === 'Domination';
            const section = isMainProject ? 'main' : `sub${projectNum}`;
            !isMainProject && projectNum++;
            const mainDescription = isMainProject ? 'project-main-desc' : '';
            const mainIcons = isMainProject ? 'project-main-icons' : '';
            const urlSlug = project.name.toLowerCase().split(' ').join('-')

            const background = {
              background: `url(${project.cover})`,
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "50% 50%",
            }

            return (
              <div className="project-container-wrapper" style={{ gridArea: section }}>
                <div className="project-container" style={background}>
                  <div className="project-cover">
                    <div className="project-overlay">
                      <div className="project-description">
                        <p className={mainDescription}>{project.description}</p>
                        <Link to={`/project/${urlSlug}`} className={mainDescription}>More Details</Link>
                      </div>
                      <div className={`project-dev-icons ${mainIcons}`}>
                        {
                          project.stack.sort((a,b) => a.name > b.name).map(tech => <img class="dev-icon" src={`assets/icons/${tech.name}.svg`} />)
                        }
                      </div>
                    </div>
                  </div>

                  <div className="project-title">
                    <a>{project.name}</a>
                  </div>
                </div>
              </div>
            )
          })
        }
      </div>
    </div>
  )
}

const mapState = (state) => {
  return {
    projects: state.projects,
  }
}

const mapDispatch = (dispatch) => {
  return {
  }
}

export default connect(mapState, mapDispatch)(Projects)
