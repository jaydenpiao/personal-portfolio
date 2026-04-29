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
      name: /Internships and engineering teams/i,
    });
    const projectsHeading = screen.getByRole("heading", {
      name: /Featured engineering projects/i,
    });

    expect(experienceHeading.compareDocumentPosition(projectsHeading)).toBe(
      Node.DOCUMENT_POSITION_FOLLOWING,
    );
    expect(screen.getByRole("heading", { name: "Google" })).toBeInTheDocument();
    expect(screen.getByAltText("Google logo")).toBeInTheDocument();
    expect(screen.getByAltText("Amazon Web Services logo")).toBeInTheDocument();
    expect(screen.getByText(/DynamoDB's new LSM-tree storage engine/i)).toBeInTheDocument();
  });

  it("provides an agent-friendly project status surface", () => {
    render(<App />);

    expect(screen.getByText(/Recent work/i)).toBeInTheDocument();
    expect(screen.getByText(/Main stack/i)).toBeInTheDocument();
    expect(screen.getByText(/DynamoDB storage at AWS/i)).toBeInTheDocument();
    expect(screen.getByText(/voice-agent tooling at Marr Labs/i)).toBeInTheDocument();
    expect(screen.getAllByRole("link", { name: /GitHub profile/i })[0]).toHaveAttribute(
      "href",
      "https://github.com/jaydenpiao",
    );
  });

  it("renders a practical tools section", () => {
    render(<App />);

    expect(screen.getByRole("heading", { name: /Tools I use most/i })).toBeInTheDocument();
    expect(screen.getByRole("heading", { name: "Product UI" })).toBeInTheDocument();
    expect(screen.getByText(/TypeScript, React, Python, Go, Rust, AWS/i)).toBeInTheDocument();
    expect(screen.getByText("Playwright")).toBeInTheDocument();
  });

  it("keeps the contact section direct and human", () => {
    render(<App />);

    expect(screen.getByRole("heading", { name: "Email is best." })).toBeInTheDocument();
    expect(screen.getByText(/I check email more reliably than DMs/i)).toBeInTheDocument();
    expect(screen.queryByText(/future agents/i)).not.toBeInTheDocument();
  });
});
