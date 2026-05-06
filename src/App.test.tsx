import { fireEvent, render, screen, within } from "@testing-library/react";
import { afterEach, describe, expect, it, vi } from "vitest";
import App from "./App";

const originalScrollIntoView = window.HTMLElement.prototype.scrollIntoView;

describe("portfolio app", () => {
  afterEach(() => {
    window.history.pushState({}, "", "/");
    vi.restoreAllMocks();

    if (originalScrollIntoView) {
      window.HTMLElement.prototype.scrollIntoView = originalScrollIntoView;
    } else {
      Reflect.deleteProperty(window.HTMLElement.prototype, "scrollIntoView");
    }
  });

  it("renders the updated portfolio narrative and featured project links", () => {
    render(<App />);

    expect(
      screen.getByRole("heading", {
        name: /Jayden Piao/i,
        level: 1,
      }),
    ).toBeInTheDocument();
    expect(screen.getByText(/fourth-year Computer Science student at UBC/i)).toBeInTheDocument();
    expect(screen.getByText(/DynamoDB storage infrastructure/i)).toBeInTheDocument();

    const featured = screen.getByLabelText("Featured projects");
    expect(within(featured).getByRole("heading", { name: "Quorum" })).toBeInTheDocument();
    const quorumCodeLink = within(featured).getByRole("link", {
      name: /open quorum source code/i,
    });

    expect(quorumCodeLink).toHaveAttribute("href", "https://github.com/jaydenpiao/quorum");
    expect(quorumCodeLink).not.toHaveAttribute("target");
    expect(quorumCodeLink).toHaveTextContent("Code");
    expect(within(featured).getByRole("link", { name: /open 3D-Viz-Tool demo/i })).toHaveTextContent(
      "Demo",
    );
    expect(within(featured).queryByRole("heading", { name: "ATM" })).not.toBeInTheDocument();
  });

  it("uses an accessible mobile navigation drawer instead of a wrapped link row", () => {
    render(<App />);

    const menuButton = screen.getByRole("button", { name: "Open navigation menu" });

    expect(menuButton).toHaveAttribute("aria-expanded", "false");
    expect(screen.queryByRole("navigation", { name: "Mobile navigation" })).not.toBeInTheDocument();

    fireEvent.click(menuButton);

    expect(menuButton).toHaveAttribute("aria-expanded", "true");
    expect(screen.getByRole("button", { name: "Close navigation menu" })).toBeInTheDocument();

    const mobileNavigation = screen.getByRole("navigation", { name: "Mobile navigation" });
    expect(within(mobileNavigation).getByRole("link", { name: "Education" })).toHaveAttribute(
      "href",
      "/#education",
    );
    expect(within(mobileNavigation).getByRole("link", { name: "Projects" })).toHaveAttribute(
      "href",
      "/projects",
    );

    fireEvent.keyDown(window, { key: "Escape" });

    expect(menuButton).toHaveAttribute("aria-expanded", "false");
    expect(menuButton).toHaveFocus();
  });

  it("renders education as its own section instead of a portrait caption", () => {
    render(<App />);

    const educationHeading = screen.getByRole("heading", { name: "UBC Computer Science" });
    const experienceHeading = screen.getByRole("heading", {
      name: /Internships and engineering teams/i,
    });

    expect(educationHeading.compareDocumentPosition(experienceHeading)).toBe(
      Node.DOCUMENT_POSITION_FOLLOWING,
    );
    expect(screen.getByAltText("University of British Columbia logo")).toBeInTheDocument();
    expect(
      screen.getByRole("heading", { name: "University of British Columbia" }),
    ).toBeInTheDocument();
    expect(screen.getByText("Computer Science")).toBeInTheDocument();
    expect(screen.getByText("Class of 2026")).toBeInTheDocument();
    expect(screen.queryByText("UBC Computer Science - Class of 2026")).not.toBeInTheDocument();
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
    expect(screen.getByAltText("UBC Poker Club logo")).toBeInTheDocument();
    expect(screen.queryByText(/Pulled from my current resume/i)).not.toBeInTheDocument();
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

    expect(screen.getByRole("heading", { name: /Stack I work in/i })).toBeInTheDocument();
    expect(screen.getByRole("heading", { name: "Backend + infrastructure" })).toBeInTheDocument();
    expect(screen.getByRole("heading", { name: "Systems + storage" })).toBeInTheDocument();
    expect(screen.getByText(/Python, Rust, Go, TypeScript, SQL, AWS/i)).toBeInTheDocument();
    expect(screen.getByText(/storage paths, agent tooling, dashboards/i)).toBeInTheDocument();
    expect(screen.getAllByText("Multi-Paxos").length).toBeGreaterThanOrEqual(1);
    expect(screen.getByText("TensorFlow")).toBeInTheDocument();
    expect(screen.getByText("Playwright")).toBeInTheDocument();
    expect(screen.queryByText(/Mostly TypeScript and React/i)).not.toBeInTheDocument();
  });

  it("renders a separate page for the rest of the projects", () => {
    window.history.pushState({}, "", "/projects");
    render(<App />);

    expect(screen.getByRole("heading", { name: "More projects" })).toBeInTheDocument();
    expect(screen.getByRole("heading", { name: "AI Closet Planner" })).toBeInTheDocument();
    expect(screen.getByRole("heading", { name: "Parameter Golf" })).toBeInTheDocument();
    expect(screen.getByRole("heading", { name: "Macro Placement Challenge" })).toBeInTheDocument();
    expect(screen.getByRole("heading", { name: "PhoneticAI" })).toBeInTheDocument();
    expect(screen.getByRole("heading", { name: "UBC Poker Club" })).toBeInTheDocument();
    expect(screen.getByRole("heading", { name: "Vita" })).toBeInTheDocument();
    expect(screen.getByRole("heading", { name: "King's Craft" })).toBeInTheDocument();
    expect(screen.getByRole("link", { name: /open Vita devpost/i })).toHaveAttribute(
      "href",
      "https://devpost.com/software/vita-paxt8v",
    );
    expect(screen.getByRole("link", { name: /open King's Craft devpost/i })).toHaveAttribute(
      "href",
      "https://devpost.com/software/kings-craft",
    );
    expect(screen.getByRole("link", { name: /open PhoneticAI devpost/i })).toHaveAttribute(
      "href",
      "https://devpost.com/software/phoneticai",
    );
    expect(screen.getByRole("heading", { name: "Customer Service Chatbot" })).toBeInTheDocument();
    expect(screen.getByRole("heading", { name: "Album Nutrition" })).toBeInTheDocument();
    expect(screen.getByRole("heading", { name: "ATM Machine" })).toBeInTheDocument();
    expect(screen.getByRole("link", { name: /Back to selected work/i })).toHaveAttribute(
      "href",
      "/#work",
    );
  });

  it("scrolls to selected work when opening the home page with the work hash", () => {
    const scrollIntoView = vi.fn();
    window.HTMLElement.prototype.scrollIntoView = scrollIntoView;
    window.history.pushState({}, "", "/#work");

    render(<App />);

    expect(screen.getByRole("heading", { name: /Featured engineering projects/i })).toBeInTheDocument();
    expect(scrollIntoView).toHaveBeenCalledWith({ block: "start" });
  });

  it("keeps the contact section direct and human", () => {
    render(<App />);

    expect(screen.getByRole("heading", { name: "Email is best." })).toBeInTheDocument();
    expect(screen.getByText(/I check email more reliably than DMs/i)).toBeInTheDocument();
    expect(screen.queryByText(/future agents/i)).not.toBeInTheDocument();
    expect(screen.queryByText(/Agent-ready repo/i)).not.toBeInTheDocument();
    expect(screen.queryByRole("link", { name: /Back to top/i })).not.toBeInTheDocument();
    expect(screen.getByRole("link", { name: "Email Jayden" })).toHaveAttribute(
      "href",
      "mailto:jaydenpiao@gmail.com",
    );
    expect(screen.getAllByRole("link", { name: "GitHub profile" })[0]).toHaveAttribute(
      "href",
      "https://github.com/jaydenpiao",
    );
    expect(screen.getAllByRole("link", { name: "LinkedIn profile" })[0]).toHaveAttribute(
      "href",
      "https://www.linkedin.com/in/jaydenpiao/",
    );
    expect(screen.getAllByRole("link", { name: "Open Jayden Piao resume" })[0]).toHaveAttribute(
      "href",
      "/jaydenpiao_resume.pdf",
    );
    expect(screen.getAllByRole("link").every((link) => link.getAttribute("target") === null)).toBe(
      true,
    );
  });
});
