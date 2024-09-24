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
  Fireplace
} from "@material-ui/icons";

// eslint-disable-next-line
export default {
  interests: [
    {
      title: "PC tinkering",
      icon: <Computer />,
    },
    {
      title: "Swimming",
      icon: <Pool />,
    },
    {
      title: "Camping",
      icon: <Fireplace />,
    },
    {
      title: "Weightlifting",
      icon: <FitnessCenter />,
    },
  ],


  name: "Gamgami Ahmed",
  title: "Full Stack Developer",
  birthday: "25th June 1998",
  email: "gamgamiahmed@proton.me",
  address: "Sousse, Tunisia",
  phone: "+216 95 651 447",

  socials: {
    Facebook: {
      link: "https://www.facebook.com/ahmedgamgami",
      text: "/ahmedgamgami",
      icon: <Facebook />,
    },
    LinkedIn: {
      link: "https://linkedin.com/in/gamgamiahmed",
      text: "/gamgami-ahmed",
      icon: <LinkedIn />,
    },
    GitHub: {
      link: "https://github.com/Telgou",
      text: "/Telgou",
      icon: <GitHub />,
    },
    Telegram: {
      link: "#",
    },
  },

  about_me:
    "Hello Visitor 🙂 !" +
    "\n\n" +
    "I am Gamgami Ahmed a passionate Tunisian Junior Software Engineer." +
    "\n\n" +
    "My passion with IT and Computers started since i was 6 years old when i first got my first computer and I started tinkering with it. At age 14, I Started working with sample HTML and CSS websites and gathering more technical skills through time in order to advance in my career. Now as my academic cursus I am doing software engineering and specialized in web developement. Add to that I am a solo learner for programming languages." +
    "\n\n" +
    "You are very welcome in my personal portfolio website. Please feel free to take a look at the apps and samples i worked on and also browse my git-hub profile. In order to contact me you are welcomed to fill in the contact form right below or just hit me up on one of my social media accounts.",

  experiences: [
    {
      title: "Summer Internship at eXo Platform",
      description:
        "• Development and maintenance of the Agenda portlet, including the implementation and optimization of features for efficient event and notification management within the eXo Platform environment",
      date: "07/2024 - 09/2024",
    },
    {
      title: "Personal Project ",
      description:
        "• I realized an Internet anonymous forum project with a decoupled architecture utilizing object storage servicess (S3,R2,B2) for media storage, a Linux VPS for Backend PHP API endpoints and Vercel for Frontend Nextjs app. Additionally, I optimized performance by implementing Memcached for efficient caching, enhancing the responsiveness of the application. Moreover, Cloudflare services such as rate limiting and WAF rules were leveraged to mitigate potential abuse and ensure service availability. ",
      date: "06/2023 - 07/2023",
    },
  ],

  educations: [
    {
      title: "2nd and 3rd year of Engineering",
      description:
        "• Successfully completed the second year of Engineering at ESPRIT.",
      date: "09/2023 - present",
    },
    {
      title: "Integrated Preparatory Cycle and 1st year of Software Engineering",
      description:
        "• Successfully completed the second year of the integrated preparatory cycle and the first year of Software Engineering (core curriculum) at EPI",
      date: "09/2021 - 06/2023",
    },    
    {
      title: "Classic Preparatory Cycle",
      description:
        "• I accomplished the first year of classic preparatory school at Nabeul Preparatory Engineering Institute with success ",
    //  date: "09/2020 - 06/2021",
    },
    /*{
      title: "National High School Diploma",
      description:
        "• National High School Diploma Baccalauréat in Experimental Sciences from Kairouan Pioneer high school.",
      date: "2020",
    },*/
  ],

  services: [
    {
      title: "Web Development",
      description: "I have been working on web developement for 1 year.",
      icon: <WebOutlined />,
    },
  ],

  skills: [
    {
      title: "FRONT-END",
      description: [
        "JavaScript",
        //"TypeScript",
        "ReactJS",
        "NextJS",
        //"Angular",
        //"Bootstrap",
        //"SAAS",
        //"TailWind",
      ],
    },
    {
      title: "BACK-END",
      description: ["NodeJS"/*, "Spring"*/, "Express"/*, "PHP"*/],
    },
    {
      title: "DATABASES",
      description: [/*"Oracle",*/ "MySQL", "MongoDB"],
    },
    {
      title: "SOURCE CONTROL",
      description: ["Git"/*, "GitHub"*/],
    },
    {
      title: "DevOps & Cloud",
      description: ["Dockerization",/* "Microservices", "Jenkins", "Prometheus", "Grafana", "Node exporter", "Sonarqube", "Nexus"*/],
    },
    {
      title: "OPERATING SYSTEMS",
      description: [/*"Linux",*/ "Windows"],
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
      tag: "React JS",
      image:
        "https://i.imgur.com/PvHR887.png",
      title: "Portfolio",
      caption: "My Personal Portfolio",
      description:
        "This is my personal portfolio where my CV and all my projcts are shared",
      links: [
        {
          link: "https://github.com/Telgou/ahmed-portfolio-master",
          icon: <GitHub />,
        },
        {
          link: "https://ahmed-portfolio-master.vercel.app/",
          icon: <Language />,
        },
      ],
    },
    //#endregion
    //#endregion

    //#region Nextjs Projects
    //#region HCHAN
    {
      tag: "Next js",
      image: "https://i.imgur.com/sGhhGn9.png",
      title: "Anonymous Forum",
      caption: "Anonymous Forum",
      description:
        "I realized an Internet anonymous forum project with a decoupled architecture utilizing object storage servicess (S3,R2,B2) for media storage, a Linux VPS for Backend PHP API endpoints and Vercel for Frontend Nextjs app. Additionally, I optimized performance by implementing Memcached for efficient caching, enhancing the responsiveness of the application. Moreover, Cloudflare services such as rate limiting and WAF rules were leveraged to mitigate potential abuse and ensure service availability.",
      links: [
        {
          link: "",
          icon: <GitHub />,
        },
        {
          link: "",
          icon: <Language />,
        },
      ],
    },
    //#endregion

    //#region Application de gestion des patients de la clinique
    {
      tag: "Next js",
      image: "https://i.imgur.com/qppM9Kk.png",
      title: "Clinic patients management App",
      caption: "patients management App",
      description: "",
      links: [
        {
          link: "https://github.com/Telgou/clinic-app",
          icon: <GitHub />,
        },
        {
          link: "",
          icon: <Language />,
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
          icon: <GitHub />,
        },
        {
          link: "https://frontend-pi-project-2024-cipher.vercel.app/",
          icon: <Language />,
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
          icon: <GitHub />,
        },
        {
          link: "https://gestion-foyer-frontend-main.vercel.app/sign-in",
          icon: <Language />,
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
          icon: <GitHub />,
        },
        {
          link: "",
          icon: <Language />,
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
          icon: <GitHub />,
        },
        {
          link: "",
          icon: <Language />,
        },
      ],
    },
    //#endregion
    //#endregion

  ],
};
