import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
  
} from "../assets";
import rox from "../assets/rox.png";
import nova from "../assets/nova.png";
import angular from '../assets/tech/angular.png'
import spring from '../assets/tech/spring.png'
import chat from '../assets/chat.webp'
import user from '../assets/user.png'
import manager from '../assets/manger.png'
import larvel from '../assets/larvel.png'
import inter from '../assets/inter.png'
import pm from '../assets/pro.png'
import anwar from '../assets/anwar.jpeg'
import fawad from '../assets/fawad.jpeg'
import ecoom from '../assets/ecom.png'


export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Experience",
  },
  
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Ai Enthuasiast",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Angular",
    icon: angular,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Spring Boot",
    icon: spring,
  },
  {
    name: "Laravel",
    icon: larvel,
  },
  {
    name: "git",
    icon: git,
  },
];

const experiences = [
  {
    title: "Web Develpor",
    company_name: "Rox travels",
    icon: rox,
    iconBg: "#383E56",
    date: "March 2024 - Present",
    points: [
      "Developing and maintaining travel-related web platforms tailored to client and user needs at Rox Travels.",
      "Collaborating with designers, project managers, and backend developers to deliver seamless booking and travel management experiences.",
      "Implementing responsive, user-friendly interfaces optimized for performance and cross-browser compatibility."
     
    ],
  },
  {
    title: "Backend Develpor",
    company_name: "Nova travels",
    icon: nova,
    iconBg: "#E6DEDD",
    date: "Nov 2024 - Present",
    points: [
      "Designing, developing, and maintaining backend services and APIs to support application functionality and performance.",
  "Collaborating with cross-functional teams including frontend developers, product managers, and QA engineers to deliver robust backend solutions.",
  "Managing databases, optimizing queries, and ensuring data integrity and security."
    ],
  },
  // {
  //   title: "Web Developer",
  //   company_name: "Shopify",
  //   icon: shopify,
  //   iconBg: "#383E56",
  //   date: "Jan 2022 - Jan 2023",
  //   points: [
  //     "Developing and maintaining web applications using React.js and other related technologies.",
  //     "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
  //     "Implementing responsive design and ensuring cross-browser compatibility.",
  //     "Participating in code reviews and providing constructive feedback to other developers.",
  //   ],
  // },
  // {
  //   title: "Full stack Developer",
  //   company_name: "Meta",
  //   icon: meta,
  //   iconBg: "#E6DEDD",
  //   date: "Jan 2023 - Present",
  //   points: [
  //     "Developing and maintaining web applications using React.js and other related technologies.",
  //     "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
  //     "Implementing responsive design and ensuring cross-browser compatibility.",
  //     "Participating in code reviews and providing constructive feedback to other developers.",
  //   ],
  // },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Umar proved me wrong.",
    name: "Fawad Khan",
    designation: "CEO",
    company: "Rox Travels",
    image: fawad,
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Umar does.",
    name: "Anwar Khan",
    designation: "CEO",
    company: "Nova Travels",
    image: anwar,
  },
  
];

const projects = [
  {
    name: "Real-time Chat Application",
    description:
      "Web-based platform that enables users to communicate instantly through real-time messaging, supporting group chats, media sharing, and seamless conversation.",
    tags: [
      {
        name: "Angular",
        color: "blue-text-gradient",
      },
      {
        name: "My SQL",
        color: "pink-text-gradient",
      },
      {
        name: "Spring Boot",
        color: "green-text-gradient",
      },
    ],
    image: chat,
    source_code_link: "https://github.com/UmarFarooq-3/chatApp",
  },
  {
    name: "User Management System",
    description:
      "Created a secure system using React and Spring Boot with Spring Security for user authentication and authorization, implementing role-based access control.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "pink-text-gradient",
      },
      {
        name: "spring boot",
        color: "green-text-gradient",
      },
    ],
    image: user,
    source_code_link: "https://github.com/UmarFarooq-3/User-Management",
  },
  {
    name: "Contact Manager Application",
    description:
      "Worked in a team to develop a secure contact management app using Angular, Spring Boot, Spring Security, and MySQL, having role base acces control.",
    tags: [
      {
        name: "Angular",
        color: "blue-text-gradient",
      },
      {
        name: "My SQL",
        color: "pink-text-gradient",
      },
      {
        name: "Spring Boot",
        color: "green-text-gradient",
      },
    ],
    image: manager,
    source_code_link: "https://github.com/UmarFarooq-3/ContactManager",
  },
  {
    name: "AI-Powered Project Management System",
    description:
      "Developed an intelligent project management app with a microservice architecture, featuring project planning, task scheduling, real-time chat, and AI-powered task assignment based on employee skills.",
    tags: [
      {
        name: "Angular",
        color: "blue-text-gradient",
      },
      {
        name: "My SQL",
        color: "pink-text-gradient",
      },
      {
        name: "Spring Boot",
        color: "green-text-gradient",
      },
    ],
    image: pm,
    source_code_link: "https://github.com/",
  },
  {
    name: "Inter Crack",
    description:
      "An intelligent mobile application designed to convert spoken audio into concise and accurate responses, ideal for enhancing efficiency during online screening interviews by providing quick, context-aware answers. The app leverages advanced speech recognition and NLP.",
    tags: [
      {
        name: "React native",
        color: "blue-text-gradient",
      },
      {
        name: "Mongodb",
        color: "pink-text-gradient",
      },
      {
        name: "python",
        color: "green-text-gradient",
      },
    ],
    image: inter,
    source_code_link: "https://github.com/",
  },
  {
    name: "Ecommerce Store",
    description:
      "Built a modern eCommerce web app enabling users to browse, search, and purchase products seamlessly with responsive design.Integrated dynamic product management, cart functionality, search product functionality and smooth user experience.",
    tags: [
      {
        name: "React",
        color: "blue-text-gradient",
      },
      {
        name: "My SQL",
        color: "pink-text-gradient",
      },
      {
        name: "Spring Boot",
        color: "green-text-gradient",
      },
    ],
    image: ecoom,
    source_code_link: "https://github.com/",
  },
];

export { services, technologies, experiences, testimonials, projects };
