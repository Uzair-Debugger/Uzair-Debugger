export const skills = [
  { name: "Javascript", icon: "/skills/icon-javascript.svg" },
  { name: "Typescript", icon: "/skills/icon-typescript.svg" },
  { name: "React", icon: "/skills/icon-react.svg" },
  { name: "Node.js", icon: "/skills/icon-nodejs.svg" },
  { name: "Express.js", icon: "/skills/icon-express.png" },
  { name: "FastAPI", icon: "/skills/icon-fastapi.svg" },
  { name: "PostgreSQL", icon: "/skills/icon-postgresql.svg" },
  { name: "MySQL", icon: "/skills/icon-mysql.svg" },
  { name: "MongoDB", icon: "/skills/icon-mongodb.svg" },
  { name: "Git", icon: "/skills/icon-git.svg" },
  { name: "Tailwindcss", icon: "/skills/icon-tailwindcss.svg" },
];

export const projects = [
  {
    id: "youtube-shorts-converter",
    title: "YouTube Shorts Converter",
    description:
      "Converts long videos into engaging short-form content using AI-powered transcription and highlight detection.",
    features: [
      "Video transcription using OpenAI Whisper (large-v3)",
      "AI-based best moment detection using Llama 3.1",
      "Video processing with FFmpeg (download, audio extraction, compression, vertical scaling)",
      "Automated shorts generation workflow",
    ],
    techStack: [
      "Next.js",
      "Express.js",
      "OpenAI Whisper API",
      "Llama-3.1-8B-Instant API",
      "FFmpeg",
    ],
    image: "/projects/youtube_shorts_converter.png",
    category: "AI / Video Processing",
    status: "Completed",
    githubLink: "https://github.com/Uzair-Debugger/Youtube_Shorts_Converter",
    liveLink: "",
  },

  {
    id: "fullstack-ecommerce",
    title: "Full Stack Ecommerce Application",
    description:
      "A complete ecommerce platform with authentication, product management, and order tracking.",
    features: [
      "JWT-based authentication & authorization",
      "REST API built with Flask",
      "MySQL database with SQLAlchemy ORM",
      "Real-time product management",
      "Category-based filtering",
      "Order lifecycle tracking",
      "Admin sales dashboard",
    ],
    techStack: [
      "React.js",
      "Flask",
      "MySQL",
      "SQLAlchemy",
      "JWT Auth",
    ],
    image: "/projects/ecommerce.png",
    category: "Full Stack",
    status: "Completed",
    githubLink: "https://github.com/Uzair-Debugger/Ecommerce-Website",
    liveLink: "https://ecommerce-frontend-chi-ten-25.vercel.app",
  },

  {
  id: "medocbills-healthcare",
  title: "MedocBills Healthcare Website",
  description:
    "A production-ready healthcare revenue cycle management (RCM) and medical billing website for MedocBills, featuring service pages, client-focused workflows, careers, and lead capture forms.",
  features: [
    "Responsive multi-page SPA (Home, Services, About, Contact, Career, Clients)",
    "SEO-ready pages with meta tags, canonical URLs, Open Graph, and JSON-LD schema",
    "Interactive UI with sliders, animated sections, testimonials, and counters",
    "Career listing page with searchable job cards",
    "Contact and callback forms with client-side validation",
    "Vercel-ready deployment with SPA route rewrites",
  ],
  techStack: [
    "React.js",
    "TypeScript",
    "Vite",
    "Tailwind CSS",
    "Framer Motion",
    "React Router DOM",
    "React Helmet Async",
  ],
  image: "/projects/medocbills.png",
  category: "Frontend",
  status: "Completed",
  githubLink: "https://github.com/Uzair-Debugger/MedocBills-Healthcare--main",
  liveLink: "https://www.medocbills.com",
},
];



export const Links = [
  {name: "Github", icon:"/skills/icon-github.svg", link:"/"},
  {name: "Linkdin", icon:"/skills/icon-linkedin.svg", link:"/"}
]
