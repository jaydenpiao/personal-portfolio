import {
  ArrowUpRight,
  CheckCircle2,
  FileText,
  Mail,
} from "lucide-react";
import type { ReactNode } from "react";
import portraitUrl from "./assets/jayden-palms-portrait.jpg";
import { portfolio, type ExternalLink, type Project } from "./data/portfolio";

const navigation = [
  { label: "Experience", href: "/#experience" },
  { label: "Work", href: "/#work" },
  { label: "Projects", href: "/projects" },
  { label: "Skills", href: "/#skills" },
  { label: "Contact", href: "/#contact" },
];

const linkLogos = {
  github: {
    src: "/logos/github.png",
    alt: "GitHub logo",
  },
  linkedin: {
    src: "/logos/linkedin.png",
    alt: "LinkedIn logo",
  },
};

function App() {
  const isProjectsPage = window.location.pathname === "/projects";

  return (
    <div className="site-shell">
      <Header />
      {isProjectsPage ? <ProjectsPage /> : <HomePage />}
    </div>
  );
}

function HomePage() {
  return (
    <main>
      <Hero />
      <ExperienceSection />
      <FeaturedProjects />
      <SkillsSection />
      <ContactSection />
    </main>
  );
}

function Header() {
  return (
    <header className="site-header">
      <a className="brand" href="/" aria-label="Jayden Piao home">
        JP
      </a>
      <nav className="nav-links" aria-label="Primary navigation">
        {navigation.map((item) => (
          <a key={item.href} href={item.href}>
            {item.label}
          </a>
        ))}
      </nav>
    </header>
  );
}

function Hero() {
  return (
    <section id="top" className="hero section-frame">
      <div className="hero-copy">
        <p className="eyebrow">{portfolio.hero.eyebrow}</p>
        <h1>{portfolio.hero.title}</h1>
        <p className="hero-summary">{portfolio.hero.summary}</p>
        <div className="hero-actions" aria-label="Primary links">
          <IconLink
            href={portfolio.links.github}
            label="GitHub"
            ariaLabel="GitHub profile"
            logo={linkLogos.github}
          />
          <IconLink
            href={portfolio.links.linkedin}
            label="LinkedIn"
            ariaLabel="LinkedIn profile"
            logo={linkLogos.linkedin}
          />
          <IconLink href={portfolio.links.resume} label="Resume" icon={<FileText />} />
        </div>
      </div>

      <aside className="hero-portrait" aria-label="Jayden profile summary">
        <img src={portraitUrl} alt="Jayden Piao" />
        <div className="portrait-caption">
          <span>{portfolio.hero.location}</span>
          <strong>{portfolio.hero.availability}</strong>
        </div>
      </aside>

      <div className="status-strip" aria-label="Project status">
        {portfolio.status.map((item) => (
          <article key={item.label}>
            <span>{item.label}</span>
            <p>{item.value}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

function FeaturedProjects() {
  const featuredProjects = portfolio.projects.slice(0, 4);

  return (
    <section id="work" className="section-frame section-block">
      <SectionHeading eyebrow="Selected work" title="Featured engineering projects" />

      <div className="project-grid" aria-label="Featured projects">
        {featuredProjects.map((project, index) => (
          <ProjectCard key={project.id} project={project} prominent={index === 0} />
        ))}
      </div>

      <a className="more-projects-link" href="/projects">
        <span>More projects</span>
        <ArrowUpRight aria-hidden="true" />
      </a>
    </section>
  );
}

function ProjectsPage() {
  const moreProjects = portfolio.projects.slice(4);

  return (
    <main>
      <section className="section-frame section-block projects-page">
        <SectionHeading eyebrow="Projects" title="More projects" />
        <div className="project-grid" aria-label="More projects">
          {moreProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
        <a className="more-projects-link" href="/#work">
          <span>Back to selected work</span>
          <ArrowUpRight aria-hidden="true" />
        </a>
      </section>
    </main>
  );
}

function ProjectCard({ project, prominent = false }: { project: Project; prominent?: boolean }) {
  return (
    <article className={prominent ? "project-card project-card-prominent" : "project-card"}>
      <div className="project-visual" aria-hidden="true">
        <span>{project.visual.label}</span>
        {project.visual.lines.map((line) => (
          <p key={line}>{line}</p>
        ))}
      </div>

      <div className="project-content">
        <p className="eyebrow">{project.eyebrow}</p>
        <h3>{project.name}</h3>
        <p>{project.summary}</p>

        <ul className="impact-list">
          {project.impact.map((item) => (
            <li key={item}>
              <CheckCircle2 aria-hidden="true" />
              <span>{item}</span>
            </li>
          ))}
        </ul>

        <div className="stack-list" aria-label={`${project.name} stack`}>
          {project.stack.map((item) => (
            <span key={item}>{item}</span>
          ))}
        </div>

        <div className="link-row">
          {project.links.map((link) => (
            <IconLink
              key={link.href}
              href={link.href}
              label={`${link.label === "Repository" ? "Open" : "Open"} ${project.name} ${
                link.label === "Repository" ? "repository" : link.label.toLowerCase()
              }`}
              icon={<ArrowUpRight />}
            />
          ))}
        </div>
      </div>
    </article>
  );
}

function ExperienceSection() {
  return (
    <section id="experience" className="section-frame section-block">
      <SectionHeading
        eyebrow="Experience"
        title="Internships and engineering teams"
      />
      <div className="timeline">
        {portfolio.experience.map((item) => (
          <article key={`${item.company}-${item.role}`} className="timeline-item">
            <div className="timeline-logo">
              <img src={item.logo.src} alt={item.logo.alt} loading="lazy" />
            </div>
            <div className="timeline-body">
              <div className="timeline-heading">
                <h3>{item.company}</h3>
                <span>{item.dates}</span>
              </div>
              <p className="timeline-role">
                {item.role}
                {item.location ? ` | ${item.location}` : ""}
              </p>
              <p>{item.summary}</p>
              <ul>
                {item.bullets.map((bullet) => (
                  <li key={bullet}>{bullet}</li>
                ))}
              </ul>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

function SkillsSection() {
  const coreTools = ["TypeScript", "React", "Python", "Go", "Rust", "AWS"];

  return (
    <section id="skills" className="section-frame section-block tools-section">
      <SectionHeading
        eyebrow="Tools"
        title="Tools I use most"
      />
      <div className="tools-layout">
        <aside className="tools-callout" aria-label="Core tools">
          <span>Day to day</span>
          <h3>{coreTools.join(", ")}</h3>
          <p>Enough range to move between UI, backend, infra, and systems work without turning the page into a keyword dump.</p>
        </aside>

        <div className="skill-grid">
          {portfolio.skillGroups.map((group) => (
            <article key={group.name} className="skill-group">
              <div className="skill-group-heading">
                <span>{group.primary}</span>
                <h3>{group.name}</h3>
              </div>
              <p>{group.summary}</p>
              <div className="tool-list">
                {group.skills.map((skill) => (
                  <span key={skill}>{skill}</span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function ContactSection() {
  return (
    <section id="contact" className="section-frame contact-section">
      <div className="contact-copy">
        <p className="eyebrow">Contact</p>
        <h2>Email is best.</h2>
        <p>
          For roles, project questions, or anything from GitHub, send a note. I check email more
          reliably than DMs.
        </p>
      </div>
      <div className="contact-actions" aria-label="Contact links">
        <IconLink
          href={portfolio.links.email}
          label="Email"
          ariaLabel="Email Jayden"
          icon={<Mail />}
        />
        <IconLink
          href={portfolio.links.github}
          label="GitHub"
          ariaLabel="GitHub profile"
          logo={linkLogos.github}
        />
        <IconLink
          href={portfolio.links.linkedin}
          label="LinkedIn"
          ariaLabel="LinkedIn profile"
          logo={linkLogos.linkedin}
        />
      </div>
    </section>
  );
}

function SectionHeading({
  eyebrow,
  title,
  summary,
}: {
  eyebrow: string;
  title: string;
  summary?: string;
}) {
  return (
    <div className={summary ? "section-heading" : "section-heading section-heading-compact"}>
      <p className="eyebrow">{eyebrow}</p>
      <h2>{title}</h2>
      {summary ? <p>{summary}</p> : null}
    </div>
  );
}

function IconLink({
  href,
  label,
  ariaLabel,
  icon,
  logo,
}: {
  href: ExternalLink["href"];
  label: string;
  ariaLabel?: string;
  icon?: ReactNode;
  logo?: {
    src: string;
    alt: string;
  };
}) {
  const external = href.startsWith("http");

  return (
    <a
      className="icon-link"
      href={href}
      target={external ? "_blank" : undefined}
      rel={external ? "noreferrer" : undefined}
      aria-label={ariaLabel}
    >
      <span className="icon-link-label">{label}</span>
      <span
        className={logo ? "icon-link-mark icon-link-mark-logo" : "icon-link-mark"}
        aria-hidden="true"
      >
        {logo ? <img src={logo.src} alt="" /> : icon}
      </span>
    </a>
  );
}

export default App;
