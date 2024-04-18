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
      title: "Bricolage PC",
      icon: <Computer />,
    },
    {
      title: "Natation",
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
  title: "Développeur Full Stack",
  birthday: "25th Juin 1998",
  email: "gamgamiahmed@proton.me",
  address: "Sousse, Tunisie",
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
    "Bonjour visiteur 🙂 !" +
    "\n\n" +
    "Je suis Gamgami Ahmed, un passionné Ingénieur Logiciel Junior tunisien." +
    "\n\n" +
    "Ma passion pour l'informatique a commencé à l'âge de 6 ans lorsque j'ai eu mon premier ordinateur et j'ai commencé à bricoler avec. À 14 ans, j'ai commencé à travailler avec des sites Web en HTML et CSS et j'ai acquis plus de compétences techniques au fil du temps pour avancer dans ma carrière. Actuellement, je suis étudiant en génie logiciel et spécialisé en développement web. De plus, je suis un autodidacte pour les langages de programmation." +
    "\n\n" +
    "Vous êtes les bienvenus sur mon site portfolio personnel. N'hésitez pas à jeter un œil aux applications et échantillons sur lesquels j'ai travaillé, ainsi qu'à parcourir mon profil GitHub. Pour me contacter, vous pouvez remplir le formulaire de contact juste en dessous ou me contacter sur l'un de mes comptes de médias sociaux.",

  experiences: [
    {
      title: "Projet Personnelle ",
      description:
        "• J'ai réalisé Projet de forum anonyme sur Internet avec une architecture découplée utilisant des services de stockage d'objets (S3, R2, B2) pour le stockage des médias, un VPS Linux pour les points de terminaison d'API Backend PHP et Vercel pour l'application Frontend Next.js. De plus, j'ai optimisé les performances en mettant en œuvre Memcached pour un cache efficace, améliorant la réactivité de l'application. Par ailleurs, j'ai utilisé les services de Cloudflare tels que la limitation de débit et les règles de pare-feu d'application Web (WAF) pour atténuer les abus potentiels et assurer la disponibilité du service.",
      date: "06/2023 - 07/2023",
    },
  ],

  educations: [
    {
      title: "1ère année de génie logiciel ",
      description:
        "• Réussite de la première année de génie logiciel (tronc commun) à l'EPI.",
      date: "09/2022 - 06/2023",
    },
    {
      title: "Cycle Préparatoire Intégré",
      description:
        "• Réussite de la deuxième année du cycle préparatoire intégré à l'EPI ",
      date: "09/2021 - 06/2022",
    },
    {
      title: "Cycle Préparatoire Classique",
      description:
        "• Réussite de la première année du cycle préparatoire classique à l'Institut Préparatoire d'Ingénierie de Nabeul avec succès",
      date: "09/2020 - 06/2021",
    },
    /*{
      title: "Baccalauréat",
      description:
        "• Baccalauréat en sciences expérimentales du lycée pilote de Kairouan.",
      date: "2020",
    },*/
  ],

  services: [
    {
      title: "Développement Web",
      description: "Il y a plus q'un an que je travaille dans le développement web.",
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
      title: "BASES DE DONNÉES",
      description: [/*"Oracle",*/ "MySQL", "MongoDB"],
    },
    {
      title: "GESTION DE VERSION",
      description: ["Git", "GitHub"],
    },
    {
      title: "DevOps",
      description: ["Dockerization", "Microservices", "Jenkins", "Prometheus", "Grafana", "Node exporter", "Sonarqube", "Nexus"],
    },
    {
      title: "OS",
      description: ["Linux", "Windows"],
    },
  ],

  languages: [
    {
      title: "Arabe Tunisien",
      description: [
        "Langue maternelle"
      ],
    },
    {
      title: "Anglais",
      description: [
        "Avancé"
      ],
    },
    {
      title: "Français",
      description: [
        "Intermédiaire"
      ],
    },
    {
      title: "Allemand",
      description: [
        "Notions - Débutant"
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
      caption: "Mon portfolio personnel",
      description:
        "Il s'agit de mon portfolio personnel où mon CV et tous mes projets sont partagés.",
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
      title: "Application de gestion des patients de la clinique",
      caption: "Application de gestion des patients",
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


    //#region MERN Stack Projects
    //#region Unisocialize App
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
        "https://i.imgur.com/O1CrjsY.png",
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