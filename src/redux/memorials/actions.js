import * as constants from "./constants";

const requestMemorials = () => ({
  type: constants.requestMemorials
});

const successMemorials = memorials => ({
  type: constants.successMemorials,
  memorials
});

const orderMemorials = memorials => ({
  type: constants.orderMemorials,
  memorials
});

export default {
  requestMemorials,
  orderMemorials,
  successMemorials
};
