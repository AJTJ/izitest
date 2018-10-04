import actions from "./actions";

const getMemorials = ({ url }) => async dispatch => {
  dispatch(actions.requestMemorials());
  try {
    const response = await fetch(url);
    console.log("response", response);
    const json = await response.json();
    console.log("json", json);
    dispatch(actions.successMemorials(json.data));
  } catch (error) {
    console.log("error", error);
  }
};

const orderMemorials = actions.orderMemorials;

export default {
  getMemorials,
  orderMemorials
};
