// ───────────────────────────────────────────────────────────
// Structured resume data for Sargis Nahapetyan
// ───────────────────────────────────────────────────────────

const PROFILE = {
  name: "Sargis Nahapetyan",
  roles: ["Game Developer", "AI Engineer"],
  location: "Toronto, Ontario",
  email: "nahapetyansargis@gmail.com",
  phone: "416-930-1609",
  links: {
    linkedin: "https://www.linkedin.com/in/sargis-n/",
    resume: "resume.html",
  },
  bio: "I build games and the systems that make them tick: engines, graphics, gameplay AI. Lately I've been pulling modern machine learning into that work too. I've led a 40-person student team to ship a game on Steam, put LLM products in front of thousands of users, and written a graphics engine from scratch. Now I'm looking for a studio where I can ship ambitious things.",
};

const STATS = [
  { value: "40", label: "Student team led to ship on Steam" },
  { value: "150k+", label: "Players using my game mods", href: "#mods" },
  { value: "5,000", label: "Users served by my RAG chatbot" },
  { value: "8", label: "Technical courses TA'd, incl. Graphics, Engines, Linear Algebra" },
];

// tag vocabulary: game · ai · web · engine · mod · research
const PROJECTS = [
  {
    id: "equinox",
    title: "EQUINOX",
    tagline: "Dodgeball-themed PvP shipped on Steam",
    tags: ["game"],
    featured: true,
    role: "Team Lead · Gameplay Programmer",
    tech: ["Unreal Engine", "C++", "Git", "Trello"],
    links: {},
    cover: "assets/projects/equinox-4.jpg",
    images: [
      "assets/projects/equinox-4.jpg",
      "assets/projects/equinox-2.jpg",
      "assets/projects/equinox-7.jpg",
      "assets/projects/equinox-1.jpg",
      "assets/projects/equinox-5.jpg",
      "assets/projects/equinox-9.jpg",
      "assets/projects/equinox-6.jpg",
      "assets/projects/equinox-8.jpg",
      "assets/projects/equinox-3.jpg",
      "assets/projects/equinox-10.jpg",
      "assets/projects/equinox-header.jpg",
    ],
    bullets: [
      "Elected by class to lead a 40-student initiative building a competitive PvP title",
      "Programmed core shooting systems and dodgeball mechanics in C++",
      "Owned source control & project management across all sub-teams",
      "Shipped to Steam",
    ],
  },
  {
    id: "snakebite",
    title: "Snakebite Visual Novel",
    tagline: "Educational VN built with snake experts & doctors",
    tags: ["game"],
    featured: true,
    role: "Software Developer (Asclepius Foundation)",
    tech: ["Python", "Ren'Py", "Git", "Jira"],
    links: {},
    cover: "assets/projects/snakebite-1.jpg",
    coverFocus: "15% 45%",
    images: [
      "assets/projects/snakebite-1.jpg",
      "assets/projects/snakebite-6.jpg",
      "assets/projects/snakebite-3.jpg",
      "assets/projects/snakebite-2.jpg",
      "assets/projects/snakebite-4.jpg",
      "assets/projects/snakebite-5.jpg",
    ],
    bullets: [
      "Story-driven educational game on snakebite first-aid",
      "Built UI, navigation, fact entries, and menus (~3,000 LOC)",
      "Collaborated with domain experts to ensure medical accuracy",
    ],
  },
  {
    id: "woe",
    title: "WOE",
    tagline: "Networked multiplayer horror-survival",
    tags: ["game"],
    role: "Dev Lead · AI & Networking",
    tech: ["Unity", "C#", "Multiplayer networking"],
    links: {},
    cover: "assets/projects/woe-1.jpg",
    images: ["assets/projects/woe-1.jpg"],
    bullets: [
      "Humber capstone. Led a three-person team",
      "Built monster AI, networking layer, UI, and core gameplay loop in C#",
      "First-person puzzle-survival with networked co-op",
    ],
  },
  {
    id: "indie-recommender",
    title: "Indie Game Recommender",
    tagline: "RAG chatbot that recommends indie games",
    tags: ["ai", "web"],
    featured: true,
    role: "Solo · Full-stack + ML",
    tech: ["GPT-4", "Postgres + pgvector", "Next.js", "TypeScript", "Vercel"],
    links: {},
    art: { kind: "chat", prompt: "cozy roguelikes under 4 hrs?", chips: ["Hades", "Moonlighter", "Dead Cells"] },
    bullets: [
      "Retrieval-Augmented Generation over a Postgres embeddings DB of game releases",
      "Custom GPT-4 tools to read/write embeddings and reason over results",
      "React + TypeScript chat UI on Next.js, deployed on Vercel",
    ],
  },
  {
    id: "fake-news",
    title: "Fake News Detector",
    tagline: "Fine-tuned NLP classifier with 99% test accuracy",
    tags: ["ai"],
    role: "Solo · ML",
    tech: ["Transformers", "PyTorch", "fastai", "Gradio", "Hugging Face"],
    links: {},
    cover: "assets/projects/fakenews-1.jpg",
    coverFocus: "center 18%",
    images: ["assets/projects/fakenews-1.jpg"],
    bullets: [
      "Fine-tuned a Transformers model on 50,000 labelled articles",
      "Shipped a Gradio web app: paste an article, get a credibility verdict",
      "99% accuracy on a held-out test set",
    ],
  },
  {
    id: "logo-detector",
    title: "Hobby Logo Detector",
    tagline: "CV model that spots Warhammer iconography in the wild",
    tags: ["ai"],
    role: "Solo · ML",
    tech: ["DenseNet121", "PyTorch", "fastai", "Gradio"],
    links: {},
    cover: "assets/projects/logodetector-1.jpg",
    coverFocus: "center 12%",
    images: ["assets/projects/logodetector-1.jpg"],
    bullets: [
      "Scraped thousands of images and fine-tuned DenseNet121 with heavy augmentation",
      "Robust to distortion: works on tattoos, in-game screenshots, photos",
      "Live camera + upload Gradio app on Hugging Face",
    ],
  },
  {
    id: "hexes",
    title: "Hexes Underworld",
    tagline: "Fantasy roguelike on a custom OpenGL engine",
    tags: ["game", "engine"],
    role: "Engine & Combat Programmer",
    tech: ["C++", "OpenGL", "Unity (port)"],
    links: {},
    cover: "assets/projects/hexes-2.jpg",
    images: [
      "assets/projects/hexes-2.jpg",
      "assets/projects/hexes-1.jpg",
      "assets/projects/hexes-3.jpg",
    ],
    bullets: [
      "Built on a fully custom C++/OpenGL engine",
      "Owned engine optimisation, 3D models, and the combat system",
      "Later ported to Unity",
    ],
  },
  {
    id: "gfx-engine",
    title: "Custom Graphics Engine",
    tagline: "Hand-rolled 3D renderer in C++ / OpenGL",
    tags: ["engine"],
    role: "Solo · Engine Programmer",
    tech: ["C++", "OpenGL", "GLSL", "XML"],
    links: {},
    cover: "assets/projects/engine-2.jpg",
    images: ["assets/projects/engine-2.jpg", "assets/projects/engine-1.jpg"],
    bullets: [
      "Skybox, texture shading, frustum culling, 3D model loading",
      "XML-driven asset manager, mouse input, Fresnel & noise shaders",
      "Actively maintained",
    ],
  },
  {
    id: "addiction-paper",
    title: "Causes & Effects of Video Game Addiction",
    tagline: "28-page peer-reviewed research paper",
    tags: ["research"],
    role: "Author · Seneca Capstone",
    tech: ["Academic research"],
    art: { kind: "paper", kicker: "Seneca Capstone · IND800", stamp: "Peer-reviewed" },
    links: { paper: "uploads/video-game-addiction-paper.pdf" },
    bullets: [
      "Two-year study into which game mechanics drive compulsive play in teens and young adults",
      "Synthesised academic journals, screen-time data, and gambling-addiction literature",
      "Peer-reviewed by Prof. Jeffrey D. Lloyd (Arts & Science) and program coordinator Prof. Taunya Tremblay",
    ],
  },
  {
    id: "jams",
    title: "Game Jams",
    tagline: "Four jam games built under pressure",
    tags: ["game"],
    role: "Programmer",
    tech: ["Unity", "C#"],
    links: {},
    cover: "assets/projects/kittybooboo-1.jpg",
    images: ["assets/projects/kittybooboo-1.jpg", "assets/projects/lostintacs-1.jpg"],
    bullets: [
      "My Kitty Boo Boo · Mini Jame Gam #16",
      "Roots · Humber 2023",
      "Lost in Tacs · Humber 2021",
      "Crash Course · Humber 2020",
    ],
  },
  {
    id: "threejs",
    title: "Three.js Experiments",
    tagline: "Browser physics & graphics demos",
    tags: ["web", "engine"],
    role: "Solo",
    tech: ["Three.js", "TypeScript"],
    links: {},
    art: { kind: "wire" },
    images: ["assets/projects/threejs-1.jpg"],
    bullets: [
      "Breaking Glass (physics game)",
      "Ferris Wheel & Solar System (graphics demos)",
      "Blood Boil (TypeScript game project)",
    ],
  },
  {
    id: "one-bone",
    title: "One Bone",
    tagline: "2D pixel-art platformer",
    tags: ["game"],
    role: "Programmer",
    tech: ["Unity", "C#"],
    links: {},
    cover: "assets/projects/onebone-3.jpg",
    images: [
      "assets/projects/onebone-3.jpg",
      "assets/projects/onebone-5.jpg",
      "assets/projects/onebone-4.jpg",
      "assets/projects/onebone-2.jpg",
      "assets/projects/onebone-1.jpg",
    ],
    bullets: [
      "Centennial College capstone project",
      "Side-scrolling platformer with pixel-art tilesets and combat",
    ],
  },
];

const MODS_TOTAL = 54;
const MODS_WORKSHOP_URL = "#"; // TODO: Sargis's Steam Workshop profile URL

const MODS = [
  { game: "Garry's Mod", title: "[CW 2.0] Cases", subs: 62811, kind: "Storage entities", href: "https://steamcommunity.com/sharedfiles/filedetails/?id=713125469" },
  { game: "Garry's Mod", title: "[CW 2.0] Sci-Fi Aug", subs: 50085, kind: "Weapon", href: "https://steamcommunity.com/sharedfiles/filedetails/?id=689675000" },
  { game: "Garry's Mod", title: "[CW 2.0] Sci-Fi Pistol", subs: 35906, kind: "Weapon", href: "https://steamcommunity.com/sharedfiles/filedetails/?id=730880014" },
  { game: "PVK II", title: "Gothic Knight", subs: 4069, kind: "Character model" },
  { game: "PVK II", title: "Mang in Graz De Luxe", subs: 3910, kind: "Weapon", href: "https://steamcommunity.com/sharedfiles/filedetails/?id=787706442" },
  { game: "PVK II", title: "Steel Arming Sword", subs: 1174, kind: "Weapon", href: "https://steamcommunity.com/sharedfiles/filedetails/?id=787748653" },
];

const EXPERIENCE = [
  {
    role: "Software Sales Intern",
    org: "Prolyncs",
    when: "Jan – Apr 2025",
    summary:
      "Ran product demos, maintained CRM pipelines, and built sales collateral. Learned how to talk about technical work to non-technical buyers.",
  },
  {
    role: "Software Engineer Intern",
    org: "Niche Protocol",
    when: "Dec 2023 – Apr 2024",
    summary:
      "Shipped an LLM-powered RAG chatbot to 5,000 active users. Built the retrieval pipeline (Postgres + GPT-4), the multi-screen React UI, and the iOS release. Mentored teammates and ran the exploratory phase.",
  },
  {
    role: "Software Developer Intern",
    org: "Asclepius Snakebite Foundation",
    when: "May – Aug 2023",
    summary:
      "Built an educational visual novel in Python with snake experts and doctors. Owned UI, navigation, and back-end features across ~3,000 LOC.",
  },
  {
    role: "Teaching Assistant & Tutor",
    org: "Humber College",
    when: "2020 – 2023",
    summary:
      "TA'd eight technical courses across five semesters: Linear Algebra, Physics, Computer Graphics, Data Structures & Design Patterns, Game Engines (Unity), and Game Engines (Unreal). Ran weekly labs, graded assignments, and tutored students 1-on-1 through the math and engine internals.",
  },
  {
    role: "QA Tester & Consultant",
    org: "Pirates, Vikings and Knights II",
    when: "2018 – 2019",
    summary:
      "QA on a live Source Engine title. Consulted on modding-scene best practices and built workshop content to seed the community.",
  },
  {
    role: "Independent Game Modder",
    org: "Steam Workshop",
    when: "2017 – present",
    summary:
      "Self-taught Lua scripting, 3D modelling, rigging and Source Engine tooling to ship custom weapons, characters and entities for Garry's Mod and PVKII. 54 published mods, with the most popular reaching 150,000+ players. My longest-running shipped software.",
    href: "#mods",
  },
];

const EDUCATION = [
  { school: "Seneca Polytechnic", cred: "Hons. Bachelor, Interdisciplinary Studies", when: "2023–2025" },
  { school: "Humber College", cred: "Adv. Diploma, CS · Game Programming", when: "2020–2023", note: "4.0 GPA · top of program" },
  { school: "Centennial College", cred: "Adv. Diploma, Game Programming", when: "2016–2019" },
];

const SKILLS = {
  Languages: ["C++", "C#", "Python", "TypeScript", "Lua", "Java", "GLSL"],
  "Engines & 3D": ["Unreal", "Unity", "OpenGL", "Three.js", "Blender", "3DS Max", "Source"],
  "AI / ML": ["PyTorch", "Transformers", "fastai", "NumPy", "OpenAI API", "RAG", "pgvector"],
  Web: ["React", "Next.js", "Node.js", "Postgres", "GraphQL", "Vercel", "AWS"],
  Workflow: ["Git", "Jira", "Trello", "Agile/Scrum", "Code Review", "Jupyter", "Linux"],
};

const TAGS = {
  all: "All",
  game: "Games",
  ai: "AI · ML",
  engine: "Engine",
  web: "Web",
  mod: "Mods",
  research: "Research",
};

Object.assign(window, { PROFILE, STATS, PROJECTS, MODS, MODS_TOTAL, MODS_WORKSHOP_URL, EXPERIENCE, EDUCATION, SKILLS, TAGS });
