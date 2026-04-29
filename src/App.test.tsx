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
    expect(screen.getByText(/reliable software across backend systems/i)).toBeInTheDocument();

    const featured = screen.getByLabelText("Featured projects");
    expect(within(featured).getByRole("heading", { name: "Quorum" })).toBeInTheDocument();
    expect(
      within(featured).getByRole("link", { name: /open quorum repository/i }),
    ).toHaveAttribute("href", "https://github.com/jaydenpiao/quorum");
    expect(within(featured).queryByRole("heading", { name: "ATM" })).not.toBeInTheDocument();
  });

  it("places experience before featured project work", () => {
    render(<App />);

    const experienceHeading = screen.getByRole("heading", {
      name: /Practical engineering across AI, product, and teams/i,
    });
    const projectsHeading = screen.getByRole("heading", {
      name: /Featured engineering projects/i,
    });

    expect(experienceHeading.compareDocumentPosition(projectsHeading)).toBe(
      Node.DOCUMENT_POSITION_FOLLOWING,
    );
    expect(screen.getByRole("heading", { name: "Google" })).toBeInTheDocument();
    expect(screen.getByText(/DynamoDB's new LSM-tree storage engine/i)).toBeInTheDocument();
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
