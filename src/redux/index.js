import { combineReducers } from "redux";
import * as memorials from "./memorials/index";

const allReducers = {
  ...memorials.reducer
};

const actions = {
  ...memorials.actions
};

const reducer = combineReducers(allReducers);

export { reducer, actions };
