import React from "react";
import { default as Component } from "./View";
import renderer from "react-test-renderer";

it("renders correctly", () => {
  const comp = renderer
    .create(
      <Component
        name={{ last: "testLast", first: "testFirst" }}
        creationDate={873873873}
      />
    )
    .toJSON();
  expect(comp).toMatchSnapshot();
});
