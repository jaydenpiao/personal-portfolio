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
  dates: string;
  summary: string;
  bullets: string[];
};

export type SkillGroup = {
  name: string;
  skills: string[];
};

export const portfolio = {
  hero: {
    title: "Jayden Piao",
    eyebrow: "Software engineer",
    summary:
      "AI systems, developer tools, distributed-systems experiments, and product-focused web apps built with clean interfaces, observable behavior, and reliable handoffs.",
    location: "Computer Science at UBC",
    availability: "Open to software engineering roles and serious product-building work.",
  },
  links: {
    github: "https://github.com/jaydenpiao",
    linkedin: "https://www.linkedin.com/in/jaydenpiao/",
    email: "mailto:jaydenpiao@gmail.com",
    resume:
      "https://drive.google.com/file/d/1y4bXWwGK4G06ufyMzc3qq5Y328F1sejU/view?usp=sharing",
  },
  status: [
    {
      label: "Current focus",
      value: "AI-agent safety, control planes, and production-grade demos",
    },
    {
      label: "Build, test, lint, ship",
      value: "Vite, React, TypeScript, Vitest, ESLint, GitHub PR workflow",
    },
    {
      label: "Strongest signal",
      value: "Systems that expose evidence: logs, checks, health, rollback, and benchmarks",
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
      company: "Marr Labs (YC W24)",
      role: "Software Engineer Intern",
      dates: "May 2024 - Dec 2024",
      summary:
        "Built AI and infrastructure tooling for voice-agent workflows, transcript parsing, and evaluation.",
      bullets: [
        "Improved 7-character code parsing in transcripts from 13% to 87% using GPT-4o, Instructor, and Pydantic.",
        "Built a Dockerized ECS web app with GitHub Actions CI/CD for exploring TTS voices.",
        "Created an AI-agent call evaluation framework that measured latency and retrieval accuracy.",
      ],
    },
    {
      company: "UBC MINT",
      role: "Software Engineer",
      dates: "Mar 2024 - Present",
      summary:
        "Engineering design team work focused on open neurotechnology tooling and accessible BCI interfaces.",
      bullets: [
        "Contributed to an open-source BCI interface using Rust, SQL, and Next.js.",
        "Worked on tooling intended to make EEG headset research more accessible and collaborative.",
      ],
    },
    {
      company: "UBC Poker Club",
      role: "Software Developer",
      dates: "Jun 2023 - Present",
      summary:
        "Maintained the club website and event-facing surfaces for a large student poker community.",
      bullets: [
        "Built responsive event and inquiry surfaces for 150+ player tournament registration.",
        "Coordinated website content and design changes with internal stakeholders.",
      ],
    },
    {
      company: "The Verse",
      role: "Software Engineer Intern",
      dates: "May 2023 - Aug 2023",
      summary:
        "Built MERN and Python tooling for music-analysis products and internal operations.",
      bullets: [
        "Developed U4Ea Labels, a MERN app that generated music-analysis artwork for 37,000+ customers.",
        "Used Musixmatch, Python, and Flask for lyric retrieval and sound-frequency generation.",
      ],
    },
  ] satisfies Experience[],
  skillGroups: [
    {
      name: "AI systems",
      skills: ["Python", "FastAPI", "GPT-4o", "Anthropic SDK", "Whisper", "Pydantic"],
    },
    {
      name: "Backend and systems",
      skills: ["Go", "Multi-Paxos", "Postgres", "SSE", "Docker", "Fly.io"],
    },
    {
      name: "Frontend product",
      skills: ["React", "TypeScript", "Vite", "CSS", "shadcn/ui", "Vercel"],
    },
    {
      name: "Engineering quality",
      skills: ["Vitest", "pytest", "mypy", "ESLint", "GitHub Actions", "OpenTelemetry"],
    },
  ] satisfies SkillGroup[],
};
