import React from "react";
import { render, cleanup, getByPlaceholderText, getByTestId, screen } from "@testing-library/react";


import Form from "components/Appointment/Form";

afterEach(cleanup);

describe("Running test for Form Component", () => {

  const interviewers = [
    {
      id: 1,
      student: "Sylvia Palmer",
      avatar: "https://i.imgur.com/LpaY82x.png"
    }
  ];


  it("renders without student name if not provided", () => {
    const { getByPlaceholderText } = render(<Form interviewers={interviewers} />);

    expect(getByPlaceholderText("Enter Student Name")).toHaveValue("");
  });

  // it("renders with initial student name", () => {
  //   expect(getByTestId("student-name-input")).toHaveValue("Lydia Miller-Jones");
  // });
})