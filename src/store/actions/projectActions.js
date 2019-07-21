export const createProject = (project, ownProps) => {
  return (dispatch, getState) => {
    // asyn code to call to database
    ownProps.firestore.collection("projects")
      .add({
        ...project,
        authFirstName: "Trung",
        authLastName: "Nguyen",
        authId: 12345,
        createAt: new Date()
      })
      .then(() => dispatch({ type: "CREATE_PROJECT", project }))
      .catch(err => {
        dispatch({ type: "CREATE_PROJECT_FAILED", err });
      });
  };
};
