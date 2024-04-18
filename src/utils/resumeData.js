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
      title: "Personal Project ",
      description:
        "• I realized an Internet anonymous forum project with a decoupled architecture utilizing object storage servicess (S3,R2,B2) for media storage, a Linux VPS for Backend PHP API endpoints and Vercel for Frontend Nextjs app. Additionally, I optimized performance by implementing Memcached for efficient caching, enhancing the responsiveness of the application. Moreover, Cloudflare services such as rate limiting and WAF rules were leveraged to mitigate potential abuse and ensure service availability. ",
      date: "06/2023 - 07/2023",
    },
  ],

  educations: [
    {
      title: "1st year software engineering ",
      description:
        "•  accomplished the first year of software engineering (common trunc) at EPI with success",
      date: "09/2022 - 06/2023",
    },
    {
      title: "Integrated Preparatory Cycle",
      description:
        "• I accomplished the second year of integrated preparatory school at EPI ",
      date: "09/2021 - 06/2022",
    },
    {
      title: "Classic Preparatory Cycle",
      description:
        "• I accomplished the first year of classic preparatory school at Nabeul Preparatory Engineering Institute with success ",
      date: "09/2020 - 06/2021",
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
        "TypeScript",
        "ReactJS",
        "NextJS",
        //"Angular",
        "Bootstrap",
        "SAAS",
        "TailWind",
      ],
    },
    {
      title: "BACK-END",
      description: ["NodeJS", "Spring Boot", "Express"/*, "PHP"*/],
    },
    {
      title: "DATABASES",
      description: [/*"Oracle",*/ "MySQL", "MongoDB"],
    },
    {
      title: "SOURCE CONTROL",
      description: ["Git", "GitHub"],
    },
    {
      title: "DevOps",
      description: ["Dockerization", "Microservices", "Jenkins", "Prometheus", "Grafana", "Node exporter", "Sonarqube", "Nexus"],
    },
    {
      title: "OPERATING SYSTEMS",
      description: ["Linux", "Windows"],
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
      title: "Forum Anonyme",
      caption: "Forum Anonyme",
      description:
        " Mise en place d'un forum anonyme avec une architecture découplée utilisant des services de stockage d'objets (S3, R2, B2) pour le stockage des médias, un VPS Linux pour les points de terminaison d'API Backend et Vercel pour l'application Frontend Next.js. Optimization des performances en mettant en œuvre Memcached pour un cache efficace, améliorant la réactivité de l'application. Utilisation des services de Cloudflare tels que la limitation de débit et les règles de pare-feu d'application Web (WAF) pour atténuer les abus potentiels et assurer la disponibilité du service.",
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
        "Conception et développement d'un site web de médias sociaux dédié aux professeurs universitaires. Ce projet visait à créer une plateforme interactive permettant aux professeurs de partager des ressources exclusivement entre eux",
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
      title: "Projet foyer",
      caption: "Projet foyer",
      description:
        "Développement d’une application de gestion de foyer universitaire axée sur l’optimisation de la réservation des logements.",
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
      title: "Devops Pipeline pour projet foyer",
      caption: "Devops Pipeline pour projet foyer",
      description:
        "Elaboration d'une pipeline CI/CD automatisée robuste pour le déploiement de l'application gestion foyer . Utilisation d'une gamme d'outils a permis une gestion du processus de développement, du contrôle qualité grâce aux tests unitaires, de la surveillance des performances, de la gestion des conteneurs, et du déploiement continu.",
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
      title: "Projet Hotel Ghazela Heaven",
      caption: "Projet Hotel Ghazela Heaven",
      description:
        "Développement d’une plateforme de gestion des services d'un hotel, ayant pour objectif la mise en place d’une architecture micro-services. Cette approche vise à décomposer l’application en composants indépendants.",
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
