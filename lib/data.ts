// ─────────────────────────────────────────────────────────────────────────
// SITE DATA
// This is the single source of truth for all resume content on the site.
// Only information supplied in the original resume brief is included.
// Fields marked TODO require the owner to fill in real values/links/assets.
// ─────────────────────────────────────────────────────────────────────────

export const personal = {
  name: "Mohamed Jubair K",
  role: "Full Stack Developer",
  tagline: "I build fast, scalable web applications — from React interfaces to Node.js APIs to the AI models behind them.",
  degree: "B.Tech, Artificial Intelligence & Data Science",
  duration: "2022 – 2026",
  cgpa: "8.5",
  email: "jubair247987@gmail.com",
  phone: "+91 96779 54147",
  location: "India", // TODO: add city/state if you'd like it public
  github: "https://github.com/JNXBAE",
  linkedin: "https://www.linkedin.com/in/mohamed-jubair-kaja-moideen-367b28287/",
  resumeFile: "/resume/Mohamed_Jubair_K_Resume.pdf", // TODO: upload actual resume PDF here
};

export const roles = [
  "Full Stack Developer",
  "MERN Stack Developer",
  "Software Engineer",
  "AI/ML Engineer",
];

export const about = {
  summary:
    "I'm a Full Stack Developer and final-year AI & Data Science student, graduating in 2026 with a CGPA of 8.5. I work across the stack — building responsive interfaces in React and Next.js, designing REST APIs with Node.js and Express, and modeling data with MongoDB and PostgreSQL. Alongside product engineering, I research and build applied AI systems: transformers, computer vision, and multimodal models.",
  objective:
    "I'm looking for a Full Stack, MERN Stack, or Software Engineering role where I can ship production systems end to end — from schema design to deployment — on a team that values clean architecture and measurable impact.",
  philosophy:
    "I write code for the person who reads it next, including future me. That means typed interfaces, small components, tested boundaries, and systems designed to scale before they have to. I'd rather ship a smaller feature that's built right than a large one that's built fast.",
};

export type SkillCategory = {
  title: string;
  icon: string; // lucide-react icon name
  skills: string[];
};

export const skillCategories: SkillCategory[] = [
  {
    title: "Frontend",
    icon: "LayoutTemplate",
    skills: ["React.js", "Next.js", "HTML5", "CSS3", "JavaScript", "Responsive Design"],
  },
  {
    title: "Backend",
    icon: "Server",
    skills: ["Node.js", "Express.js", "REST APIs", "JWT Authentication", "RBAC"],
  },
  {
    title: "Databases",
    icon: "Database",
    skills: ["MongoDB", "PostgreSQL", "Firebase", "SQLite"],
  },
  {
    title: "Languages",
    icon: "Code2",
    skills: ["JavaScript", "Python", "SQL", "Java", "C++"],
  },
  {
    title: "DevOps",
    icon: "Container",
    skills: ["Docker", "AWS", "Git", "GitHub", "Linux", "Vercel"],
  },
  {
    title: "AI / ML",
    icon: "BrainCircuit",
    skills: ["PyTorch", "TensorFlow", "Hugging Face", "NLP", "Transformers", "RAG", "CNN", "Computer Vision"],
  },
  {
    title: "Core Computer Science",
    icon: "Binary",
    skills: ["Data Structures", "Algorithms", "OOP", "System Design Fundamentals"],
  },
];

export type Project = {
  slug: string;
  title: string;
  description: string;
  tech: string[];
  features: string[];
  challenges: string[];
  category: "Full Stack" | "AI / Research";
  image: string; // placeholder path
  // TODO: add real links for each project
  github?: string;
  demo?: string;
};

export const projects: Project[] = [
  {
    slug: "coding-contest-platform",
    title: "Coding Contest Platform",
    description:
      "A full-stack platform for hosting and running competitive coding contests, with role-based access for admins and participants and secure authentication throughout.",
    tech: ["React", "Node.js", "MongoDB", "JWT", "RBAC", "REST APIs"],
    features: [
      "Role-based access control separating admin and participant permissions",
      "JWT-secured authentication and session handling",
      "REST API layer connecting the React frontend to a MongoDB data store",
      "Contest and submission management workflows",
    ],
    challenges: [
      "Designing an RBAC model that cleanly separates admin and participant capabilities without duplicating route logic",
      "Structuring REST endpoints and MongoDB schemas to handle contest and submission data reliably",
    ],
    category: "Full Stack",
    image: "/images/projects/coding-contest-platform.png", // TODO: add real screenshot
    github: undefined, // TODO: add repo URL
    demo: undefined, // TODO: add live demo URL
  },
  {
    slug: "efficient-transformer-restricted-self-attention",
    title: "Efficient Transformer with Restricted Self-Attention",
    description:
      "A research project exploring a restricted self-attention mechanism to reduce the computational cost of transformer models while preserving performance.",
    tech: ["PyTorch", "CUDA", "Transformers", "Research"],
    features: [
      "Custom restricted self-attention mechanism implemented in PyTorch",
      "CUDA-accelerated training for large-scale experimentation",
      "Benchmarked against standard self-attention for efficiency and accuracy trade-offs",
    ],
    challenges: [
      "Reducing attention complexity while maintaining model accuracy",
      "Debugging and optimizing custom CUDA-backed training loops",
    ],
    category: "AI / Research",
    image: "/images/projects/efficient-transformer.png", // TODO: add real screenshot
    github: undefined, // TODO: add repo URL
    demo: undefined,
  },
  {
    slug: "multimodal-species-recognition",
    title: "Multimodal Species Recognition",
    description:
      "A computer vision and audio system that identifies species by combining visual and acoustic signals into a single multimodal recognition pipeline.",
    tech: ["PyTorch", "OpenCV", "Docker", "Librosa"],
    features: [
      "Multimodal pipeline combining image (OpenCV) and audio (Librosa) feature extraction",
      "PyTorch model fusing visual and acoustic signals for species classification",
      "Dockerized environment for reproducible training and inference",
    ],
    challenges: [
      "Aligning and fusing heterogeneous image and audio feature representations",
      "Packaging the multimodal pipeline into a reproducible Docker environment",
    ],
    category: "AI / Research",
    image: "/images/projects/multimodal-species-recognition.png", // TODO: add real screenshot
    github: undefined,
    demo: undefined,
  },
];

export type ExperienceItem = {
  title: string;
  org: string;
  period: string;
  points: string[];
  tech: string[];
};

export const experience: ExperienceItem[] = [
  {
    title: "Full Stack Developer",
    org: "Coding Contest Platform",
    period: "Project",
    points: [
      "Built a full-stack coding contest platform with a React frontend and a Node.js/Express REST API",
      "Implemented JWT authentication and role-based access control (RBAC) for admin and participant roles",
      "Designed MongoDB schemas for contests, submissions, and user roles",
    ],
    tech: ["React", "Node.js", "Express", "MongoDB", "JWT", "RBAC"],
  },
  {
    title: "AI Research Projects",
    org: "Efficient Transformer & Multimodal Species Recognition",
    period: "Research",
    points: [
      "Developed a restricted self-attention transformer variant in PyTorch to improve computational efficiency",
      "Built a multimodal species recognition pipeline combining computer vision (OpenCV) and audio (Librosa) processing",
      "Containerized research pipelines with Docker for reproducible experimentation",
    ],
    tech: ["PyTorch", "CUDA", "OpenCV", "Librosa", "Docker"],
  },
];

export type Achievement = {
  emoji: string;
  title: string;
  detail: string;
};

export const achievements: Achievement[] = [
  {
    emoji: "🏆",
    title: "IIT Madras Technical Symposium — 3rd Prize",
    detail: "Placed 3rd at a national-level technical symposium hosted by IIT Madras.",
  },
  {
    emoji: "🥈",
    title: "National Paper Presentation — 2nd Prize",
    detail: "Awarded 2nd prize for a research paper presented at a national-level event.",
  },
  {
    emoji: "🎤",
    title: "5+ Technical Symposium Presentations",
    detail: "Presented technical work at 5+ symposiums across academic institutions.",
  },
  {
    emoji: "🌍",
    title: "Open Source Contributor",
    detail: "Active contributor to open source projects and repositories.",
  },
];

export type Certification = {
  title: string;
  issuer: string;
};

export const certifications: Certification[] = [
  { title: "Cloud Computing", issuer: "NPTEL" },
  { title: "Artificial Intelligence", issuer: "IBM" },
  { title: "UI/UX Design", issuer: "Great Learning" },
];

export const education = {
  degree: "B.Tech, Artificial Intelligence & Data Science",
  institution: "", // TODO: add college/university name
  cgpa: "8.5",
  duration: "2022 – 2026",
};
