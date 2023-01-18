import React from "react";

import { render, cleanup } from "@testing-library/react";

import Form from "components/Appointment/Form";


afterEach(cleanup);

it("renders without crashing", () => {
  render(<Form />);
});




it("submits the name entered by the user", () => {
  const onSave = jest.fn();
  const { getByText, getByPlaceholderText } = render(
    <Form interviewers={interviewers} onSave={onSave} interviewer={1} />
  );

  const input = getByPlaceholderText("Enter Student Name");

  fireEvent.change(input, { target: { value: "Lydia Miller-Jones" } });
  fireEvent.click(getByText("Save"));

  expect(onSave).toHaveBeenCalledTimes(1);
  expect(onSave).toHaveBeenCalledWith("Lydia Miller-Jones", 1);
});