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
        if (typeof a.name === "undefined") {
          return 1;
        }
        if (typeof b.name === "undefined") {
          return -1;
        }
        if (typeof a.name === "number") {
          return 1;
        }
        if (typeof b.name === "number") {
          return -1;
        }
        let nameA = a.name.last.toUpperCase();
        let nameB = b.name.last.toUpperCase();
        if (nameA < nameB) {
          return -1;
        }
        if (nameA > nameB) {
          return 1;
        }
        return 0;
      });
      return { ...state, memorials: [...sortedState] };
    default:
      return state;
  }
};

export default {
  memorialsReducer
};
