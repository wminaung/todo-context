import { render, screen } from "@testing-library/react";
import App from "../App";
test("renders learn react link", () => {
  render(<App />);
  const appElement = screen.getByTestId("app-container"); // Add a test ID to your App's root div
  expect(appElement).toBeInTheDocument();
});
