import React from "react";
import ProjectList from "../projects/ProjectList";
import { compose } from "redux";
import { connect } from "react-redux";
import { firestoreConnect } from "react-redux-firebase";
import { Link, Redirect } from "react-router-dom";
const Profile = props => {
  const id = props.match.params.profile_id;
  if (!props.auth.isLoaded) return null;
  if (!props.auth.uid) return <Redirect to={"/signin"} />;
  if (props.projects) {
    let projects = props.projects.filter(project => project.authId === id);
    if (projects.length) {
      return (
        <div className="profile container">
          <ProjectList projects={projects} />
        </div>
      );
    } else {
      return (
        <div className="profile container center">
          <span>
            You don't have any project yet. Click <Link to="/create">Here</Link>{" "}
            to create new projects
          </span>
        </div>
      );
    }
  } else {
    return (
      <div className="container center">
        <p>Loading project...</p>
      </div>
    );
  }
};

const mapStateToProps = state => {
  return {
    projects: state.firestore.ordered.projects,
    auth: state.firebase.auth
  };
};

export default compose(
  connect(mapStateToProps),
  firestoreConnect([{ collection: "projects", orderBy: ["createAt", "desc"] }])
)(Profile);
