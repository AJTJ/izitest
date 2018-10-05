import * as constants from "./constants";

const defaultState = {
  memorials: []
};

const memorialsReducer = (state = defaultState, action) => {
  switch (action.type) {
    case constants.requestMemorials:
      console.log("requesting...");
      return { ...state };
    case constants.successMemorials:
      console.log("received!");
      return { ...state, memorials: [...action.memorials] };
    case constants.failureMemorials:
      console.log("failed");
      return { ...state };
    case constants.orderMemorials:
      const sortedState = state.memorials.sort((a, b) => {
        if (a.name !== undefined && b.name === undefined) {
          return -1;
        }
        if (a.name === undefined) {
          return 1;
        }
        return String(a.name.last).localeCompare(String(b.name.last));
      });
      return { ...state, memorials: [...sortedState] };
    default:
      return state;
  }
};

export default {
  memorialsReducer
};
