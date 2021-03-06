import actions from "./actions";

const getMemorials = ({ url }) => async dispatch => {
  dispatch(actions.requestMemorials());
  try {
    const response = await fetch(url);
    const json = await response.json();
    dispatch(actions.successMemorials(json.data));
  } catch (error) {
    dispatch(actions.failureMemorials(error));
  }
};

const orderMemorials = actions.orderMemorials;

export default {
  getMemorials,
  orderMemorials
};
