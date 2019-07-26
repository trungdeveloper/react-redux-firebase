const initState = {
  projects: []
};

const projectReducer = (state = initState, action) => {
  switch (action.type) {
    case "CREATE_PROJECT":
      console.log("Create project success");
      return state;
    case "CREATE_PROJECT_FAILED":
      console.log("Create project error ", action.err);
      return state;
    case "DELETE_PROJECT":
      console.log("Delete project success");
      return state;
    case "DELELTE_PROJECT_FAILED":
      console.log("Delete project error ", action.err);
      return state;
    default:
      return state;
  }
};

export default projectReducer;
