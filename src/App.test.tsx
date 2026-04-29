import { render, screen, within } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import App from "./App";

describe("portfolio app", () => {
  it("renders the updated portfolio narrative and featured project links", () => {
    render(<App />);

    expect(
      screen.getByRole("heading", {
        name: /Jayden Piao/i,
        level: 1,
      }),
    ).toBeInTheDocument();
    expect(screen.getByText(/AI systems, developer tools/i)).toBeInTheDocument();

    const featured = screen.getByLabelText("Featured projects");
    expect(within(featured).getByRole("heading", { name: "Quorum" })).toBeInTheDocument();
    expect(
      within(featured).getByRole("link", { name: /open quorum repository/i }),
    ).toHaveAttribute("href", "https://github.com/jaydenpiao/quorum");
    expect(within(featured).queryByRole("heading", { name: "ATM" })).not.toBeInTheDocument();
  });

  it("provides an agent-friendly project status surface", () => {
    render(<App />);

    expect(screen.getByText(/Current focus/i)).toBeInTheDocument();
    expect(screen.getByText(/Build, test, lint, ship/i)).toBeInTheDocument();
    expect(screen.getAllByRole("link", { name: /GitHub profile/i })[0]).toHaveAttribute(
      "href",
      "https://github.com/jaydenpiao",
    );
  });
});
