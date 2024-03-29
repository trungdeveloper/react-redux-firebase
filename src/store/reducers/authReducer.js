const initState = {
  authError: null
};

const authReducer = (state = initState, action) => {
  switch (action.type) {
    case "LOGIN_SUCCESS":
      console.log("sign in success");
      return {
        ...state,
        authError: null
      };

    case "LOGIN_ERROR":
      return {
        ...state,
        authError: "Login failed"
      };

    case "SIGNOUT_SUCCESS":
      console.log("sign out");
      return state;

    case "SIGNUP_SUCCESS":
      console.log("signup success");
      return {
        ...state,
        authError: null
      };

    case "SIGNUP_ERROR":
      console.log("signup error");
      return {
        ...state,
        authError: action.err.message
      };

    default:
      return state;
  }
};

export default authReducer;
