
import React from 'react'
import { compose } from 'redux'
import { firestoreConnect } from 'react-redux-firebase'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import moment  from 'moment'

const ProjectDetails = (props) => {
  const {project, auth} = props;
  if(!auth.isLoaded){
    return null
  }
  if(!auth.uid) return <Redirect to={'/signin'} />
  if(project){
    return (
      <div className="container section project-details">
        <div className="card z-depth-0">
          <div className="card-content">
            <span className="card-title">Project title - { project.title }</span>
            <p>{project.content}</p>
          </div>
          <div className="card-action grey lighten-4 grey-text">
            <div>Posted by {project.authFirstName} {project.authLastName}</div>
            <div>{ moment(project.createAt.toDate()).calendar() }</div>
          </div>
        </div>
      </div>
    )
  }else{
    return(
      <div className="container center">
        <p>Loading project...</p>
      </div>
    )
  }
  
}

const mapStateToProps = (state, ownProps) => {
  const id = ownProps.match.params.id;
  const projects = state.firestore.data.projects;
  const project = projects ? projects[id] : null 
  return {
    project : project,
    auth : state.firebase.auth
  }
}

export default compose(
  firestoreConnect(['projects']),
  connect(mapStateToProps)
)(ProjectDetails)