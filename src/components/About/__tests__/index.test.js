import React from "react";
import { render, cleanup } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import About from "..";

// ensure's that after each test we won't have any leftover memory data that could give us false results
afterEach(cleanup);

// declare the component were testing
describe("About component", () => {
  // first test
  it("renders", () => {
    render(<About />);
  });

  // second test
  it("matches snapshot DOM node structure", () => {
    // use asFragment that returns a snapshot of the About component
    const { asFragment } = render(<About />);
    // test and compare whether the expected and actual outcomes match
    expect(asFragment()).toMatchSnapshot();
  });
});
