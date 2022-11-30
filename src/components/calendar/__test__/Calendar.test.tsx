import { render, screen } from "@testing-library/react";
import Calendar from "../Calendar1";

//1: passed
test("render date as name", () => {
  render(<Calendar />);
  const classElement = screen.getByText(/November/i);
  expect(classElement).toBeInTheDocument;
});

//2: ? render square if # days is greater than 0
test("", () => {});
