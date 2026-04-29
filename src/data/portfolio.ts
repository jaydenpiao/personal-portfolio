export type ExternalLink = {
  label: string;
  href: string;
};

export type Project = {
  id: string;
  name: string;
  eyebrow: string;
  summary: string;
  impact: string[];
  stack: string[];
  links: ExternalLink[];
  visual: {
    label: string;
    lines: string[];
  };
};

export type Experience = {
  company: string;
  role: string;
  location: string;
  dates: string;
  logo: {
    src: string;
    alt: string;
  };
  summary: string;
  bullets: string[];
};

export type SkillGroup = {
  name: string;
  primary: string;
  summary: string;
  skills: string[];
};

export const portfolio = {
  hero: {
    title: "Jayden Piao",
    eyebrow: "Software engineer",
    summary:
      "I build reliable software across backend systems, developer tools, and web products, with a focus on clear interfaces, practical workflows, and code that is easy to maintain.",
    location: "UBC Computer Science - Class of 2026",
    availability: "Backend, infrastructure, and product engineering.",
  },
  links: {
    github: "https://github.com/jaydenpiao",
    linkedin: "https://www.linkedin.com/in/jaydenpiao/",
    email: "mailto:jaydenpiao@gmail.com",
    resume: "/jaydenpiao_resume.pdf",
  },
  status: [
    {
      label: "Recent work",
      value: "DynamoDB storage at AWS, Rust backend work at UBC MINT, and voice-agent tooling at Marr Labs",
    },
    {
      label: "Main stack",
      value: "TypeScript, React, Python, Go, Rust, FastAPI, Postgres, and AWS",
    },
    {
      label: "Interests",
      value: "Backend systems, infrastructure work, developer tools, and practical web apps",
    },
  ],
  projects: [
    {
      id: "quorum",
      name: "Quorum",
      eyebrow: "AI-agent control plane",
      summary:
        "Policy-gated execution platform for AI agents where every mutation flows through typed proposals, quorum voting, health checks, rollback, and a tamper-evident event log.",
      impact: [
        "FastAPI service with typed domain entities and authenticated operator routes",
        "Append-only hash-chained event log plus live operator console",
        "GitHub and Fly.io actuators with human-approval and rollback paths",
      ],
      stack: ["Python", "FastAPI", "Postgres", "SSE", "Docker", "Fly.io"],
      links: [
        {
          label: "Repository",
          href: "https://github.com/jaydenpiao/quorum",
        },
      ],
      visual: {
        label: "control-plane flow",
        lines: ["Intent", "Finding", "Proposal", "Vote", "Execute", "Verify"],
      },
    },
    {
      id: "quorum-coordination-service",
      name: "Quorum Coordination Service",
      eyebrow: "Distributed systems",
      summary:
        "Standalone Go coordination service built on a 3-node Multi-Paxos log with revisioned KV operations, leases, watches, WAL recovery, snapshots, and deterministic fault scenarios.",
      impact: [
        "Leader-served writes with strict leader-side linearizable reads",
        "Lease-focused TLA+ model and evidence-backed scenario runner",
        "Benchmark matrix for retained write-batching tradeoffs",
      ],
      stack: ["Go", "Multi-Paxos", "TLA+", "WAL", "HTTP"],
      links: [
        {
          label: "Repository",
          href: "https://github.com/jaydenpiao/quorum-coordination-service",
        },
      ],
      visual: {
        label: "consensus state",
        lines: ["n1 leader", "n2 follower", "n3 follower", "commit index", "watch stream"],
      },
    },
    {
      id: "3d-viz-tool",
      name: "3D-Viz-Tool",
      eyebrow: "Interactive visualization",
      summary:
        "Browser-based TypeScript visualization console for a trucking demo with a React/Vite web app, contract package, small API, and live browser updates over SSE.",
      impact: [
        "Monorepo split across web, API, shared contracts, and test utilities",
        "Private-link Vercel deployment shape with anti-indexing controls",
        "Scene/API/QA workflow documented for parallel agent work",
      ],
      stack: ["TypeScript", "React", "Vite", "SSE", "Zod", "Vercel"],
      links: [
        {
          label: "Repository",
          href: "https://github.com/jaydenpiao/3D-Viz-Tool",
        },
        {
          label: "Demo",
          href: "https://truck-demo-1a1e8bsf2nwv61u6.vercel.app/",
        },
      ],
      visual: {
        label: "vehicle telemetry",
        lines: ["scene shell", "state API", "SSE update", "asset status", "operator HUD"],
      },
    },
    {
      id: "hey-spotify",
      name: "hey-spotify",
      eyebrow: "Voice assistant",
      summary:
        "Siri-like Spotify assistant with OAuth PKCE, push-to-talk voice input, OpenAI Whisper transcription, GPT-4o structured intent parsing, wake-word detection, and regex fallback.",
      impact: [
        "Spotify playback, queue, search, and device control through a local web UI",
        "Hybrid parser for reliable command execution when LLM parsing degrades",
        "Wake-word setup with backend capability checks and pinned browser assets",
      ],
      stack: ["Python", "FastAPI", "Spotify API", "Whisper", "GPT-4o", "JavaScript"],
      links: [
        {
          label: "Repository",
          href: "https://github.com/jaydenpiao/hey-spotify",
        },
      ],
      visual: {
        label: "voice command loop",
        lines: ["wake", "record", "transcribe", "parse", "execute", "respond"],
      },
    },
    {
      id: "ai-closet-planner",
      name: "AI Closet Planner",
      eyebrow: "Full-stack product MVP",
      summary:
        "Closet planning app where users upload or describe clothes, generate structured outfit suggestions for occasions, and save outfits with authenticated account flows.",
      impact: [
        "React/Vite frontend with FastAPI backend and Supabase auth/storage",
        "Mock-mode and real-model paths for reliable demos",
        "Data model for closet items, saved outfits, and generated suggestions",
      ],
      stack: ["TypeScript", "React", "FastAPI", "Supabase", "Gemini", "Postgres"],
      links: [
        {
          label: "Repository",
          href: "https://github.com/jaydenpiao/AI-Closet-Planner",
        },
      ],
      visual: {
        label: "outfit pipeline",
        lines: ["closet item", "occasion", "constraints", "outfit JSON", "saved look"],
      },
    },
    {
      id: "ubc-poker",
      name: "UBC Poker Club",
      eyebrow: "Production club site",
      summary:
        "Responsive club website for event registration, club information, inquiries, and tournament media for a 150+ player community.",
      impact: [
        "Maintained public-facing content and registration surfaces",
        "Aligned club operations with a mobile-friendly event experience",
      ],
      stack: ["React", "JavaScript", "Tailwind CSS"],
      links: [
        {
          label: "Website",
          href: "https://ubcpokerclub.com/",
        },
        {
          label: "Repository",
          href: "https://github.com/jaydenpiao/ubc-poker",
        },
      ],
      visual: {
        label: "club operations",
        lines: ["events", "registration", "gallery", "contact"],
      },
    },
  ] satisfies Project[],
  experience: [
    {
      company: "Google",
      role: "Incoming Software Engineer Intern",
      location: "Sunnyvale, CA",
      dates: "May 2026 - Jul 2026",
      logo: {
        src: "/logos/google.svg",
        alt: "Google logo",
      },
      summary:
        "Incoming Cloud SQL intern focused on replication and availability infrastructure.",
      bullets: ["Cloud SQL - Replication and Availability."],
    },
    {
      company: "Amazon Web Services (AWS)",
      role: "Software Development Engineer Intern",
      location: "Seattle, WA",
      dates: "May 2025 - Aug 2025",
      logo: {
        src: "/logos/aws.svg",
        alt: "Amazon Web Services logo",
      },
      summary:
        "Built Rust storage infrastructure for DynamoDB replication and quorum recovery paths.",
      bullets: [
        "Built a Rust physical replication system for DynamoDB's new LSM-tree storage engine, replacing the logical approach.",
        "Reduced replica recovery time by 60% and CPU utilization by 50% by streaming byte-level data over custom netcat pipelines using Unix domain sockets and TCP bridges.",
        "Enabled cross-host replica synchronization and quorum recovery with Paxos-compatible recovery behavior and Linux keyring re-encryption.",
      ],
    },
    {
      company: "UBC MINT",
      role: "Software Engineering Lead",
      location: "Vancouver, BC",
      dates: "Mar 2024 - Aug 2025",
      logo: {
        src: "/logos/ubc-mint.svg",
        alt: "UBC MINT logo",
      },
      summary:
        "Led Rust backend work for an open Brain-Computer Interface research platform.",
      bullets: [
        "Led backend development in Rust for a BCI, simulating EEG signal processing for real-time neural data pipelines.",
        "Engineered high-frequency time-series EEG data flows with simulated signal generation for asynchronous scientific-computing workflows.",
      ],
    },
    {
      company: "Marr Labs (YC W24)",
      role: "Software Engineer Intern",
      location: "Remote",
      dates: "May 2024 - Dec 2024",
      logo: {
        src: "/logos/marr-labs.svg",
        alt: "Marr Labs logo",
      },
      summary:
        "Built AI-agent evaluation, observability, and infrastructure tooling for text and voice workflows.",
      bullets: [
        "Designed and implemented evaluation frameworks for text and voice AI agents using observability and automation principles.",
        "Integrated RESTful tools and visualization features that surfaced performance regressions and reduced manual testing by hours per engineer.",
        "Developed scalable systems using Docker, FastAPI, and AWS ECS for team-wide agent adoption and iterative ML workflows.",
      ],
    },
    {
      company: "The Verse",
      role: "Software Engineer Intern",
      location: "Remote",
      dates: "May 2023 - Aug 2023",
      logo: {
        src: "/logos/the-verse.svg",
        alt: "The Verse logo",
      },
      summary:
        "Built MERN products and internal tooling for music-analysis workflows and operations.",
      bullets: [
        "Developed U4Ea Labels, a MERN app that performs sentiment music analysis and uses DALL-E to generate nutritional-label artwork for 37K+ customers.",
        "Built a MERN internal management tool with OAuth accounts and a JavaScript Discord bot for automated activity monitoring.",
      ],
    },
    {
      company: "UBC Thunderbots",
      role: "Software Engineer",
      location: "Vancouver, BC",
      dates: "Sep 2021 - Aug 2022",
      logo: {
        src: "/logos/ubc-thunderbots.svg",
        alt: "UBC Thunderbots logo",
      },
      summary:
        "Built real-time robotics control and decision-making systems for a RoboCup Small Size League team.",
      bullets: [
        "Developed low-latency C++ robotics control systems on Ubuntu.",
        "Engineered a Python referee using TensorFlow models, improving real-time decision-making by 30%.",
      ],
    },
  ] satisfies Experience[],
  skillGroups: [
    {
      name: "Product UI",
      primary: "React + TypeScript",
      summary: "Responsive frontends, clean component boundaries, and interfaces that stay easy to change.",
      skills: ["React", "TypeScript", "Vite", "CSS", "shadcn/ui", "Tailwind CSS"],
    },
    {
      name: "Backend systems",
      primary: "Python / Go / Rust",
      summary: "APIs, storage paths, coordination services, and the lower-level pieces behind product work.",
      skills: ["Python", "FastAPI", "Go", "Rust", "Postgres", "Redis"],
    },
    {
      name: "Cloud and data",
      primary: "AWS + Postgres",
      summary: "DynamoDB storage work, container deploys, SQL data models, and practical infra glue.",
      skills: ["AWS", "DynamoDB", "ECS", "Docker", "Supabase", "Fly.io"],
    },
    {
      name: "Voice and LLMs",
      primary: "OpenAI / Anthropic",
      summary: "Speech flows, structured parsing, eval loops, and tooling around agent behavior.",
      skills: ["OpenAI API", "Anthropic SDK", "Whisper", "Pydantic", "Evals", "Observability"],
    },
    {
      name: "Shipping loop",
      primary: "Tests + CI",
      summary: "Typed contracts, small checks, browser passes, and PR-sized changes before shipping.",
      skills: ["Vitest", "pytest", "mypy", "ESLint", "GitHub Actions", "Playwright"],
    },
  ] satisfies SkillGroup[],
};
