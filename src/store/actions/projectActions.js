export const createProject = (project, ownProps) => {
  return (dispatch, getState) => {
    // asyn code to call to database
    const profile = getState().firebase.profile;
    const authId = getState().firebase.auth.uid;
    ownProps.firestore.collection("projects")
      .add({
        ...project,
        authFirstName: profile.firstName,
        authLastName: profile.lastName,
        authId,
        createAt: new Date()
      })
      .then(() => dispatch({ type: "CREATE_PROJECT", project }))
      .catch(err => {
        dispatch({ type: "CREATE_PROJECT_FAILED", err });
      });
  };
};

export const deleteProject = (id, ownProps) => {
  return (dispatch, getState) => {
    // asyn code to call to database
    // const authId = getState().firebase.auth.uid;
    ownProps.firestore.collection("projects").doc(id).delete()
      .then(() => dispatch({ type: "DELETE_PROJECT" }))
      .catch(err => {
        dispatch({ type: "DELETE_PROJECT_FAILED", err });
      });
  };
};