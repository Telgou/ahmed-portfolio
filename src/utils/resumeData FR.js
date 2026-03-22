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
    {
      title: "Bricolage PC",
      icon: Computer,
    },
    {
      title: "Natation",
      icon: Pool,
    },
    {
      title: "Camping",
      icon: Fireplace,
    },
    {
      title: "Weightlifting",
      icon: FitnessCenter,
    },
  ],


  name: "Gamgami Ahmed",
  title: "Développeur Full Stack",
  email: "gamgamiahmed@proton.me",
  address: "Tunis, Tunisie",

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
    "Bonjour visiteur 🙂 !" +
    "\n\n" +
    "Je suis Gamgami Ahmed, un Ingénieur Logiciel Junior Tunisien passionné." +
    " Je suis expérimenté en Next.js et l'écosystème Node.js (Express, NestJS)." +
    "\n\n" +
    "Ma passion pour l'informatique et les ordinateurs a commencé depuis que j'avais 6 ans lorsque j'ai eu mon premier ordinateur et j'ai commencé à bricoler avec. À l'âge de 14 ans, j'ai commencé à travailler avec des sites Web simples en HTML et CSS et j'ai acquis plus de compétences techniques au fil du temps. J'ai terminé mon Diplôme National d'Ingénieur en Informatique avec Mention Excellent." +
    "\n\n" +
    "Vous êtes les bienvenus sur mon site portfolio personnel. N'hésitez pas à jeter un œil aux applications et échantillons sur lesquels j'ai travaillé, ainsi qu'à parcourir mon profil GitHub. Pour me contacter, vous pouvez simplement me contacter sur l'un de mes comptes de médias sociaux.",

  experiences: [
    {
      title: "Développement de Plateforme de Compteurs Smart Grid",
      company: "Telnet Group",
      link: "https://groupe-telnet.com/en/",
      location: "Tunis, Tunisie",
      description:
        "• Conception et développement d'une plateforme interactive avec une carte géographique visualisant l'emplacement des compteurs intelligents en utilisant leurs coordonnées GPS et des graphiques dynamiques pour surveiller les lectures des compteurs." +
        "\n \n" +
        "• Optimisation des temps de réponse de l'API en implémentant la mise en cache avec Redis, réduisant la latence des requêtes de 220ms à moins de 130ms." +
        "\n \n" +
        "• Déploiement et orchestration de l'application complète dans Azure Container Apps.",
      date: "2025, ",
    },
    {
      title: "Développement de Portlet Web",
      company: " chez eXo Platform",
      location: "Tunis, Tunisie",
      link: "https://www.exoplatform.com/",
      description:
        "• Développement et maintenance du portlet Agenda, incluant l'implémentation et l'optimisation de fonctionnalités pour une gestion efficace des événements et des notifications dans l'environnement eXo Platform." +
        "\n \n" +
        "• Modification des modèles Groovy pour les notifications par e-mail dynamiques, en utilisant Groovy TemplateEngine pour rendre le contenu personnalisé.",
      date: "2024, Stage",
    },
  ],

  educations: [
    {
      title: "Diplôme National d'Ingénieur en Informatique (Mention Excellent)",
      institution: "École Supérieure Privée d'Ingénierie et de Technologie - Esprit",
      location: "Tunis, Tunisie",
      description:
        "• Diplôme National d'Ingénieur en Informatique obtenu avec Mention Excellent.",
      date: "2021 - 2025",
    },
    {
      title: "Cycle Préparatoire aux Études d'Ingénierie",
      institution: "Institut Préparatoire aux Études d'Ingénierie de Nabeul - IPEIN",
      location: "Nabeul, Tunisie",
      description:
        "• Cycle préparatoire aux études d'ingénierie complété.",
    },
  ],

  services: [
    {
      title: "Développement Web",
      description: "Je travaille en tant que développeur web depuis plus d'un an.",
      icon: Language,
    },
    {
      title: "Développement Mobile",
      description: "J'apprends le développement mobile en utilisant Expo et React Native. J'ai publié ma première application sur le Play Store.",
      icon: AndroidOutlined,
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
      title: "BASES DE DONNÉES",
      description: ["MongoDB", "MySQL"],
    },
    {
      title: "DevOps & Cloud",
      description: ["Docker", "Git"],
    },
    {
      title: "OUTILS DE COLLABORATION",
      description: ["Jira", "Miro"],
    },
    {
      title: "OUTILS DE DÉVELOPPEMENT",
      description: ["VS Code", "Postman"],
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
      tag: "React",
      image:
        "https://i.imgur.com/PvHR887.png",
      title: "Portfolio",
      caption: "Mon Portfolio Personnel",
      description:
        "Il s'agit de mon portfolio personnel où mon CV et tous mes projets sont partagés.",
      links: [
        {
          link: "https://github.com/Telgou/ahmed-portfolio-master",
          icon: GitHub,
          text: "GitHub",
        },
        {
          link: "https://ahmed-portfolio-master.vercel.app/",
          icon: Language,
          text: "Démo en direct",
        },
      ],
    },
    //#endregion
    //#endregion

    //#region Nextjs Projects
    //#region FPS per Dollar
    {
      tag: "NextJS",
      image: "https://i.imgur.com/XygMeTD.jpeg",
      title: "Calculateur FPS par Dollar",
      caption: "FPS per Dollar",
      description:
        "Développement d'une application web pour comparer les GPU et CPU en fonction de leur valeur FPS. Optimisation de l'expérience utilisateur avec le rendu statique et mise en œuvre de techniques d'optimisation pour les moteurs de recherche (SEO). Conçu avec Supabase, Next.js et Zustand pour la gestion d'état.",
      links: [
        {
          link: null,
          icon: GitHub,
          text: "GitHub",
        },
        {
          link: "https://www.fpsperdollar.org",
          icon: Language,
          text: "Démo en direct",
        },
      ],
    },
    //#endregion
    //#region Forum Development
    {
      tag: "NextJS",
      image: "https://i.imgur.com/sGhhGn9.png",
      title: "Développement de Forum",
      caption: "Développement de Forum",
      description:
        "Conception d'un forum avec une architecture découplée utilisant des services de stockage d'objets (Cloudflare R2) pour le stockage des médias, un VPS Linux pour l'API Backend et Vercel pour l'application Frontend. Réduction du temps de réponse de l'API de 30% en implémentant Memcached pour la mise en cache des réponses JSON. Atteint un score Google Lighthouse de 90 en performance et accessibilité. Implémentation de mesures de sécurité via Cloudflare : limitation de débit et règles de pare-feu d'application Web (WAF) pour atténuer les abus potentiels et assurer la disponibilité.",
      links: [
        {
          link: "",
          icon: GitHub,
          text: "GitHub",
        },
        {
          link: "https://www.hchan.org/",
          icon: Language,
          text: "Démo en direct",
        },
      ],
    },
    //#endregion
    //#endregion

    //#region Dashboard Project
    {
      tag: "NextJS NestJS",
      image: "smartgridmeterdashboard.JPG",
      title: "Smart Grid Meters Platform Development",
      caption: "Smart Grid Dashboard",
      description:
        "• Conception et développement d’une plateforme interactive intégrant une carte géographique affichant la localisation des compteurs intelligents via leurs coordonnées GPS.\n" +
        "• Création de graphiques dynamiques en temps réel pour le suivi des relevés des compteurs.\n" +
        "• Mise en place d’un système de cache Redis, réduisant la latence des API de 220 ms à moins de 130 ms.\n" +
        "• Déploiement et orchestration complète de l’application sur Azure Container Apps.",
      links: [
        {
          link: "",
          icon: null,
          text: "GitHub",
        },
        {
          link: "",
          icon: null,
          text: "Démo en direct",
        },
      ],
    },
    //#endregion

    //#region React Native Projects
    //#region Tawssila
    {
      tag: "React Native(Expo)",
      image: "tawssila.JPG",
      title: "Application Mobile de Covoiturage: Tawssila",
      caption: "Tawssila",
      description:
        "Conception et développement d'une application mobile de covoiturage utilisant Expo et React Native, offrant une plateforme à plus de 650 utilisateurs pour proposer et rejoindre des trajets. Utilisation de Firebase Firestore pour stocker les propositions de trajets, avec des règles de sécurité et une authentification pour protéger l'accès aux données. Implémentation de fonctions cloud pour écouter les nouvelles publications de trajets et notifier automatiquement les utilisateurs abonnés via FCM. Construction d'un système de messagerie en temps réel entre conducteurs et passagers utilisant Firebase Realtime Database.",
      links: [
        {
          link: "https://play.google.com/store/apps/details?id=com.telgou.Tawssila",
          icon: AndroidOutlined,
          text: "Play Store",
        },
        {
          link: "https://tawssila.vercel.app/",
          icon: Language,
          text: "Démo en direct",
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
        "Conception et développement d'un site web de médias sociaux dédié aux professeurs universitaires. Ce projet visait à créer une plateforme interactive permettant aux professeurs de partager des ressources exclusivement entre eux.",
      links: [
        {
          link: "https://github.com/Telgou/Frontend--PI-Project-2024-Cipher",
          icon: GitHub,
          text: "GitHub",
        },
        {
          link: "https://frontend-pi-project-2024-cipher.vercel.app/",
          icon: Language,
          text: "Démo en direct",
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
        "Développement d'une application de gestion de foyer universitaire axée sur l'optimisation de la réservation des logements et la création d'un service de mise en relation basé sur un algorithme.",
      links: [
        {
          link: "https://github.com/Telgou/GestionFoyer-Frontend-main",
          icon: GitHub,
          text: "GitHub",
        },
        {
          link: "https://gestion-foyer-frontend-main.vercel.app/sign-in",
          icon: Language,
          text: "Démo en direct",
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
      title: "Pipeline DevOps pour le projet foyer",
      caption: "Pipeline DevOps pour le projet foyer",
      description:
        "Développement d'une pipeline CI/CD automatisée robuste pour le déploiement de l'application. Utilisation d'une gamme d'outils pour la gestion du processus de développement, le contrôle qualité grâce aux tests unitaires, la surveillance des performances, la gestion des conteneurs, et le déploiement continu.",
      links: [
        {
          link: "https://github.com/Telgou/devops-dormproject",
          icon: GitHub,
          text: "GitHub",
        },
        {
          link: "",
          icon: null,
          text: "Démo en direct",
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
        "Développement d'une plateforme de gestion des services d'un hôtel, visant à mettre en place une architecture microservices. Cette approche vise à décomposer l'application en composants indépendants.",
      links: [
        {
          link: "https://github.com/Telgou/MicroServices",
          icon: GitHub,
          text: "GitHub",
        },
        {
          link: "",
          icon: null,
          text: "Démo en direct",
        },
      ],
    },
    //#endregion
    //#endregion

    //#region Application de gestion des patients de la clinique
    {
      tag: "NextJS",
      image: "https://i.imgur.com/qppM9Kk.png",
      title: "Projet académique de gestion des patients de la clinique",
      caption: "Projet académique de gestion des patients",
      description: "",
      links: [
        {
          link: "https://github.com/Telgou/clinic-app",
          icon: GitHub,
          text: "GitHub",
        },
        {
          link: "",
          icon: null,
          text: "Démo en direct",
        },
      ],
    },
  ],
};