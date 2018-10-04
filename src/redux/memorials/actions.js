import * as constants from "./constants";

const requestMemorials = () => ({
  type: constants.requestMemorials
});

const successMemorials = memorials => ({
  type: constants.successMemorials,
  memorials
});

const orderMemorials = () => ({
  type: constants.orderMemorials
});

export default {
  requestMemorials,
  orderMemorials,
  successMemorials
};
