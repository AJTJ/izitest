import React from "react";
import { default as Component } from "./View";
import renderer from "react-test-renderer";

const memorials = [
  { name: { last: "jon", first: "bella" } },
  { name: { last: "jon", first: "bella" } }
];

it("renders correctly", () => {
  const comp = renderer.create(<Component memorials={memorials} />).toJSON();
  expect(comp).toMatchSnapshot();
});
