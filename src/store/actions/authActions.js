export const signIn = (credentials, props) => {
  return (dispatch, getState) => {
    props.firebase
      .auth()
      .signInWithEmailAndPassword(credentials.email, credentials.password)
      .then(() => {
        dispatch({ type: "LOGIN_SUCCESS" });
      })
      .catch(err => {
        dispatch({ type: "LOGIN_ERROR" }, err);
      });
  };
};

export const signOut = props => {
  return (dispatch, getState) => {
    props.firebase
      .auth()
      .signOut()
      .then(() => {
        dispatch({ type: "SIGNOUT_SUCCESS" });
      });
  };
};

export const signUp = (newUser, props) => {
  return (dispatch, getState) => {
    props.firebase.auth()
      .createUserWithEmailAndPassword(newUser.email, newUser.password)
      .then(res => {
        props.firestore
          .collection("users")
          .doc(res.user.uid)
          .set({
            firstName: newUser.firstName,
            lastName: newUser.lastName,
            initials: newUser.firstName[0] + newUser.lastName[0]
          });
      })
      .then(() => {
        dispatch({ type: "SIGNUP_SUCCESS" });
      })
      .catch(err => {
        dispatch({ type: "SIGNUP_ERROR", err });
      });
  };
};
