import heroBackground from "@assets/generated_images/Hero_gradient_mesh_background_493d2263.png";
import profilePhoto from "@assets/generated_images/Professional_portrait_headshot_17505326.png";
import project1 from "@assets/generated_images/Analytics_dashboard_project_9f6f84e5.png";
import project2 from "@assets/generated_images/E-commerce_platform_project_69d6b942.png";
import project3 from "@assets/generated_images/Mobile_app_project_eb999fed.png";
import project4 from "@assets/generated_images/Web_application_project_cc7ab969.png";

export const personalInfo = {
  name: "Alex Rivera",
  tagline: "Full-Stack Developer & UI/UX Enthusiast",
  bio: "Crafting elegant digital experiences through clean code and thoughtful design",
  heroBackground,
  profilePhoto,
};

export const about = {
  introduction:
    "I'm a passionate full-stack developer with a keen eye for design and a commitment to creating intuitive, scalable applications. With expertise in modern web technologies and a user-centered approach, I bring ideas to life through code.",
  education: "B.S. in Computer Science, Stanford University (2019)",
  interests: [
    "Web Development",
    "UI/UX Design",
    "Open Source",
    "Tech Innovation",
  ],
};

export const skills = [
  "React",
  "TypeScript",
  "Node.js",
  "Python",
  "PostgreSQL",
  "Tailwind CSS",
  "Next.js",
  "GraphQL",
  "Docker",
  "AWS",
];

export const projects = [
  {
    id: 1,
    title: "Analytics Dashboard",
    description:
      "Real-time analytics platform with interactive data visualizations and custom reporting features.",
    image: project1,
    techStack: ["React", "TypeScript", "D3.js", "Node.js"],
    githubUrl: "https://github.com",
    demoUrl: "https://demo.example.com",
  },
  {
    id: 2,
    title: "E-Commerce Platform",
    description:
      "Full-featured online store with payment integration, inventory management, and admin dashboard.",
    image: project2,
    techStack: ["Next.js", "Stripe", "PostgreSQL", "Tailwind"],
    githubUrl: "https://github.com",
    demoUrl: "https://demo.example.com",
  },
  {
    id: 3,
    title: "Mobile Fitness App",
    description:
      "Cross-platform fitness tracking app with workout plans, progress monitoring, and social features.",
    image: project3,
    techStack: ["React Native", "Firebase", "Redux", "Express"],
    githubUrl: "https://github.com",
    demoUrl: "https://demo.example.com",
  },
  {
    id: 4,
    title: "Task Management System",
    description:
      "Collaborative project management tool with real-time updates, team collaboration, and analytics.",
    image: project4,
    techStack: ["React", "GraphQL", "MongoDB", "WebSocket"],
    githubUrl: "https://github.com",
    demoUrl: "https://demo.example.com",
  },
];

export const achievements = [
  {
    id: 1,
    title: "AWS Certified Solutions Architect",
    date: "2023",
    description: "Professional level certification",
  },
  {
    id: 2,
    title: "React Advanced Certification",
    date: "2022",
    description: "Meta Front-End Developer Professional",
  },
  {
    id: 3,
    title: "Open Source Contributor",
    date: "2021-Present",
    description: "500+ contributions to major projects",
  },
];

export const academics = [
  {
    id: 1,
    institution: "Stanford University",
    degree: "Bachelor of Science in Computer Science",
    duration: "2015 - 2019",
    description: [
      "Graduated with Honors, GPA: 3.8/4.0",
      "Relevant coursework: Data Structures, Algorithms, Web Development, Database Systems",
      "Member of Computer Science Club and Hackathon Team",
    ],
  },
  {
    id: 2,
    institution: "Lincoln High School",
    degree: "High School Diploma",
    duration: "2011 - 2015",
    description: [
      "Graduated with Distinction",
      "President of Technology Club",
      "Won regional science fair for innovative app development project",
    ],
  },
];

export const experience = [
  {
    id: 1,
    company: "PadhaiAI",
    role: "Software Development Intern",
    duration: "3 Months",
    description: [
      "Developed and integrated AI-powered educational features into the platform",
      "Collaborated with the development team to optimize user experience",
      "Implemented responsive UI components using React and TypeScript",
      "Participated in code reviews and agile development practices",
    ],
  },
];

export const socialLinks = {
  github: "https://github.com",
  linkedin: "https://linkedin.com",
  twitter: "https://twitter.com",
  email: "alex.rivera@example.com",
};
