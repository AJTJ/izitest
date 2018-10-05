import configureMockStore from "redux-mock-store";
import thunk from "redux-thunk";
import actions from "./operations";
import * as constants from "./constants";
import fetchMock from "fetch-mock";

const middleWare = [thunk];
const mockStore = configureMockStore(middleWare);

describe("async operation", () => {
  afterEach(() => {
    fetchMock.reset();
    fetchMock.restore();
  });

  it("creates SUCCESS_MEMORIALS when fetching memorials is done", () => {
    fetchMock.getOnce("./memorials", { memorials: [] });
    const expectedActions = [
      { type: constants.requestMemorials },
      { type: constants.successMemorials, memorials: [] }
    ];

    const store = mockStore({ memorials: [] });

    return store.dispatch(actions.getMemorials()).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });
});
