import * as constants from "./constants";

const defaultState = {
  memorials: []
};

const memorialsReducer = (state = defaultState, action) => {
  switch (action.type) {
    case constants.requestMemorials:
      console.log("requesting memorials!");
      return { ...state };
    case constants.successMemorials:
      console.log("success memorials");
      return { ...state, memorials: [...action.memorials] };
    case constants.orderMemorials:
      console.log("ordering memorials");
      return { ...state };
    default:
      return state;
  }
};

export default {
  memorialsReducer
};
