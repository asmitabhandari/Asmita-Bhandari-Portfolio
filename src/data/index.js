export const ME = {
  name: "Asmita Bhandari",
  role: "Full-Stack Developer | Computer Science Student",
  location: "Wixom, Michigan",
  email: "asmitabhandari1234@gmail.com",
  phone: "(586) 413-1442",
  dob: "",
  bio: "Computer Science student at Wayne State University focused on building scalable web apps, reliable backend systems, and practical analytics tools.",
  bio2:
    "I enjoy turning messy real-world problems into clean software experiences. My work spans Python tooling, C++ fundamentals, responsive frontend development, and backend API design through internships and academic projects.",
  links: {
    github: "https://github.com/asmitabhandari",
    linkedin: "https://www.linkedin.com/in/asmita-bhandari1/",
    medium: "",
    tableau: "",
    youtube: "",
    instagram: "",
    leetcode: "",
  },
}

export const TYPEWRITER_LINES = [
  "Full-stack engineering in progress.",
  "Building practical software with Python and C++.",
  "Frontend polish + backend reliability.",
  "Wayne State CS | Class of 2027.",
  "Always learning, always shipping.",
]

export const FILES = [
  { id: "home", name: "home.tsx", folder: "src", lang: "TypeScript React" },
  { id: "about", name: "about.html", folder: "src", lang: "HTML" },
  { id: "projects", name: "projects.js", folder: "src", lang: "JavaScript" },
  { id: "skills", name: "skills.json", folder: "data", lang: "JSON" },
  { id: "experience", name: "experience.ts", folder: "src", lang: "TypeScript" },
  { id: "contact", name: "contact.css", folder: "src", lang: "CSS" },
  { id: "readme", name: "README.md", folder: "root", lang: "Markdown" },
  { id: "resume", name: "Asmita_Bhandari_Resume.pdf", folder: "root", lang: "PDF", download: true },
]

export const EDUCATION = [
  {
    id: 1,
    institution: "Wayne State University, College of Engineering",
    university: "Detroit, Michigan",
    degree: "Bachelor of Science in Computer Science",
    minor: "Expected Graduation: May 2027 | Junior",
    gpa: "Honors: 3x Dean's List | Scholarship: WSU Gold Scholarship",
    period: "2023 - 2027",
    location: "Detroit, MI",
    icon: "CS @",
  },
]

export const PROJECTS = [
  {
    id: 1,
    icon: "CR",
    accent: "#ff6fd8",
    type: "C++ | Security Fundamentals",
    name: "Cryptography in C++",
    desc: "Implemented Caesar Cipher and Rot13 class hierarchy with configurable shift controls, random-shift encode/decode checks, and a retry loop for validation. Built to demonstrate practical encryption logic with clean OOP structure.",
    tags: ["C++", "OOP", "Caesar Cipher", "ROT13", "CLI"],
    link: "https://github.com/asmitabhandari/Quest-3",
    period: "Mar 2024 - Apr 2024",
  },
  {
    id: 2,
    icon: "TL",
    accent: "#4ec9b0",
    type: "C++ | Interactive Game Logic",
    name: "Truth or Lie Labyrinth Game",
    desc: "Built a console logic game with random sentinel behavior, question pools, truth-or-lie decisions, and score tracking for answered questions. Designed for replayability and clean control-flow handling.",
    tags: ["C++", "Randomization", "Game State", "Communication"],
    link: "https://github.com/asmitabhandari/Truth-or-Lie-Labyrinth-Game-in-C-",
    period: "Feb 2024 - Mar 2024",
  },
  {
    id: 3,
    icon: "CS",
    accent: "#6c63ff",
    type: "Python | Analytics Utility",
    name: "Coffee Shop Sales Tracker",
    desc: "Developed a console sales tracker for order entry, cup-size inventory, revenue summaries, and report output. Structured the codebase around reusable functions to mirror real-world shop operations.",
    tags: ["Python", "Data Tracking", "Reporting", "CLI"],
    link: "https://github.com/asmitabhandari/Python-Coffee-Shop",
    period: "Dec 2023",
  },
  {
    id: 4,
    icon: "TF",
    accent: "#4fc1ff",
    type: "Python | Text Intelligence",
    name: "Text File Analysis and Comparison",
    desc: "Created file comparison workflows to compute intersections, unions, unique terms, and frequency tables across documents. Results are exported for follow-up review and documentation.",
    tags: ["Python", "File I/O", "Text Processing", "Frequency Analysis"],
    link: "https://github.com/asmitabhandari/Text-File-Analysis",
    period: "Nov 2023 - Dec 2023",
  },
  {
    id: 5,
    icon: "WA",
    accent: "#f7df1e",
    type: "Python | Data Structures",
    name: "Word Analysis",
    desc: "Implemented helper functions to parse files, extract unique words, build union/intersection sets, and generate frequency reports. Optimized for readability and straightforward testing.",
    tags: ["Python", "Set Operations", "Algorithms", "Automation"],
    link: "https://github.com/asmitabhandari/Word-Analysis",
    period: "Nov 2023 - Dec 2023",
  },
  {
    id: 6,
    icon: "MG",
    accent: "#c586c0",
    type: "Python | Game Development",
    name: "Memory Game",
    desc: "Designed a complete 4x4 card-matching game with board setup, shuffled cards, reveal/hide mechanics, match checks, and win detection. Provides a strong foundation for expanded gameplay features.",
    tags: ["Python", "Game Loop", "State Logic", "CLI"],
    link: "https://github.com/asmitabhandari/Memory-Game",
    period: "Oct 2023 - Nov 2023",
  },
  {
    id: 7,
    icon: "FC",
    accent: "#ff9d4b",
    type: "Python | Math Tooling",
    name: "Python Fraction Calculator",
    desc: "Built a menu-driven calculator for fraction addition, subtraction, multiplication, and division with input validation and safe denominator handling.",
    tags: ["Python", "Arithmetic", "Validation", "CLI"],
    link: "https://github.com/asmitabhandari",
    period: "Oct 2023 - Nov 2023",
  },
  {
    id: 8,
    icon: "TC",
    accent: "#4ec9b0",
    type: "Python | Utility Engineering",
    name: "Time Conversions in Python",
    desc: "Created a modular converter between 12-hour and 24-hour formats with structured prompts and clear output formatting for quick day-to-day use.",
    tags: ["Python", "Formatting", "Functions", "CLI"],
    link: "https://github.com/asmitabhandari/Python-Time-Conversion-",
    period: "Nov 2023",
  },
]

export const SKILLS = [
  {
    group: "Programming Languages",
    items: [
      { name: "Python", pct: 90, color: "#ff6fd8" },
      { name: "JavaScript", pct: 85, color: "#facc15" },
      { name: "TypeScript", pct: 80, color: "#38bdf8" },
      { name: "Java", pct: 80, color: "#f97316" },
      { name: "C++", pct: 82, color: "#a855f7" },
      { name: "SQL", pct: 88, color: "#4ec9b0" },
    ],
  },
  {
    group: "Frontend",
    items: [
      { name: "React", pct: 88, color: "#38bdf8" },
      { name: "React Native", pct: 80, color: "#6366f1" },
      { name: "HTML", pct: 90, color: "#f97316" },
      { name: "CSS", pct: 88, color: "#22c55e" },
      { name: "UI/UX with Figma", pct: 84, color: "#c586c0" },
    ],
  },
  {
    group: "Backend and APIs",
    items: [
      { name: "FastAPI", pct: 86, color: "#34d399" },
      { name: "Node.js", pct: 85, color: "#22c55e" },
      { name: "Express", pct: 82, color: "#a855f7" },
      { name: "REST APIs", pct: 90, color: "#6366f1" },
      { name: "GraphQL", pct: 76, color: "#ff6fd8" },
    ],
  },
  {
    group: "Databases and Data",
    items: [
      { name: "PostgreSQL", pct: 88, color: "#38bdf8" },
      { name: "MongoDB", pct: 82, color: "#22c55e" },
      { name: "NoSQL", pct: 80, color: "#a855f7" },
      { name: "Data Analysis", pct: 86, color: "#facc15" },
    ],
  },
  {
    group: "Tools and Platforms",
    items: [
      { name: "Git", pct: 90, color: "#f97316" },
      { name: "VS Code", pct: 92, color: "#38bdf8" },
      { name: "Docker", pct: 80, color: "#38bdf8" },
      { name: "AWS", pct: 75, color: "#f97316" },
      { name: "Firebase", pct: 78, color: "#facc15" },
      { name: "Strapi", pct: 72, color: "#6366f1" },
      { name: "Sanbase", pct: 74, color: "#ff6fd8" },
    ],
  },
]

export const PILLS = [
  "Coursework: Data Structures",
  "Coursework: Object-Oriented Programming",
  "Coursework: Algorithms",
  "PERN Stack",
  "Cross-browser Testing",
  "Responsive Design",
  "Agile Sprints",
  "Team Collaboration",
  "Communication",
  "Technical Documentation",
  "3D Printing",
]

export const EXPERIENCE = [
  {
    date: "01/2026 - Present",
    current: true,
    role: "Student Software Engineer Intern",
    company: "Youth Tank Detroit",
    location: "Detroit, MI",
    desc: "Designed and implemented backend systems for urban infrastructure and community planning data.",
    points: [
        
      "Designed and implemented RESTful backend services in Python/Flask to manage structured urban infrastructure and community planning datasets.",
      "Modeled relational database schemas in PostgreSQL to support multi-neighborhood connectivity mapping across a 27.5-mile greenway system.",
      "Integrated third-party mapping APIs to build interactive, data-driven visualizations for public-facing web platforms.",
    ],
    tags: ["Python", "Flask", "REST APIs", "PostgreSQL", "Mapping APIs"],
  },
  {
    date: "Jan 2026 - Present",
    current: true,
    role: "Full Stack Developer Intern",
    company: "Brilliant",
    location: "Detroit, MI",
    desc: "Delivering full-stack features, APIs, and internal developer tooling.",
    points: [
      "Developed web services and APIs using FastAPI and Python/Flask for internal product workflows.",
      "Built backend services with integrations to external data sources and internal analytics tools.",
      "Owned work across design, implementation, testing, and delivery milestones in agile sprints.",
    ],
    tags: ["FastAPI", "Python", "Flask", "API Design", "Microservices", "Full Stack"],
  },
  {
    date: "Sep 2025 - Dec 2025",
    current: false,
    role: "Frontend Developer Intern",
    company: "Propiva",
    location: "Detroit, MI",
    desc: "Improved user-facing product quality through responsive design and system-level UI consistency.",
    points: [
      "Developed responsive frontend components that improved mobile accessibility and consistency across devices.",
      "Contributed to shared design systems, reducing component development time for new features by 20%.",
      "Collaborated with cross-functional teams to deliver sprint goals on schedule.",
    ],
    tags: ["React", "UI/UX", "Design Systems", "Responsive Design", "Agile"],
  },
  {
    date: "May 2024 - Nov 2024",
    current: false,
    role: "Backend and Data Systems Intern",
    company: "Hillside Jewelers and Gold Buyers",
    location: "Utica, MI",
    desc: "Built practical analytics and dashboard workflows supporting retail business operations.",
    points: [
      "Built internal sales analytics dashboards with Python and SQL for real-time product and customer visibility.",
      "Reduced manual reporting time by 30% by automating recurring analytics and summary outputs.",
      "Resolved 20+ UI issues through systematic cross-browser testing and consistency fixes.",
    ],
    tags: ["Python", "SQL", "Dashboarding", "Data Analysis", "Cross-browser Testing"],
  },
]

export const ACHIEVEMENTS = [
  {
    icon: "AW",
    title: "3x Dean's List Recipient",
    event: "Wayne State University",
    desc: "Recognized for strong and consistent academic performance.",
  },
  {
    icon: "SC",
    title: "WSU Gold Scholarship",
    event: "Wayne State University",
    desc: "Awarded for academic merit and leadership potential.",
  },
]

export const TERMINAL_FS_FILES = [
  "home.tsx",
  "about.html",
  "projects.js",
  "skills.json",
  "experience.ts",
  "contact.css",
  "README.md",
  "Asmita_Bhandari_Resume.pdf",
]

export const TERMINAL_FILE_MAP = {
  "home.tsx": "home",
  "about.html": "about",
  "projects.js": "projects",
  "skills.json": "skills",
  "experience.ts": "experience",
  "contact.css": "contact",
  "README.md": "readme",
}
