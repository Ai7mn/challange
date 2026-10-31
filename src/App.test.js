import { render, screen, within } from "@testing-library/react";
import App from "./App";

beforeEach(() => {
  window.history.pushState({}, "", "/");
});

test("renders the landing page and primary navigation", () => {
  render(<App />);

  const primaryNavigation = screen.getByRole("navigation", {
    name: /primary navigation/i,
  });

  expect(primaryNavigation).toBeInTheDocument();
  expect(
    screen.getByRole("heading", {
      name: /best app for your modern lifestyle/i,
    })
  ).toBeInTheDocument();
  expect(
    within(primaryNavigation).getByRole("link", { name: /key features/i })
  ).toHaveAttribute("href", "/features");
});

test("keeps legacy feature URLs working", async () => {
  window.history.pushState({}, "", "/Featurs");

  render(<App />);

  expect(
    await screen.findByRole("heading", { name: /product features/i })
  ).toBeInTheDocument();
});
