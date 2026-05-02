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

export type Education = {
  school: string;
  program: string;
  dates: string;
  location: string;
  logo: {
    src: string;
    alt: string;
  };
  summary: string;
  focus: string[];
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
      "I'm a fourth-year Computer Science student at UBC. I've worked on distributed systems, DynamoDB storage infrastructure, core product features, and LLM and voice-agent tooling. I like building practical software that solves hard technical problems.",
  },
  education: {
    school: "University of British Columbia",
    program: "Computer Science",
    dates: "Class of 2026",
    location: "Vancouver, BC",
    logo: {
      src: "/logos/ubc-logo.jpg",
      alt: "University of British Columbia logo",
    },
    summary:
      "Fourth-year Computer Science student focused on backend systems, infrastructure, and product engineering.",
    focus: ["GPA 3.7"],
  } satisfies Education,
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
      value: "Distributed systems, backend infrastructure, storage engines, reliability work, and developer tooling",
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
      id: "parameter-golf",
      name: "Parameter Golf",
      eyebrow: "Compact model research",
      summary:
        "Public fork/workspace for OpenAI Parameter Golf: compact language-model experiments under a 16MB artifact budget, with reproducible run records and submission configs.",
      impact: [
        "Tracked ternary, FP8, sliding-window, and tokenizer experiments through named run records",
        "Kept configs, training scripts, submission JSON, logs, and result notes together for reproducible comparisons",
        "Validated artifact-size and BPB tradeoffs against the challenge constraints",
      ],
      stack: ["Python", "PyTorch", "CUDA", "H100", "Tokenization", "Experiment tracking"],
      links: [
        {
          label: "Repository",
          href: "https://github.com/jaydenpiao/parameter-golf",
        },
      ],
      visual: {
        label: "model budget",
        lines: ["16MB cap", "train config", "artifact", "BPB score", "run log"],
      },
    },
    {
      id: "macro-place-challenge",
      name: "Macro Placement Challenge",
      eyebrow: "EDA optimization",
      summary:
        "Public fork/workspace for the HRT/Partcl macro-placement challenge with deterministic placement code, benchmark evaluation, local/cloud configs, and OpenROAD integration notes.",
      impact: [
        "Implemented the submissions/jaydenpiao placer entry point with deterministic runtime knobs",
        "Kept benchmark metadata, result schemas, and smoke tests around the placement workflow",
        "Documented cloud parity and agent handoff notes for repeatable Linux validation",
      ],
      stack: ["Python", "EDA", "OpenROAD", "Docker", "PyTorch", "Optimization"],
      links: [
        {
          label: "Repository",
          href: "https://github.com/jaydenpiao/macro-place-challenge-2026",
        },
      ],
      visual: {
        label: "placement loop",
        lines: ["benchmarks", "macros", "legalize", "wirelength", "score"],
      },
    },
    {
      id: "phonetic-ai",
      name: "PhoneticAI",
      eyebrow: "nwHacks 2025",
      summary:
        "nwHacks 2025 voice-agent CRM prototype with a React dashboard, FastAPI backend, MySQL data model, Retell phone-call webhooks, and OpenAI transcript parsing for call summaries and events.",
      impact: [
        "Pulled agents, contacts, calls, events, and statistics into a dashboard UI",
        "Parsed call transcripts into sentiment, summaries, and calendar event objects",
        "Connected Retell call-status callbacks to persistent contact and call records",
      ],
      stack: ["React", "FastAPI", "MySQL", "OpenAI", "Retell", "Tailwind CSS"],
      links: [
        {
          label: "Repository",
          href: "https://github.com/jaydenpiao/PhoneticAI",
        },
        {
          label: "Devpost",
          href: "https://devpost.com/software/phoneticai",
        },
      ],
      visual: {
        label: "call workflow",
        lines: ["phone call", "webhook", "transcript", "event parse", "CRM update"],
      },
    },
    {
      id: "ubc-poker",
      name: "UBC Poker Club",
      eyebrow: "Club website",
      summary:
        "Responsive club website for event registration, club information, inquiries, and tournament media for a 150+ player community.",
      impact: [
        "Maintained public-facing content and registration surfaces",
        "Aligned club operations with a mobile-friendly event experience",
      ],
      stack: ["React", "JavaScript", "Tailwind CSS"],
      links: [
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
    {
      id: "vita",
      name: "Vita",
      eyebrow: "nwHacks 2024",
      summary:
        "nwHacks 2024 mobile patient-monitoring app for senior-home residents, with Firebase-backed patient data, a Python asyncio simulator, and a heart-attack detection model feeding alert flows.",
      impact: [
        "Simulated concurrent ECG and location streams before pushing patient updates to Firestore",
        "Used realtime database updates to connect backend patient state to the mobile app",
        "Tied model output into caregiver alert and emergency-contact workflows",
      ],
      stack: ["TypeScript", "Python", "Firebase", "Firestore", "asyncio", "ML"],
      links: [
        {
          label: "Repository",
          href: "https://github.com/jaydenpiao/Vita",
        },
        {
          label: "Devpost",
          href: "https://devpost.com/software/vita-paxt8v",
        },
      ],
      visual: {
        label: "patient monitor",
        lines: ["ECG stream", "patient simulator", "Firestore sync", "mobile alert"],
      },
    },
    {
      id: "kings-craft",
      name: "King's Craft",
      eyebrow: "StormHacks 2024 runner-up",
      summary:
        "Hackathon project that converts a single object photo into a 3D-printable .obj flow with web/mobile frontends, Flask services, AI reconstruction, S3 storage, and Firebase auth.",
      impact: [
        "Converted object photos into background-removed, multi-view inputs for 3D reconstruction",
        "Built React/Vite web and React Native mobile surfaces for capture, browsing, and model viewing",
        "Integrated AWS S3 and Firebase Google sign-in around generated assets",
      ],
      stack: ["React", "React Native", "Flask", "Python", "AWS S3", "Firebase", "AI"],
      links: [
        {
          label: "Repository",
          href: "https://github.com/koh3n/KINGSCRAFT",
        },
        {
          label: "Devpost",
          href: "https://devpost.com/software/kings-craft",
        },
      ],
      visual: {
        label: "image to 3D",
        lines: ["photo", "background cutout", "multi-view", ".obj export"],
      },
    },
    {
      id: "recipe-meal-planner",
      name: "Recipe Meal Planner",
      eyebrow: "Database app",
      summary:
        "Meal-planning and recipe app built around a MySQL relational schema, seed data, and a full local dev workflow for a CPSC 304 database project.",
      impact: [
        "Modeled recipe, meal, and planning data in SQL instead of keeping state only in the UI",
        "Runs the backend and frontend together from a single development command",
        "Documents local MySQL setup, schema loading, and app startup for repeatable handoff",
      ],
      stack: ["TypeScript", "MySQL", "SQL", "Node", "Vite"],
      links: [
        {
          label: "Repository",
          href: "https://github.com/jaydenpiao/recipe-meal-planner",
        },
      ],
      visual: {
        label: "meal data model",
        lines: ["recipes", "ingredients", "meal plan", "SQL query"],
      },
    },
    {
      id: "customer-service-chatbot",
      name: "Customer Service Chatbot",
      eyebrow: "LLM workflow",
      summary:
        "Python chatbot workspace for ecommerce support, covering FAQ data cleaning, JSONL conversion, OpenAI file upload, fine-tuning, and appointment-booking test flows.",
      impact: [
        "Built scripts for one-shot, continuous, and trained-model chatbot runs",
        "Added preprocessing utilities for raw FAQ data and JSONL fine-tuning inputs",
        "Documented escalation, CRM integration, evaluation, and human-handoff considerations",
      ],
      stack: ["Python", "OpenAI API", "Fine-tuning", "JSONL", "Data cleaning"],
      links: [
        {
          label: "Repository",
          href: "https://github.com/jaydenpiao/customer-service-chatbot",
        },
      ],
      visual: {
        label: "support loop",
        lines: ["FAQ data", "JSONL", "fine-tune", "chat flow", "handoff notes"],
      },
    },
    {
      id: "u4ea-labels",
      name: "U4EA Labels",
      eyebrow: "Music analysis",
      summary:
        "Music-analysis app that scores songs by sentiment and frequency categories, then presents the result as nutrition-label-style artwork.",
      impact: [
        "Built a React and Tailwind interface around track scoring and label generation",
        "Used sentiment analysis to map songs into emotional and frequency-based categories",
        "Connected a small Express path for app data flow during the prototype",
      ],
      stack: ["React", "Tailwind CSS", "Express", "Sentiment", "JavaScript"],
      links: [
        {
          label: "Repository",
          href: "https://github.com/jaydenpiao/tailwind-u4ea",
        },
      ],
      visual: {
        label: "track label",
        lines: ["lyrics", "sentiment", "frequency score", "nutrition label"],
      },
    },
    {
      id: "album-nutrition",
      name: "Album Nutrition",
      eyebrow: "Music data tooling",
      summary:
        "Python and Figma-plugin project that turns album lyrics into frequency counts and nutrition-label-style artwork data.",
      impact: [
        "Stored lyric datasets and generated JSON frequency outputs across albums",
        "Filtered stop words and counted terms for label-ready summaries",
        "Used a Figma plugin path to populate design templates from analysis results",
      ],
      stack: ["Python", "JavaScript", "Figma Plugin API", "Text processing", "Data visualization"],
      links: [
        {
          label: "Repository",
          href: "https://github.com/jaydenpiao/albumnutrition",
        },
      ],
      visual: {
        label: "album label",
        lines: ["lyrics", "stop words", "term counts", "JSON", "Figma layer"],
      },
    },
    {
      id: "asl-translator",
      name: "ASL Translator",
      eyebrow: "Hackathon ML",
      summary:
        "NwHacks web prototype that translates American Sign Language gestures into English with a TensorFlow model and browser-facing UI.",
      impact: [
        "Used a TensorFlow model as the core translation path",
        "Built a lightweight HTML and JavaScript interface for the hackathon demo",
      ],
      stack: ["TensorFlow", "JavaScript", "HTML", "CSS"],
      links: [
        {
          label: "Repository",
          href: "https://github.com/jaydenpiao/NWHacks",
        },
      ],
      visual: {
        label: "gesture pipeline",
        lines: ["camera input", "model pass", "ASL class", "English output"],
      },
    },
    {
      id: "chatgpt-clone",
      name: "ChatGPT Clone",
      eyebrow: "Full-stack chat app",
      summary:
        "TypeScript chat application with a Vite/React frontend, Express backend, MongoDB persistence, JWT auth, and OpenAI-powered chat routes.",
      impact: [
        "Split frontend and backend into separate TypeScript apps with build scripts",
        "Used Express, MongoDB, JWT, and validation middleware for the server path",
        "Built the UI with React, MUI, routing, toast feedback, and API calls",
      ],
      stack: ["TypeScript", "React", "Vite", "Express", "MongoDB", "OpenAI"],
      links: [
        {
          label: "Repository",
          href: "https://github.com/jaydenpiao/chatgpt_clone",
        },
      ],
      visual: {
        label: "chat stack",
        lines: ["React UI", "auth token", "Express API", "MongoDB", "OpenAI call"],
      },
    },
    {
      id: "atm-machine",
      name: "ATM Machine",
      eyebrow: "Java desktop app",
      summary:
        "Java desktop banking simulator with account creation, deposit/withdraw flows, suspend/remove actions, JSON save/load, UI feedback, and refactoring notes.",
      impact: [
        "Modeled chequing and savings account flows with persistent account lists",
        "Added save/load behavior and event logging for account operations",
        "Documented UML and refactoring tradeoffs around duplication and UI coupling",
      ],
      stack: ["Java", "Swing", "JSON", "OOP", "Persistence"],
      links: [
        {
          label: "Repository",
          href: "https://github.com/jaydenpiao/ATM",
        },
      ],
      visual: {
        label: "banking flow",
        lines: ["create", "deposit", "withdraw", "save", "load"],
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
        src: "/logos/google.png",
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
        src: "/logos/aws.png",
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
        src: "/logos/ubc-mint.jpg",
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
        src: "/logos/marr-labs.jpg",
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
      company: "UBC Poker Club",
      role: "Web Developer",
      location: "Vancouver, BC",
      dates: "2023 - 2024",
      logo: {
        src: "/logos/ubc-poker.svg",
        alt: "UBC Poker Club logo",
      },
      summary:
        "Built and maintained the club's website for events, registration, media, and sponsor-facing content.",
      bullets: [
        "Shipped the React and Tailwind CSS site with event, gallery, contact, and registration surfaces.",
        "Maintained public-facing content and deployment flow for a 150+ player UBC club community.",
      ],
    },
    {
      company: "The Verse",
      role: "Software Engineer Intern",
      location: "Remote",
      dates: "May 2023 - Aug 2023",
      logo: {
        src: "/logos/the-verse.jpg",
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
        src: "/logos/ubc-thunderbots.jpg",
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
      name: "Backend + infrastructure",
      primary: "Python / FastAPI / AWS",
      summary: "FastAPI services, SQL data models, Docker/ECS deploys, and the API layer around agent and product workflows.",
      skills: ["Python", "FastAPI", "Postgres", "SQL", "Docker", "AWS ECS", "Node.js"],
    },
    {
      name: "Systems + storage",
      primary: "Rust / Go / C++",
      summary: "DynamoDB replication work, Multi-Paxos coordination, WAL/snapshot recovery, and low-latency control code.",
      skills: ["Rust", "Go", "C++", "Multi-Paxos", "WAL/Snapshots", "Linux"],
    },
    {
      name: "Product surfaces",
      primary: "React / TypeScript",
      summary: "React dashboards and product UI for agent evals, voice workflows, project demos, and internal tools.",
      skills: ["React", "TypeScript", "Vite", "Tailwind CSS", "MUI", "OAuth"],
    },
    {
      name: "AI + ML tooling",
      primary: "OpenAI / PyTorch / TensorFlow",
      summary: "LLM intent parsing, AI-agent eval tooling, speech transcription, EEG simulation, and ML-backed robotics logic.",
      skills: ["OpenAI API", "Anthropic", "Whisper", "PyTorch", "TensorFlow", "Pydantic"],
    },
    {
      name: "Shipping + observability",
      primary: "Tests / logs / CI",
      summary: "Small test suites, structured logs, health checks, rollback paths, and PR workflows that make changes easier to verify.",
      skills: ["pytest", "Vitest", "Playwright", "ESLint", "GitHub Actions", "Observability"],
    },
  ] satisfies SkillGroup[],
};
