const initState = {
  projects: []
};

const projectReducer = (state = initState, action) => {
  switch (action.type) {
    case "CREATE_PROJECT":
      console.log("create project success");
      return state;
    case "CREATE_PROJECT_FAILED":
      console.log("Create project error ", action.err);
      return state;
    default:
      return state;
  }
};

export default projectReducer;
