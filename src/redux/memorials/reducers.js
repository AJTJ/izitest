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
      const sortedByDate = action.memorials.sort((a, b) => {
        return a.creationDate - b.creationDate;
      });
      return { ...state, memorials: [...sortedByDate] };
    case constants.failureMemorials:
      console.log("failed", action.error);
      return { ...state };
    case constants.orderMemorials:
      const sortedByName = state.memorials.sort((a, b) => {
        if (a.name !== undefined && b.name === undefined) {
          return -1;
        }
        if (a.name === undefined) {
          return 1;
        }
        return String(a.name.last).localeCompare(String(b.name.last));
      });
      return { ...state, memorials: [...sortedByName] };
    default:
      return state;
  }
};

export default {
  memorialsReducer
};
