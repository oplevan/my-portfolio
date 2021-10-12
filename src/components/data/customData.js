export const filters = [
  {
    filter: "all",
    title: "show all",
  },
  {
    filter: "frontend",
    title: "front-end",
  },
  {
    filter: "backend",
    title: "back-end",
  },
  {
    filter: "wordpress",
    title: "WordPress",
  },
  {
    filter: "js",
    title: "javascript",
  },
  {
    filter: "react",
    title: "react",
  },
  {
    filter: "ux-ui",
    title: "ui/ux design",
  },
  {
    filter: "others",
    title: "others",
  },
];

export const portfolio = [
  {
    id: "netflix",
    title: "Netflix Clone",
    description: {
      short: "Netflix clone/replica, built with React, Firebase, JavaScript, HTML5 and CSS3.",
      full: "In this React Project I'm trying to replicate Netflix - the world's leading streaming entertainment platform. At this moment it has multiple pages such as Home, Sign In & Sign Up and Browse. I used Firebase auth to store data in the Firebase auth database when a user signs up & signs in. I build this app using React (custom hooks, context, portals), Compound & Styled Components for styling, React Router for navigation, as well as custom UI effects such as hover and modal.",
    },
    thumbnail: "/images/netflix-clone/preview.jpg",
    thumbnailHover: "/images/netflix-clone/preview-hover.jpg",
    carouselImages: [
      "/images/netflix-clone/netflix-clone-1.jpg",
      "/images/netflix-clone/netflix-clone-2.jpg",
      "/images/netflix-clone/netflix-clone-3.jpg",
      "/images/netflix-clone/netflix-clone-4.jpg",
      "/images/netflix-clone/netflix-clone-5.jpg",
      "/images/netflix-clone/netflix-clone-6.jpg",
      "/images/netflix-clone/netflix-clone-7.jpg",
    ],
    tags: ["WebApp", "UI/UX", "ReactJs", "Animation", "Firebase", "Firebase Auth", "React Router", "HTML5", "CSS3"],
    category: ["all", "frontend", "react"],
    animation: {
      type: "fade-up",
      delay: 0,
    },
    links: {
      web: "https://netflix-oleg.netlify.app/",
      gitHub: "https://github.com/oplevan/netflix-clone",
    },
  },
  {
    id: "my-portfolio",
    title: "Personal Portfolio",
    description: {
      short: "This is my personal Portfolio website built with React JS and Material UI Components.",
      full: "The idea behind this project was to create a showcase of my technical and design skills. I tried to keep the UI as simple as possible yet to make it attractive and stylish. For this project I've used ReactJs, Material UI components and React Router for navigation.",
    },
    thumbnail: "/images/my-portfolio/preview.jpg",
    thumbnailHover: "/images/my-portfolio/preview-hover.jpg",
    carouselImages: [
      "/images/my-portfolio/1.jpg",
      "/images/my-portfolio/2.jpg",
      "/images/my-portfolio/3.jpg",
      "/images/my-portfolio/4.jpg",
      "/images/my-portfolio/5.jpg",
      "/images/my-portfolio/6.jpg",
    ],
    tags: ["Portfolio", "UI/UX", "Firebase", "ReactJs", "Animation", "Material UI", "React Router", "HTML5", "CSS3"],
    category: ["all", "frontend", "react"],
    animation: {
      type: "fade-up",
      delay: 0,
    },
    links: {
      web: "https://oplevan.com",
      gitHub: "https://github.com/oplevan/my-portfolio",
    },
  },
  {
    id: "ozar",
    title: "Ozar",
    description: {
      short: "E-commerce Website developed for Ozar, an online retailer in Ukraine, as Front-End Developer at GBC.",
      full: "This was one of the biggest projects I have worked on. In this project I acted as part of a small team, two front-end developers and one back-end. The project has a bespoke design & functionality. The content management system was built using CodeIgniter Framework, Ajax, Jquery, etc. Front-End was built using HTML, CSS, jQuery and custom plugins.",
    },
    thumbnail: "/images/ozar-company/preview.jpg",
    thumbnailHover: "/images/ozar-company/preview-hover.jpg",
    carouselImages: [
      "/images/ozar-company/ozar-company-1.jpg",
      "/images/ozar-company/ozar-company-2.jpg",
      "/images/ozar-company/ozar-company-3.jpg",
      "/images/ozar-company/ozar-company-4.jpg",
      "/images/ozar-company/ozar-company-5.jpg",
      "/images/ozar-company/ozar-company-6.jpg",
    ],
    tags: ["eCommerce", "Codeigniter", "Html5", "CSS3", "jQuery"],
    category: ["all", "ecommerce", "frontend"],
    animation: {
      type: "fade-up",
      delay: 0,
    },
    links: {
      web: "https://ozar.company/",
      gitHub: "",
    },
  },
  {
    id: "agma-construction",
    title: "Agma Construction",
    description: {
      short: "Website developed for a London based construction company as Contractor Front-End Developer.",
      full: "",
    },
    thumbnail: "/images/agma/preview.jpg",
    thumbnailHover: "/images/agma/preview-hover.jpg",
    carouselImages: [
      "/images/agma/slide-1.jpg",
      "/images/agma/slide-2.jpg",
      "/images/agma/slide-3.jpg",
      "/images/agma/slide-4.jpg",
      "/images/agma/slide-5.jpg",
    ],
    tags: ["Website", "HTML5", "CSS3", "UI/UX Design", "RWD", "WordPress"],
    category: ["all", "ux-ui", "wordpress"],
    animation: {
      type: "fade-up",
      delay: 0,
    },
    links: {
      web: "https://agmaconstruction.com/",
      gitHub: "",
    },
  },
  {
    id: "bruckenbauverein-frankfurt",
    title: "Bruckenbauverein Frankfurt",
    description: {
      short:
        "Website developed for the historical town hall, Der Lange Franz, in Frankfurt, Germany as a contractor Front-End Developer.",
      full: "The challenge for me was to make it responsive since most pages contain large images so I needed to make sure the whole website looks good on any device.",
    },
    thumbnail: "/images/bruckenbauverein-frankfurt/thumb.jpg",
    thumbnailHover: "/images/bruckenbauverein-frankfurt/hover.jpg",
    carouselImages: [
      "/images/bruckenbauverein-frankfurt/slide-1.jpg",
      "/images/bruckenbauverein-frankfurt/slide-2.jpg",
      "/images/bruckenbauverein-frankfurt/slide-3.jpg",
      "/images/bruckenbauverein-frankfurt/slide-4.jpg",
    ],
    tags: ["CSS", "HTML", "JavaScript", "jQuery", "WordPress"],
    category: ["all", "frontend", "wordpress"],
    animation: {
      type: "fade-up",
      delay: 0,
    },
    links: {
      web: "https://brueckenbauverein-frankfurt.de/",
      gitHub: "",
    },
  },
  {
    id: "nobletec",
    title: "NobleTec",
    description: {
      short:
        "Website developed for NobleTec - ISP, Telecom, Software & Hardware Service Provider in US as Contractor Front-End Developer.",
      full: "",
    },
    thumbnail: "/images/nobletec/preview.jpg",
    thumbnailHover: "/images/nobletec/preview-hover.jpg",
    carouselImages: ["/images/nobletec/nobletec-1.jpg", "/images/nobletec/nobletec-2.jpg", "/images/nobletec/nobletec-3.jpg"],
    tags: ["WordPress", "Html5", "CSS3", "JavaScript"],
    category: ["all", "wordpress"],
    animation: {
      type: "fade-up",
      delay: 0,
    },
    links: {
      web: "https://www.nobletecllc.com/",
      gitHub: "",
    },
  },
  {
    id: "ctech",
    title: "cTech",
    description: {
      short: "Website developed for cTech in US as Freelance Front-End Developer.",
      full: "",
    },
    thumbnail: "/images/ctech/preview.jpg",
    thumbnailHover: "/images/ctech/preview-hover.jpg",
    carouselImages: ["/images/ctech/ctech-1.jpg", "/images/ctech/ctech-2.jpg", "/images/ctech/ctech-3.jpg"],
    tags: ["WordPress", "Html5", "CSS3", "JavaScript"],
    category: ["all", "wordpress"],
    animation: {
      type: "fade-up",
      delay: 0,
    },
    links: {
      web: "https://ctech.ul.com/",
      gitHub: "",
    },
  },
  {
    id: "uwb",
    title: "Ukrainian Women in Business",
    description: {
      short: "Website developed for a non-profit organisation in USA as Freelance Front-End Developer.",
      full: "",
    },
    thumbnail: "/images/uwb/preview.jpg",
    thumbnailHover: "/images/uwb/preview-hover.jpg",
    carouselImages: ["/images/uwb/uwb-1.jpg", "/images/uwb/uwb-2.jpg"],
    tags: ["WordPress", "Html5", "CSS3", "JavaScript"],
    category: ["all", "wordpress"],
    animation: {
      type: "fade-up",
      delay: 0,
    },
    links: {
      web: "http://www.ukrainianwomeninbusiness.com/",
      gitHub: "",
    },
  },
  {
    id: "axexpress",
    title: "Ax Express, Inc",
    description: {
      short:
        "Website developed for Ax Express - Logistics & Transportation Services company in US as Freelance Front-End Developer.",
      full: "",
    },
    thumbnail: "/images/axexpress/preview.jpg",
    thumbnailHover: "/images/axexpress/preview-hover.jpg",
    carouselImages: [
      "/images/axexpress/axexpress-1.jpg",
      "/images/axexpress/axexpress-2.jpg",
      "/images/axexpress/axexpress-3.jpg",
      "/images/axexpress/axexpress-4.jpg",
    ],
    tags: ["WordPress", "Html5", "CSS3", "JavaScript"],
    category: ["all", "wordpress"],
    animation: {
      type: "fade-up",
      delay: 0,
    },
    links: {
      web: "http://www.axexpressinc.com/",
      gitHub: "",
    },
  },
  {
    id: "budgety",
    title: "Mini Budget App",
    description: {
      short: "Simple personal budget app using JavaScript, HTML and CSS",
      full: "Simple personal budget app using JavaScript, HTML and CSS",
    },
    thumbnail: "/images/budgety/thumbnail.jpg",
    thumbnailHover: "/images/budgety/hover.jpg",
    carouselImages: ["/images/budgety/slide-1.jpg", "/images/budgety/slide-2.jpg"],
    tags: ["JavaScript", "HTML", "CSS"],
    category: ["miniapp", "others", "js"],
    animation: {
      type: "fade-up",
      delay: 0,
    },
    links: {
      web: "",
      gitHub: "",
    },
  },
  //template
  // {
  //   id: '',
  //   title: '',
  //   description: {
  //     short: '',
  //     full: '',
  //   },
  //   thumbnail: '/images//preview.jpg',
  //   thumbnailHover: '/images//preview-hover.jpg',
  //   carouselImages: ['/images//-1.jpg', '/images//-2.jpg', '/images//-3.jpg'],
  //   tags: ['WordPress', 'Html5', 'CSS3', 'JavaScript'],
  //   category: ['all', 'wordpress'],
  //   animation: {
  //     type: 'fade-up',
  //     delay: 0,
  //   },
  //   links: {
  //     web: '',
  //     gitHub: '',
  //   },
  // },
];

export const timeline = [
  {
    position: "Front End Developer",
    description: [
      "Worked with various clients, developing websites that include booking, portfolio, blog and multilingual functionalities",
      "Handled various projects on different stages of development",
      "Fixing problems with existing projects (mostly WordPress)",
      "Built custom websites using Bootstrap and WordPress",
    ],
    achievements:
      "Increased user experience satisfaction by 59% from a website redesign. Learned new technologies such as React, Redux, Webpack. Improved English speaking and writing skills from beginner to advanced.",
    company: "Various clients",
    where: "London, UK",
    type: "Contract",
    duration: "1 yr 7 mos",
    end: "PRESENT",
    start: "NOV, 2017",
  },
  {
    position: "Junior Front End Developer",
    description: [
      "Created easy-to-use websites for small businesses and nonprofits and developed web pages based on design specifications",
      "Integrated new features into existing Web applications",
      "Maintained templates and content management systems",
      "Assisted in testing and deploying Web applications",
      "Coordinated with Graphic Designers in developing animations and interactive content",
    ],
    achievements:
      "Took the ownership of the entire process of development, content management and launch of a project, which led to a significant increase in managerial and communication skills.",
    company: "GBC",
    where: "Chernivtsi, Ukraine",
    type: "Full-time",
    end: "SEP, 2017",
    start: "MAY, 2015",
  },
  {
    position: "SEO Specialist",
    description: [
      "Tracked, reported, and analysed website analytics and PPC initiatives and campaigns",
      "Managed campaign expenses, staying on budget, estimating monthly costs and reconciling discrepancies",
      "Researched and implemented search engine optimization recommendations",
      "Researched and analysed competitor advertising links",
      "Developed and implemented link building strategy",
      "Collaborated with development team to drive SEO in content creation and content programming",
    ],
    achievements: "",
    company: "GBC",
    where: "Chernivtsi, Ukraine",
    type: "Full-time",
    end: "APR, 2015",
    start: "JUL, 2013",
  },
];
