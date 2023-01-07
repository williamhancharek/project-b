import { render, screen } from "@testing-library/react";
import NumberInput from "./App";

test("renders learn react link", () => {
  render(<NumberInput />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
