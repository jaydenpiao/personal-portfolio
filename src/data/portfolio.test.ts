import { describe, expect, it } from "vitest";
import { portfolio } from "./portfolio";

describe("portfolio content", () => {
  it("positions Jayden around current engineering work instead of stale class-year copy", () => {
    expect(portfolio.hero.title).toMatch(/Jayden Piao/);
    expect(portfolio.hero.summary).toMatch(/AI systems/i);
    expect(portfolio.hero.summary).toMatch(/developer tools/i);
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
});
