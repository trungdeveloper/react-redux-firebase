export const createProject = project => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    // asyn code to call to database
    const db = getFirestore();
    db.collection("projects")
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
