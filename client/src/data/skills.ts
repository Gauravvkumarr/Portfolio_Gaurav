import {
  SiReact,
  SiTypescript,
  SiJavascript,
  SiHtml5,
  SiCss3,
  SiTailwindcss,
  SiNextdotjs,
  SiVuedotjs,
  SiNodedotjs,
  SiExpress,
  SiPython,
  SiDjango,
  SiFlask,
  SiPhp,
  SiPostgresql,
  SiMongodb,
  SiMysql,
  SiRedis,
  SiFirebase,
  SiGit,
  SiDocker,
  SiAmazon,
  SiGraphql,
  SiWebpack,
  SiVite,
  SiPostman,
  SiKubernetes,
  SiRedux,
} from "react-icons/si";
// Add this import
import { FaJava } from "react-icons/fa";



export interface Skill {
  name: string;
  icon: any;
  color: string;
}

export interface SkillCategory {
  title: string;
  skills: Skill[];
}

export const skillsData: SkillCategory[] = [
  {
    title: "Languages & Core Technologies",
    skills: [
      { name: "Java", icon: FaJava, color: "#f89820" },
      { name: "JavaScript", icon: SiJavascript, color: "#F7DF1E" },
      { name: "Python", icon: SiPython, color: "#FFD43B" },
      { name: "HTML5", icon: SiHtml5, color: "#E34F26" },
      { name: "CSS3", icon: SiCss3, color: "#1572B6" },
      { name: "TypeScript", icon: SiTypescript, color: "#3178C6" },
    ],
  },
  {
    title: "Frameworks, Libraries & Tools",
    skills: [
      { name: "React", icon: SiReact, color: "#61DAFB" },
      { name: "Node.js", icon: SiNodedotjs, color: "#339933" },
      { name: "Express", icon: SiExpress, color: "#000000" },
      { name: "Next.js", icon: SiNextdotjs, color: "#000000" },
      { name: "Tailwind CSS", icon: SiTailwindcss, color: "#06B6D4" },
      { name: "Postman", icon: SiPostman, color: "#EF5B25" },
      { name: "Redux", icon: SiRedux, color: "#764abc" }
     

    ],
  },
  {
    title: "Database",
    skills: [
      { name: "PostgreSQL", icon: SiPostgresql, color: "#4169E1" },
      { name: "MongoDB", icon: SiMongodb, color: "#47A248" },
      { name: "MySQL", icon: SiMysql, color: "#4479A1" },
    ],
  },
  {
    title: "Build & Deployment Tools",
    skills: [
      { name: "Git", icon: SiGit, color: "#F05032" },
      { name: "Docker", icon: SiDocker, color: "#2496ED" },
      { name: "Kubernets", icon: SiKubernetes, color: "#326CE5" },
      { name: "Webpack", icon: SiWebpack, color: "#8DD6F9" },
      { name: "Vite", icon: SiVite, color: "#646CFF" },
    ],
  },
];
