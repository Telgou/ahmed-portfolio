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
      link: "https://linkedin.com/in/gamgami-ahmed-867046146",
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
      title: "Stage chez PT ",
      description:
        "• J'ai réalisé Projet de forum anonyme sur Internet avec une architecture découplée utilisant des services de stockage d'objets (S3, R2, B2) pour le stockage des médias, un VPS Linux pour les points de terminaison d'API Backend PHP et Vercel pour l'application Frontend Next.js. De plus, j'ai optimisé les performances en mettant en œuvre Memcached pour un cache efficace, améliorant la réactivité de l'application. Par ailleurs, j'ai utilisé les services de Cloudflare tels que la limitation de débit et les règles de pare-feu d'application Web (WAF) pour atténuer les abus potentiels et assurer la disponibilité du service.",
      date: "06/2023 - 07/2023",
    },
  ],

  educations: [
    {
      title: "1ère année de génie logiciel ",
      description:
        "• Réussite de la première année de génie logiciel (tronc commun) à l'Esprit.",
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
      date: "09/2017 - 06/2018",
    },
    {
      title: "Baccalauréat",
      description:
        "• Baccalauréat en sciences expérimentales du lycée pilote de Kairouan.",
      date: "2017",
    },
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
        "Angular",
        "Bootstrap",
        "SAAS",
        "TailWind",
      ],
    },
    {
      title: "BACK-END",
      description: ["NodeJS", "Java","Spring Boot", "Javascript","Express", "PHP"],
    },
    {
      title: "BASES DE DONNÉES",
      description: ["Oracle", "MySQL", "MongoDB"],
    },
    {
      title: "GESTION DE VERSION",
      description: ["Git", "GitHub"],
    },
    {
      title: "DevOps",
      description: ["Dockerization", "Microservices"],
    },
    {
      title: "SYSTÈMES D'EXPLOITATION",
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
        "https://drive.google.com/uc?export=download&id=1-3ak53hv7dEz_rAaE5V2Gw_pYG_byi6t",
      title: "Portfolio",
      caption: "Mon portfolio personnel",
      description:
        "Il s'agit de mon portfolio personnel où mon CV et tous mes projets sont partagés.",
      links: [
        {
          link: "https://github.com/#/#-portfolio",
          icon: <GitHub />,
        },
        {
          link: "https://#-portfolio.netlify.app",
          icon: <Language />,
        },
      ],
    },
    //#endregion

    //#region Application de gestion des patients de la clinique
    {
      tag: "React JS",
      image: "C'EST UN ESPACE RÉSERVÉ POUR L'IMAGE DU PROJET",
      title: "Application de gestion des patients de la clinique",
      caption: "Application de gestion des patients",
      description: "",
      links: [
        {
          link: "https://github.com/Telgou/clinic-app",
          icon: <GitHub />,
        },
        {
          link: "C'EST UN ESPACE RÉSERVÉ POUR LE LIEN DU PROJET",
          icon: <Language />,
        },
      ],
    },
    //#endregion

    //#region Application de clonage Netflix 1
    {
      tag: "React JS",
      image:
        "https://drive.google.com/uc?export=download&id=1Np9eLWkXis0uXDv0gTJjvMp9objJyCv2",
      title: "Application de clonage Netflix 1",
      caption: "Clone Netflix Version 1",
      description:
        "Ce projet est un clone Netflix qui utilise l'API IMDb pour lire les bandes-annonces de films.",
      links: [
        {
          link: "https://github.com/#/react-netflix-app-1",
          icon: <GitHub />,
        },
        {
          link: "https://react-netflix-app-1.netlify.app/",
          icon: <Language />,
        },
      ],
    },
    //#endregion

    //#region Application de clonage Netflix 2
    {
      tag: "React JS",
      image:
        "https://drive.google.com/uc?export=download&id=1L6ZmBwm63hsqNUryV9BjdlVfy7Hb2uzD",
      title: "Application de clonage Netflix 2",
      caption: "Clone Netflix Version 2",
      description:
        "Ce projet est un clone Netflix qui utilise l'API IMDb pour lire les bandes-annonces de films et Firebase pour la connexion de l'utilisateur.",
      links: [
        {
          link: "https://github.com/#/react-netflix-app-2",
          icon: <GitHub />,
        },
        {
          link: "https://react-netflix-app-2.netlify.app/",
          icon: <Language />,
        },
      ],
    },

    //#region Project Amazon Clone App
    {
      tag: "React JS",
      image:
        "https://drive.google.com/uc?export=download&id=1Z1QuipHNJtNR5CcQ6JCkpa7JtruezK8t",
      title: "Amazon Clone App",
      caption: "Online Shopping",
      description:
        "A clone for Amazon online shopping using FireBase for project hosting and user login",
      links: [
        {
          link: "https://github.com/#/react-amazon-app",
          icon: <GitHub />,
        },
        { link: "https://clone-#-682e5.web.app/", icon: <Language /> },
      ],
    },
    //#endregion

    //#region Project Covid 19 Tracker App 1
    {
      tag: "React JS",
      image:
        "https://drive.google.com/uc?export=download&id=1DQe3cFLZr2bLAwXhLkBbsaEA7ZOP-XLp",
      title: "Covid 19 Tracker App 1",
      caption: "Covid 19 Tracker Version 1",
      description:
        "Project that uses a public API to keep a track on the corona state worldwide",
      links: [
        {
          link: "https://github.com/#/react-covid19-tracker-app-1",
          icon: <GitHub />,
        },
        {
          link: "https://covid19-tracker-app-#.web.app",
          icon: <Language />,
        },
      ],
    },
    //#endregion

    //#region Project Covid 19 Tracker App 2
    {
      tag: "React JS",
      image: "https://drive.google.com/uc?id=1EudZx9cGyBC4cMC1Bs7xPGvXNXzhwhU1",
      title: "Covid 19 Tracker App 2",
      caption: "Covid 19 Tracker Version 2",
      description:
        "Project that uses a public API to keep a track on the corona state worldwide",
      links: [
        {
          link: "https://github.com/#/react-covid19-tracker-app-2",
          icon: <GitHub />,
        },
        {
          link: "https://react-covid19-tracker-app-2.netlify.app",
          icon: <Language />,
        },
      ],
    },
    //#endregion

    //#region Project Alan AI News App
    {
      tag: "React JS",
      image:
        "https://drive.google.com/uc?export=download&id=19537gNav5z6AeJ-AxqdlnW1YxKtKh7O5",
      title: "Alan AI News App",
      caption: "AI News App",
      description:
        "New application that uses ALAN AI model to answer to questions",
      links: [
        {
          link: "https://github.com/#/react-voice-controlled-news-app",
          icon: <GitHub />,
        },
        {
          link: "https://react-voice-controlled-news-app.netlify.app/",
          icon: <Language />,
        },
      ],
    },
    //#endregion

    //#region Project HOT or COLD Game App
    {
      tag: "React JS",
      image:
        "https://drive.google.com/uc?export=download&id=1w7Hc-w2A_yDSv6c9ClH0mTRqzqPJPvB3",
      title: "HOT or COLD Game",
      caption: "Prediction Game",
      description:
        "Random number prediciton game where player have to guess to number the game predicted",
      links: [
        {
          link: "https://github.com/#/react-hot-cold-game-app",
          icon: <GitHub />,
        },
        {
          link: "https://react-hot-cold-game-app.netlify.app/",
          icon: <Language />,
        },
      ],
    },
    //#endregion

    //#region Project Advice Generator
    {
      tag: "React JS",
      image: "https://drive.google.com/uc?id=1oUxkY_z_qhGEvy1ZF_ROfcCflt-eMts9",
      title: "Advice Generator",
      caption: "Advice Generator",
      description: "Advice generator app using an API",
      links: [
        {
          link: "https://github.com/#/react-advice-app",
          icon: <GitHub />,
        },
        {
          link: "https://react-advice-app-#.netlify.app",
          icon: <Language />,
        },
      ],
    },
    //#endregion

    //#region Project Face Landmark Detection App
    {
      tag: "React JS",
      image:
        "https://drive.google.com/uc?export=download&id=1nZTMpQA8Wj1jiuQTuAJIWjSvBsWw0CzS",
      title: "Face Landmark Detection App",
      caption: "Landmark Detecotor",
      description:
        "ML/AI base ReactJS app that detects face landmarks based on a pre-trained model",
      links: [
        {
          link: "https://github.com/#/react-tfjs-face-landmark-detection-app",
          icon: <GitHub />,
        },
        {
          link: "https://react-tfjs-face-lm-detect-app.web.app",
          icon: <Language />,
        },
      ],
    },
    //#endregion

    //#region Project Youtube Clone App
    {
      tag: "React JS",
      image:
        "https://drive.google.com/uc?export=download&id=122nOa8ebj9d_Iy2tjaxF3Q_Dk-iRFyU5",
      title: "Youtube Clone App",
      caption: "Youtube Like App",
      description:
        "App that uses the Youtube API to search for videos and play them on screen",
      links: [
        {
          link: "https://github.com/#/react-youtube-app",
          icon: <GitHub />,
        },
        {
          link: "https://react-youtube-app-#.netlify.app",
          icon: <Language />,
        },
      ],
    },
    //#endregion

    //#region Project Youtube Thumbnail App
    {
      tag: "React JS",
      image:
        "https://drive.google.com/uc?export=download&id=1h13sDJNdLzjJr9rR0toJTVCvwj5TAdhV",
      title: "Youtube Thumbnail App",
      caption: "Video Thumbnail",
      description:
        "Youtube inspired app that applies thumbnails to videos like on Youtube",
      links: [
        {
          link: "https://github.com/#/react-youtube-thumbnail-app",
          icon: <GitHub />,
        },
        {
          link: "https://thumbnail-app-#.web.app/",
          icon: <Language />,
        },
      ],
    },
    //#endregion

    //#region Project Instagram Clone App
    {
      tag: "React JS",
      image:
        "https://drive.google.com/uc?export=download&id=1aN7EJK-h6R0692Rg01xAh5rqcnVBEjsC",
      title: "Instagram Clone App",
      caption: "Instagram Inspired",
      description:
        "Instagram like app for pictures sharing and comments with user login",
      links: [
        {
          link: "https://github.com/#/react-instagram-app",
          icon: <GitHub />,
        },
        {
          link: "https://facebook-instagram-clone-9c07c.web.app/",
          icon: <Language />,
        },
      ],
    },
    //#endregion

    //#region Project Messenger Clone App
    {
      tag: "React JS",
      image:
        "https://drive.google.com/uc?export=download&id=1s98XVi3SGSIQTvEJB0cMUVnKMV9P07aR",
      title: "Messenger Clone App",
      caption: "Messenger Inspired",
      description: "Messenger like app for real time chatting with user login",
      links: [
        {
          link: "https://github.com/#/react-messenger-app",
          icon: <GitHub />,
        },
        {
          link: "https://react-messenger-app-d200c.web.app/",
          icon: <Language />,
        },
      ],
    },
    //#endregion

    //#region Project To-Do App
    {
      tag: "React JS",
      image:
        "https://drive.google.com/uc?export=download&id=1XY7-DH85o89vMKu_Zj51z2tK0pNRoGkd",
      title: "To-Do App",
      caption: "To Do Notes",
      description: "A minimalist To-Do app that saves the tasks",
      links: [
        {
          link: "https://github.com/#/react-todo-app",
          icon: <GitHub />,
        },
        {
          link: "https://todo-app-#-51a26.web.app/",
          icon: <Language />,
        },
      ],
    },
    //#endregion

    //#region Project Tinder Clone App
    {
      tag: "React JS",
      image:
        "https://drive.google.com/uc?export=download&id=1onCwtSm2xH8XVEDRepozqx7Di8OeH-Q_",
      title: "Tinder Clone App",
      caption: "Tinder Inspired",
      description:
        "Tinder like app to accept/reject people with user login and real time chat implemented",
      links: [
        {
          link: "https://github.com/#/react-tinder-app",
          icon: <GitHub />,
        },
        {
          link: "https://react-tinder-app-30619.web.app/",
          icon: <Language />,
        },
      ],
    },
    //#endregion

    //#region Project Tinder Clone App
    {
      tag: "Gatsby JS",
      image:
        "https://drive.google.com/uc?export=download&id=1LMWynINpR0TMNqXL3DW5i6KlY-Vkz1Is",
      title: "Code Blog App",
      caption: "Online Blog",
      description: "Online Blog app about coding based on Gatsby and GraphQL",
      links: [
        {
          link: "https://github.com/#/gatsby-blog-app",
          icon: <GitHub />,
        },
        {
          link: "https://gatsby-blog-app-#.netlify.app/",
          icon: <Language />,
        },
      ],
    },
    //#endregion
    //#endregion

    //#region MEAN Stack Projects
    //#region Project Smart Trash Monitoring App
    {
      tag: "MEAN Stack",
      image:
        "https://drive.google.com/uc?export=download&id=1AGEkWq7ybkdkF92Tppq-cnCARzU3Kziy",
      title: "Smart Trash Monitoring",
      caption: "Public Trash Monitoring",
      description:
        "Trash Monitoring IoT System based on sensors and data collection",
      links: [
        {
          link: "https://github.com/#/smart-trash-monitoring",
          icon: <GitHub />,
        },
      ],
    },
    //#endregion
    //#region Project Task Manager App
    {
      tag: "MEAN Stack",
      image:
        "https://drive.google.com/uc?export=download&id=1mbB05N3bTnhy0Z73mv577f-56AFfqJaL",
      title: "Task Manager App",
      caption: "Task Organizer",
      description: "Task Manager to organize to do task with user login",
      links: [
        {
          link: "https://github.com/#/smart-trash-monitoring",
          icon: <GitHub />,
        },
        {
          link: "https://mean-task-manager-app-#.netlify.app",
          icon: <Language />,
        },
      ],
    },
    //#endregion
    //#endregion

    //#region MERN Stack Projects
    //#region Project Memories App
    {
      tag: "MERN Stack",
      image:
        "https://drive.google.com/uc?export=download&id=1hHjMIkF9j56ki0gCso4uHQdfBfZbo-g5",
      title: "Memories",
      caption: "Share Memories",
      description:
        "Memories sharing app with user login, memory detail, suggested memories and more",
      links: [
        {
          link: "https://github.com/#/mern-memories-app",
          icon: <GitHub />,
        },
        {
          link: "https://mern-memories-app-#.netlify.app/",
          icon: <Language />,
        },
      ],
    },
    //#endregion

    //#region Project Chat App
    {
      tag: "MERN Stack",
      image:
        "https://drive.google.com/uc?export=download&id=1uqxA0-j00G9Q8rtxnztiZOMDkXHTuho3",
      title: "Chat App",
      caption: "Real Time Chat",
      description:
        "Real Time chat with rooms concept for more that 2 participants based on user login",
      links: [
        {
          link: "https://github.com/#/mern-chat-app",
          icon: <GitHub />,
        },
        {
          link: "https://mern-chat-app-#.netlify.app/",
          icon: <Language />,
        },
      ],
    },
    //#endregion

    //#region Project PDF Generator App
    {
      tag: "MERN Stack",
      image:
        "https://drive.google.com/uc?export=download&id=1GATK9gGed1U1zXO187ylUZ6NjXjy8ZhD",
      title: "PDF Generator",
      caption: "Generate PDF from input",
      description: "PDF Generator example based on user given input in a from",
      links: [
        {
          link: "https://github.com/#/pdf-generator-app",
          icon: <GitHub />,
        },
        {
          link: "https://pdf-generator-app-#.netlify.app/",
          icon: <Language />,
        },
      ],
    },
    //#endregion
    //#endregion

    //#region Python Projects
    //#region Project Amazon Price Tracker
    {
      tag: "Python",
      image:
        "https://drive.google.com/uc?export=download&id=1Q7CcvIIVbhBH7aHayC1u2i5itlfnV_N8",
      title: "Amazon Price Tracker",
      caption: "Price Tracker Automation",
      description:
        "Selenium Automation Script for price tracking, webscrapping amazon articles",
      links: [
        {
          link: "https://github.com/#/python-amazon-price-tracker",
          icon: <GitHub />,
        },
      ],
    },
    //#endregion

    //#region Project Amazon Price Tracker
    {
      tag: "Python",
      image:
        "https://drive.google.com/uc?export=download&id=1szlZpLfgkU322kVeSY9cyYGDaGQlp2xj",
      title: "Car and Pedestrian Tracking Script",
      caption: "Real Time Street Tracking",
      description:
        "Real Time Cars and Pedestrians Trackin AI model using video input or live camera",
      links: [
        {
          link: "https://github.com/#/python-opencv-tracking",
          icon: <GitHub />,
        },
      ],
    },
    //#endregion

    //#region Project Face Detector Script
    {
      tag: "Python",
      image:
        "https://drive.google.com/uc?export=download&id=1ZPY-bezGjyPAmcJmfKwgvUJAA2WZxp-H",
      title: "Face Detector Script",
      caption: "Real Time Face Detector",
      description: "Face Detector AI model using video input or live camera",
      links: [
        {
          link: "https://github.com/#/python-opencv-face-detector",
          icon: <GitHub />,
        },
      ],
    },
    //#endregion

    //#region Project Smile Detector Script
    {
      tag: "Python",
      image:
        "https://drive.google.com/uc?export=download&id=1nPrUjhYEbwtLYidi2o5bSkGCmG1NuSJo",
      title: "Smile Detector Script",
      caption: "Real Time Smile Detector",
      description: "Smile Detector AI model using video input or live camera",
      links: [
        {
          link: "https://github.com/#/python-opencv-smile-detector",
          icon: <GitHub />,
        },
      ],
    },
    //#endregion

    //#region Project Snake Game Script
    {
      tag: "Python",
      image:
        "https://drive.google.com/uc?export=download&id=1XM63hvIgMRc81mLAn3lxgwf9DFZCn3_n",
      title: "Snake Game Script",
      caption: "Classic Snake Game",
      description: "The legacy of the classic Snake Game we all played as kids",
      links: [
        {
          link: "https://github.com/#/python-snake-game",
          icon: <GitHub />,
        },
      ],
    },
    //#endregion
    //#endregion
  ],
};
