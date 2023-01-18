import React from "react";

import { render, cleanup } from "@testing-library/react";


import Application from "components/Application";

afterEach(cleanup);

describe("Running test for Application Component", () => {

  it("renders without crashing", () => {
    render(<Application />);
  });


})