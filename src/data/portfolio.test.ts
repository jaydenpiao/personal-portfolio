import { describe, expect, it } from "vitest";
import { portfolio } from "./portfolio";

describe("portfolio content", () => {
  it("positions Jayden around current engineering work instead of stale class-year copy", () => {
    expect(portfolio.hero.title).toMatch(/Jayden Piao/);
    expect(portfolio.hero.summary).toMatch(/fourth-year Computer Science student at UBC/i);
    expect(portfolio.hero.summary).toMatch(/distributed systems/i);
    expect(portfolio.hero.summary).toMatch(/DynamoDB storage infrastructure/i);
    expect(portfolio.hero.summary).toMatch(/LLM and voice-agent tooling/i);
    expect(portfolio.hero.location).toBe("UBC Computer Science - Class of 2026");
    expect(portfolio.hero.availability).toMatch(/Backend, infrastructure, and product/i);
    expect(portfolio.hero.summary).not.toMatch(/third year|junior at UBC/i);
  });

  it("features the strongest recent public engineering projects first", () => {
    expect(portfolio.projects.map((project) => project.id).slice(0, 5)).toEqual([
      "quorum",
      "quorum-coordination-service",
      "3d-viz-tool",
      "hey-spotify",
      "ai-closet-planner",
    ]);
  });

  it("keeps project descriptions specific and technical", () => {
    const quorum = portfolio.projects.find((project) => project.id === "quorum");

    expect(quorum?.summary).toMatch(/policy-gated/i);
    expect(quorum?.summary).toMatch(/event log/i);
    expect(quorum?.links.some((link) => link.href.includes("github.com/jaydenpiao/quorum"))).toBe(
      true,
    );
  });

  it("keeps experience aligned with the latest resume", () => {
    expect(portfolio.links.resume).toBe("/jaydenpiao_resume.pdf");
    expect(portfolio.experience.map((item) => item.company).slice(0, 3)).toEqual([
      "Google",
      "Amazon Web Services (AWS)",
      "UBC MINT",
    ]);
    expect(portfolio.experience[0]?.role).toMatch(/Incoming Software Engineer Intern/i);
    expect(portfolio.experience[1]?.bullets.join(" ")).toMatch(/DynamoDB/i);
  });

  it("provides a local logo asset for every experience entry", () => {
    const expectedLogoSources = [
      "/logos/google.png",
      "/logos/aws.png",
      "/logos/ubc-mint.jpg",
      "/logos/marr-labs.jpg",
      "/logos/the-verse.jpg",
      "/logos/ubc-thunderbots.jpg",
    ];

    for (const item of portfolio.experience) {
      expect(item.logo.src).toMatch(/^\/logos\/.+\.(png|jpg)$/);
      expect(item.logo.alt).toMatch(new RegExp(item.company.split(" ")[0], "i"));
    }

    expect(portfolio.experience.map((item) => item.logo.src)).toEqual(expectedLogoSources);
  });

  it("keeps status cards grounded in concrete work", () => {
    expect(portfolio.status.map((item) => item.label)).toEqual([
      "Recent work",
      "Main stack",
      "Interests",
    ]);
    expect(portfolio.status.map((item) => item.value).join(" ")).toMatch(/DynamoDB storage/i);
    expect(portfolio.status.map((item) => item.value).join(" ")).toMatch(/voice-agent tooling/i);
    expect(portfolio.status.map((item) => item.value).join(" ")).not.toMatch(
      /production-grade demos|strongest signal/i,
    );
  });

  it("keeps tools grouped around real workflows", () => {
    expect(portfolio.skillGroups.map((group) => group.name)).toEqual([
      "Product UI",
      "Backend systems",
      "Cloud and data",
      "Voice and LLMs",
      "Shipping loop",
    ]);

    for (const group of portfolio.skillGroups) {
      expect(group.primary).toBeTruthy();
      expect(group.summary.length).toBeGreaterThan(30);
      expect(group.skills.length).toBeGreaterThanOrEqual(6);
    }
  });
});
