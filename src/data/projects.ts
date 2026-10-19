export interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  video?: string;
  type?: "video";
  technologies: string[];
  category: string;
  /** Case-study route or live site. Omit when there is nothing to open. */
  liveUrl?: string;
  /** Public repository. Omit for client work or private repos. */
  githubUrl?: string;
  date: string;
  featured: boolean;
}

// Newest first: the /work page renders in this order and the first card is preloaded
export const projects: Project[] = [
  {
    id: 12,
    title: "Boundary Insights",
    description: "An IPL analytics platform: ball-by-ball match data modelled in PostgreSQL, served by a documented REST API and visualised in a Next.js dashboard.",
    image: "/projects/Boundary.avif",
    technologies: ["Next.js", "TypeScript", "Node.js", "Express", "PostgreSQL", "Prisma"],
    category: "Web Application",
    liveUrl: "https://github.com/Hitesh-o7/boundary",
    githubUrl: "https://github.com/Hitesh-o7/boundary",
    date: "2026-01-21",
    featured: true,
  },
  {
    id: 11,
    title: "MeFlow",
    description: "A life-management dashboard for expenses, todos, a Kanban project board and a games and movies watchlist, with Supabase auth and storage.",
    image: "/projects/MeFlow.avif",
    technologies: ["Next.js", "TypeScript", "Supabase", "Tailwind CSS", "Zod"],
    category: "Web Application",
    liveUrl: "https://me-flow.vercel.app",
    githubUrl: "https://github.com/Hitesh-o7/MeFlow",
    date: "2026-01-06",
    featured: true,
  },
  {
    id: 10,
    title: "Perfume Store",
    description: "An e-commerce storefront where perfumers showcase their collections and sell directly to merchants.",
    image: "/Work/PerfumeStore.avif",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "UI/UX Design"],
    category: "Website",
    liveUrl: "/work/perfume",
    date: "2025-08-05",
    featured: true,
  },
  {
    id: 9,
    title: "SoulScan",
    description: "A SaaS platform that automates LinkedIn messaging and outreach workflows.",
    image: "/Work/Soulscan.avif",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Node.js", "UI/UX Design"],
    category: "Web Application",
    liveUrl: "/work/soulscan",
    date: "2025-06-10",
    featured: true,
  },
  {
    id: 7,
    title: "Crimson Oath",
    description: "A 2D souls-like action game: choose the Samurai or Sage path and fight through a cursed realm. Playable in the browser.",
    image: "/Games/MainPage.avif",
    technologies: ["Unity", "Blender", "Photoshop"],
    category: "Game",
    liveUrl: "/games/crimson-oath",
    date: "2025-04-10",
    featured: true,
  },
  {
    id: 0,
    title: "Heartivity",
    description: "A mental well-being site where people can find support, resources and a community that listens.",
    image: "/Heart.avif",
    technologies: ["React", "Next.js", "TypeScript", "UI/UX Design", "Graphic Design"],
    category: "Website",
    liveUrl: "/work/heart",
    date: "2025-01-15",
    featured: true,
  },
  {
    id: 1,
    title: "SunSoft",
    description: "A coding-education platform with free online courses and a collaborative code editor.",
    image: "/Work/Sunsoft_Main.avif",
    technologies: ["React", "Node.js", "Tailwind CSS", "Framer Motion", "UI/UX Design", "Graphic Design"],
    category: "Web Application",
    liveUrl: "/work/sunsoft",
    date: "2024-12-20",
    featured: true,
  },
  {
    id: 2,
    title: "Page Transitions",
    description: "A motion study in animated page transitions, choreographing how one route hands off to the next.",
    image: "/powell.avif",
    video: "/Project1.webm",
    type: "video",
    technologies: ["React", "Node.js", "Tailwind CSS", "Framer Motion"],
    category: "Web Application",
    date: "2024-12-20",
    featured: false,
  },
  {
    id: 8,
    title: "CVE",
    description: "A cybersecurity awareness site with a searchable view of publicly known vulnerabilities (CVEs) and practical advice on protecting your data.",
    image: "/projects/CVE.avif",
    video: "/projects/CVE.webm",
    type: "video",
    technologies: ["Next.js", "React", "Sass", "Tailwind CSS", "Framer Motion"],
    category: "Web Application",
    liveUrl: "https://cve-hazel.vercel.app/",
    githubUrl: "https://github.com/Hitesh-o7/CVE",
    date: "2024-11-22",
    featured: true,
  },
  {
    id: 5,
    title: "JobSeek",
    description: "A full-stack job portal: recruiters register companies and post jobs, candidates apply, with JWT auth and résumé uploads.",
    image: "/projects/JobSeek.avif",
    technologies: ["React", "Node.js", "Express", "MongoDB", "Redux Toolkit", "Tailwind CSS"],
    category: "Web Application",
    liveUrl: "https://github.com/Hitesh-o7/JobSeek",
    githubUrl: "https://github.com/Hitesh-o7/JobSeek",
    date: "2024-11-19",
    featured: false,
  },
  {
    id: 6,
    title: "Readers",
    description: "Readers parses YAML, JSON, CSV and XML files into a clean, readable view.",
    image: "/projects/Readers.avif",
    technologies: ["Next.js", "React", "Sass", "Tailwind CSS", "Framer Motion"],
    category: "Web Application",
    liveUrl: "https://readers-seven.vercel.app/",
    date: "2024-11-13",
    featured: false,
  },
  {
    id: 4,
    title: "Immigration",
    description: "A website for a Canadian immigration consultancy, guiding individuals and families towards a new life with services and consultations.",
    image: "/Work/imi.avif",
    technologies: ["React", "Tailwind CSS", "Framer Motion", "UI/UX Design", "Graphic Design"],
    category: "Website",
    liveUrl: "/work/immigration",
    date: "2024-03-12",
    featured: true,
  },
  {
    id: 3,
    title: "Funo",
    description: "An anonymous emotional-support platform that connects people with trained listeners, anytime.",
    image: "/Work/funo.avif",
    technologies: ["Next.js", "Tailwind CSS", "Framer Motion", "MongoDB", "Node.js", "UI/UX Design", "Graphic Design"],
    category: "Website",
    liveUrl: "/work/funo",
    date: "2023-07-05",
    featured: false,
  },
];

export const categories = ["All", ...Array.from(new Set(projects.map((p) => p.category)))];

// Frameworks/languages only - design skills like "UI/UX Design" are left out of the filter chips
const filterableTechnologies = ["React", "Next.js", "TypeScript", "Node.js", "PostgreSQL", "MongoDB", "Supabase", "Tailwind CSS", "Unity"];
export const technologies = filterableTechnologies.filter((tech) => projects.some((p) => p.technologies.includes(tech)));
