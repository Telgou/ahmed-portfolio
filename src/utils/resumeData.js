import React from "react";
import {
  Facebook,
  Instagram,
  LinkedIn,
  GitHub,
  WebOutlined,
  Language,
  Memory,
  Nfc,
  Pool,
  Computer,
  FitnessCenter,
  Fireplace,
  MobileOffOutlined,
  MobileFriendlyTwoTone,
  AndroidOutlined,
  Web,
  OpenInBrowserSharp
} from "@material-ui/icons";

// eslint-disable-next-line
export default {
  interests: [
    { title: "PC tinkering", icon: Computer },
    { title: "Swimming", icon: Pool },
    { title: "Camping", icon: Fireplace },
    { title: "Weightlifting", icon: FitnessCenter },
  ],


  name: "Gamgami Ahmed",
  title: "Full Stack Developer",
  email: "gamgamiahmed@proton.me",
  address: "Tunis, Tunisia",

  socials: {
    Facebook: {
      link: "https://www.facebook.com/ahmedgamgami",
      text: "/ahmedgamgami",
      icon: Facebook,
    },
    LinkedIn: {
      link: "https://linkedin.com/in/gamgamiahmed",
      text: "/gamgami-ahmed",
      icon: LinkedIn,
    },
    GitHub: {
      link: "https://github.com/Telgou",
      text: "/Telgou",
      icon: GitHub,
    },
  },

  about_me:
    "Hello Visitor 🙂 !" +
    "\n\n" +
    "I am Gamgami Ahmed, a passionate Tunisian Junior Software Engineer." +
    " I am experienced in Next.js and the Node.js ecosystem (Express, NestJS)." +
    "\n\n" +
    "My passion with IT and Computers started since i was 6 years old when i first got my first computer and I started tinkering with it. At age 14, I Started working with simple HTML and CSS websites and gathering more technical skills through time. I have completed my National Engineering Diploma in Computer Science with Highest Honors." +
    "\n\n" +
    "You are very welcome in my personal portfolio website. Please feel free to take a look at the apps and samples i worked on and also browse my git-hub profile. In order to contact me you just hit me up on one of my social media accounts.",

  experiences: [
    {
      title: "Smart Grid Meters Platform Development",
      company: "Telnet Group",
      link:"https://groupe-telnet.com/en/",
      location: "Tunis, Tunisia",
      description:
        "• Designed and developed an interactive platform with a geographic map visualizing the location of smart meters using their GPS coordinates and dynamic charts to monitor meter readings." +
        "\n \n" +
        "• Optimized API response times by implementing caching with Redis, reducing request latency from 220ms to under 130ms." +
        "\n \n" +
        "• Deployed and orchestrated the full application in Azure Container Apps.",
      date: "2025, ",
    },
    {
      title: "Web Portlet Development",
      company: " At eXo Platform",
      location: "Tunis, Tunisia",
      link: "https://www.exoplatform.com/",
      description:
        "• Developed and maintained the Agenda portlet, including the implementation and optimization of features for efficient event and notification management within the eXo Platform environment." +
        "\n \n" +
        "• Modified Groovy templates for dynamic email notifications, using Groovy TemplateEngine to render customized content.",
      date: "2024, Internship",
    },
  ],

  educations: [
    {
      title: "National Engineering Diploma in Computer Science (Highest Honors)",
      institution: "Private Higher School of Engineering and Technology - Esprit",
      location: "Tunis, Tunisia",
      description:
        "• Completed National Engineering Diploma in Computer Science with Highest Honors.",
      date: "2021 - 2025",
    },
    {
      title: "Preparatory Cycle for Engineering Studies",
      institution: "Preparatory Institute for Engineering Studies of Nabeul - IPEIN",
      location: "Nabeul, Tunisia",
      description:
        "• Completed preparatory cycle for engineering studies.",
    },
  ],

  services: [
    {
      title: "Web Development",
      description: "I have been working as a web developer for more than 1 year.",
      icon: Language,
    },
    {
      title: "Mobile Development",
      description: "I have been learning mobile development using Expo and React Native. I published my first play store app.",
      icon: AndroidOutlined ,
    },
  ],

  skills: [
    {
      title: "FRONT-END",
      description: [
        "JavaScript",
        "TypeScript",
        "React",
        "Next.js",
      ],
    },
    {
      title: "BACK-END",
      description: ["Node.js", "Express", "NestJS"],
    },
    {
      title: "DATABASES",
      description: ["MongoDB", "MySQL"],
    },
    {
      title: "DevOps & Cloud",
      description: ["Docker", "Git"],
    },
    {
      title: "COLLABORATION TOOLS",
      description: ["Jira", "Miro"],
    },
    {
      title: "DEVELOPMENT TOOLS",
      description: ["VS Code", "Postman"],
    },
  ],

  languages: [
    {
      title: "Tunisian Arabic",
      description: [
        "Native"
      ],
    },
    {
      title: "English",
      description: [
        "Advanced"
      ],
    },
    {
      title: "French",
      description: [
        "intermediate"
      ],
    },
    {
      title: "German",
      description: [
        "Notions - Beginner"
      ],
    },
  ],

  projects: [
    //#region React JS Projects

    //#region Project Portfolio App
    {
      tag: "React",
      image:
        "https://i.imgur.com/PvHR887.png",
      title: "Portfolio",
      caption: "My Personal Portfolio",
      description:
        "This is my personal portfolio where my CV and all my projcts are shared",
      links: [
        {
          link: "https://github.com/Telgou/ahmed-portfolio-master",
          icon: GitHub ,
        },
        {
          link: "https://ahmed-portfolio-master.vercel.app/",
          icon: Language,
        },
      ],
    },
    //#endregion
    //#endregion

    //#region Nextjs Projects
    //#region Forum Development
    {
      tag: "NextJS",
      image: "https://i.imgur.com/sGhhGn9.png",
      title: "Forum Development",
      caption: "Forum Development",
      description:
        "Designed a forum with a decoupled architecture using object storage services (Cloudflare R2) for media storage, a Linux VPS for the Backend API, and Vercel for the Frontend application. Reduced API response time by 30% by implementing Memcached for JSON response caching. Achieved a Google Lighthouse score of 90 in performance and accessibility. Implemented security measures through Cloudflare: rate limiting and Web Application Firewall (WAF) rules to mitigate potential abuse and ensure availability.",
      links: [
        {
          link: "",
          icon: GitHub ,
        },
        {
          link: "",
          icon: Language,
        },
      ],
    },
    //#endregion

    //#region Application de gestion des patients de la clinique
    {
      tag: "NextJS",
      image: "https://i.imgur.com/qppM9Kk.png",
      title: "Clinic patients management App",
      caption: "patients management App",
      description: "",
      links: [
        {
          link: "https://github.com/Telgou/clinic-app",
          icon: GitHub ,
        },
        {
          link: "",
          icon: Language,
        },
      ],
    },
    //#endregion

    //#region Dashboard Project
    {
      tag: "NextJS NestJS",
      image: "smartgridmeterdashboard.JPG",
      title: "Smart Grid Meters Platform Development",
      caption: "Smart Grid Dashboard",
      description:
        "• Designed and developed an interactive platform with a geographic map visualizing smart meter locations using GPS.\n" +
        "• Built dynamic real-time charts for monitoring meter readings.\n" +
        "• Implemented Redis caching, reducing API latency from 220ms to under 130ms.\n" +
        "• Deployed and orchestrated the full application in Azure Container Apps.",
      links: [
        { link: "", icon: null },
        { link: "", icon: null },
      ],
    },
    //#endregion

    //#region React Native Projects
    //#region Tawssila
    {
      tag: "React Native(Expo)",
      image: "tawssila.JPG",
      title: "Carpooling Mobile Application: Tawssila",
      caption: "Tawssila",
      description:
        "Designed and developed a carpooling mobile application using Expo and React Native, providing a platform for 650+ users to offer and join rides. Used Firebase Firestore to store ride proposals, with security rules and authentication to protect data access. Implemented cloud functions to listen for new ride postings and automatically notify subscribed users via FCM. Built a real-time messaging system between drivers and passengers using Firebase Realtime Database.",
      links: [
        {
          link: "https://play.google.com/store/apps/details?id=com.telgou.Tawssila",
          icon: AndroidOutlined ,
        },
        {
          link: "https://tawssila.vercel.app/",
          icon: Language,
        },
      ],
    },
    //#endregion
    //#endregion

    //#region MERN Stack Projects

    //#region Unisolicalize App
    {
      tag: "MERN Stack",
      image:
        "https://i.imgur.com/IuqKLfq.png",
      title: "Unisocialize",
      caption: "Unisocialize",
      description:
        "Designed and developed a social media website dedicated to university professors. This project aimed to create an interactive platform for professors to share resources exclusively among themselves.",
      links: [
        {
          link: "https://github.com/Telgou/Frontend--PI-Project-2024-Cipher",
          icon: GitHub ,
        },
        {
          link: "https://frontend-pi-project-2024-cipher.vercel.app/",
          icon: Language,
        },
      ],
    },
    //#endregion

    //#endregion


    //#region Spring-Angular Stack Projects
    //#region Dorm App
    {
      tag: "Spring-Angular Stack",
      image:
        "https://i.imgur.com/3oqzn8K.png",
      title: "Dorm project",
      caption: "Dorm project",
      description:
        "Development of a university dormitory management application focused on optimizing accommodation bookings and creating a matchmaking service based on an algorithm.",
      links: [
        {
          link: "https://github.com/Telgou/GestionFoyer-Frontend-main",
          icon: GitHub ,
        },
        {
          link: "https://gestion-foyer-frontend-main.vercel.app/sign-in",
          icon: Language,
        },
      ],
    },
    //#endregion
    //#endregion


    //#region DEVOPS Projects
    //#region Project DEVOPS
    {
      tag: "DEVOPS",
      image:
        "https://i.imgur.com/WAt5MuR.png",
      title: "Devops Pipeline for the dorm project",
      caption: "Devops Pipeline for the dorm project",
      description:
        "Developed a robust automated CI/CD pipeline for the application deployment. Utilized of a range of tools for managing the development process, quality control through unit testing, performance monitoring, container management, and continuous deployment.",
      links: [
        {
          link: "https://github.com/Telgou/devops-dormproject",
          icon: GitHub ,
        },
        {
          link: "",
          icon: Language,
        },
      ],
    },
    //#endregion
    //#endregion


    //#region Microservices Projects
    //#region Hotel App
    {
      tag: "Microservices",
      image:
        "https://i.imgur.com/SvPN2BO.png",
      title: "Hotel Ghazela Heaven Project",
      caption: "Hotel Ghazela Heaven Project",
      description:
        " Developed a platform for managing hotel services, aiming to implement a microservices architecture. This approach aims to decompose the application into independent components.",
      links: [
        {
          link: "https://github.com/Telgou/MicroServices",
          icon: GitHub ,
        },
        {
          link: "",
          icon: Language,
        },
      ],
    },
    //#endregion
    //#endregion

  ],
};
