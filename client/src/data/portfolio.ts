import heroBackground from "@assets/generated_images/Hero_gradient_mesh_background_493d2263.png";
import profilePhoto from "@assets/generated_images/Professional_portrait_headshot_17505326.png";
import project1 from "@assets/generated_images/AI_Driven_Medical_Insurance_Premium_Prediction.png";
import project2 from "@assets/generated_images/Artisano_bliss.png";
import project3 from "@assets/generated_images/Nesthome.png";
import project4 from "@assets/generated_images/Personal_Portfolio.png";
import project5 from "@assets/generated_images/Padhai_ai.png";

export const personalInfo = {
  name: "Gaurav Kumar",
  tagline: " Software Developer | Tech Enthusiast | DevOps Engineer",
  bio: "Passionate CSE student skilled in Java, JavaScript , and DevOps. Aiming to build scalable software solutions and gain industry experience through a challenging developer role.",
  heroBackground,
  profilePhoto,
};

export const about = {
  introduction:
    "I'm a passionate full-stack developer with a keen eye for design and a commitment to creating intuitive, scalable applications. With expertise in modern web technologies and a user-centered approach, I bring ideas to life through code.",
  education: "BTech in Computer Science & Engineering, IMS Engineering College (2026)",
  interests: [
    "Full Stack Web Development",
    "Database Design",
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
    title: "AI-Driven Medical Insurance Premium Prediction",
    description:
      "ML model for predicting insurance premiums based on health data. Integrated into a live Streamlit app with real-time predictions.",
    image: project1,
    techStack: ["Python", "PyCaret","Scilit-learn","Pandas", "NumPy", "Streamlit"],
    githubUrl: "https://github.com/Gauravvkumarr/AI-Driven-Medical-Insurance-Premium-Prediction",
    demoUrl: "https://medical-insurancegit-jfdh6hx8e6tqw4ugy595nr.streamlit.app/",
  },
  {
    id: 2,
    title: "Artisano",
    description:
      "Artisano is a sleek e-commerce web app for exploring and purchasing a variety of handcrafted scented candles.",
    image: project2,
    techStack: ["JavaScript","React.js","Express.js","MongoDB","JWT Authentication","REST API,", "Tailwind CSS", "Framer Motion.js", "Framer Motion.js"],
    githubUrl: "https://github.com",
    demoUrl: "https://demo.example.com",
  },
  {
    id: 3,
    title: "NestHome",
    description:
      "NestHome is a responsive property rental web app that helps users effortlessly browse and explore rental properties with a modern, user-friendly interface.",
    image: project3,
    techStack: ["JavaScript","React.js","Express.js","MongoDB","JWT Authentication","REST API,", "Tailwind CSS", "Framer Motion.js", "Framer Motion.js"],
    githubUrl: "https://github.com/Gauravvkumarr/NestHome",
    demoUrl: "https://demo.example.com",
  },
  {
    id: 4,
    title: "Personal Portfolio",
    description:
      "Collaborative project management tool with real-time updates, team collaboration, and analytics.",
    image: project4,
    techStack: ["React", "TailwindCSS", "Javascript"],
    githubUrl: "https://github.com",
    demoUrl: "https://demo.example.com",
  },
  {
    id: 5,
    title: "PadhAI WebSite",
    description:
      "A full-stack web platform for PadhaiAI, designed to deliver interactive learning experiences with dynamic course content, user management, and real-time performance tracking using modern web technologies.",
    image: project5,
    techStack: ["React", "Tailwind CSS", "MongoDB", "Node.js","Express.js"],
    githubUrl: "https://github.com",
    demoUrl: "https://demo.example.com",
  },
];

export const achievements = [
  {
    id: 1,
    title: "Oracle Cloud Infrastructure Generative AI Certified Professional",
    date: "ORACLE | 2024",
    description: "Professional level certification",
  },
  {
    id: 2,
    title: "Web Development with React.js",
    date: "CETPA | 2023",
    description: "Front-End Development Professional",
  },
  {
    id: 3,
    title: "Full Stack Demystified - Learn to Build End-to-End workshop ",
    date: "Wayspire | 2025",
    description: "Full Stack Development Professional",
  },
];

export const academics = [
  {
    id: 1,
    institution: "IMS Engineering College",
    degree: "Bachelor of Technology in Computer Science & Engineering",
    duration: "2022 - 2026",
    description: [
      "CGPA: 7.2",
      "Dr. A.P.J. Abdul Kalam Technical University",
    ],
  },
  {
    id: 2,
    institution: "Kendriya Vidyalaya No.2 AFS, Hindon",
    degree: "Senior Secondary | 12th",
    duration: "2020 - 2021",
    description: [
      "Percentage: 72%",
      "Central Board of Secondary Education",
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
      "June 2025 – Aug 2025",
    ],
  },
];

export const socialLinks = {
  github: "https://github.com/Gauravvkumarr",
  linkedin: "https://www.linkedin.com/in/gaurav-kumar-207239246/",
  twitter: "https://x.com/_Gaurav2k20_",
  email: "gauravsalania2k20@gmail.com",
};
