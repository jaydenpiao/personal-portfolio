import { readFileSync } from "node:fs";
import { join } from "node:path";
import { describe, expect, it } from "vitest";

const readProjectFile = (path: string) =>
  readFileSync(join(process.cwd(), path), "utf8");

const extractJsonLdGraph = () => {
  const html = readProjectFile("index.html");
  const match = html.match(
    /<script type="application\/ld\+json">\s*([\s\S]*?)\s*<\/script>/,
  );

  expect(match?.[1]).toBeTruthy();

  const parsed = JSON.parse(match?.[1] ?? "{}") as {
    "@graph"?: Array<Record<string, unknown>>;
  };

  return parsed["@graph"] ?? [];
};

describe("SEO assets", () => {
  it("targets Jayden Piao search results with explicit canonical metadata", () => {
    const html = readProjectFile("index.html");

    expect(html).toContain("<title>Jayden Piao | Software Engineer</title>");
    expect(html).toContain('name="author" content="Jayden Piao"');
    expect(html).toContain('name="robots" content="index, follow, max-image-preview:large"');
    expect(html).toContain(
      'content="Jayden Piao is a UBC Computer Science student and software engineer',
    );
    expect(html).toContain('property="og:title" content="Jayden Piao | Software Engineer"');
    expect(html).toContain('property="og:url" content="https://jaydenpiao.netlify.app/"');
    expect(html).toContain(
      'property="og:image" content="https://jaydenpiao.netlify.app/jp.png"',
    );
    expect(html).toContain('name="twitter:card" content="summary"');
    expect(html).toContain('rel="canonical" href="https://jaydenpiao.netlify.app/"');
    expect(html).toContain('rel="sitemap" type="application/xml" href="/sitemap.xml"');
    expect(html).not.toMatch(/jaydenpiao\.tech/i);
  });

  it("publishes structured data for the profile page and public identities", () => {
    const graph = extractJsonLdGraph();
    const person = graph.find((entry) => entry["@type"] === "Person");
    const website = graph.find((entry) => entry["@type"] === "WebSite");
    const profilePage = graph.find((entry) => entry["@type"] === "ProfilePage");

    expect(person).toMatchObject({
      "@id": "https://jaydenpiao.netlify.app/#jayden-piao",
      name: "Jayden Piao",
      url: "https://jaydenpiao.netlify.app/",
      email: "mailto:jaydenpiao@gmail.com",
      jobTitle: "Software Engineer",
    });
    expect(person?.sameAs).toEqual([
      "https://github.com/jaydenpiao",
      "https://www.linkedin.com/in/jaydenpiao/",
    ]);
    expect(person?.knowsAbout).toEqual(
      expect.arrayContaining(["AWS DynamoDB", "Distributed systems", "Rust"]),
    );
    expect(website).toMatchObject({
      "@id": "https://jaydenpiao.netlify.app/#website",
      name: "Jayden Piao",
      url: "https://jaydenpiao.netlify.app/",
    });
    expect(profilePage).toMatchObject({
      "@id": "https://jaydenpiao.netlify.app/#profile",
      name: "Jayden Piao | Software Engineer",
    });
  });

  it("exposes crawler discovery files for the production host", () => {
    const robots = readProjectFile("public/robots.txt");
    const sitemap = readProjectFile("public/sitemap.xml");
    const manifest = JSON.parse(readProjectFile("public/manifest.json")) as {
      name: string;
      start_url: string;
      scope: string;
      description: string;
    };

    expect(robots).toContain("User-agent: *");
    expect(robots).toContain("Allow: /");
    expect(robots).toContain("Sitemap: https://jaydenpiao.netlify.app/sitemap.xml");
    expect(sitemap).toContain("<loc>https://jaydenpiao.netlify.app/</loc>");
    expect(sitemap).toContain("<loc>https://jaydenpiao.netlify.app/projects</loc>");
    expect(sitemap).toContain(
      "<loc>https://jaydenpiao.netlify.app/jaydenpiao_resume.pdf</loc>",
    );
    expect(manifest.name).toBe("Jayden Piao | Software Engineer");
    expect(manifest.start_url).toBe("/");
    expect(manifest.scope).toBe("/");
    expect(manifest.description).toMatch(/Jayden Piao/);
  });
});
