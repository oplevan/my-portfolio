export const filters = [
  {
    filter: "all",
    title: "show all",
    animationDelay: 500,
  },
  {
    filter: "frontend",
    title: "front-end",
    animationDelay: 700,
  },
  {
    filter: "html5",
    title: "html5",
    animationDelay: 900,
  },
  {
    filter: "js",
    title: "javascript",
    animationDelay: 1100,
  },
  {
    filter: "react",
    title: "reactjs",
    animationDelay: 1300,
  },
  {
    filter: "ux-ui",
    title: "ui/ux design",
    animationDelay: 1500,
  },
  {
    filter: "animations",
    title: "animations",
    animationDelay: 1700,
  },
  {
    filter: "others",
    title: "others",
    animationDelay: 1900,
  },
];

export const portfolio = [
  {
    name: "My Portfolio",
    imgPreview: "https://caferati.me/images/portfolio/sky-go-desktop/list.jpg",
    hoverImgBgr:
      "https://caferati.me/images/portfolio/sky-go-desktop/hover.jpg",
    tags: [
      "WebApp",
      "Java Script",
      "Html5",
      "Animation",
      "ReactJs",
      "Material UI",
    ],
    category: ["all", "frontend", "ux-ui", "react"],
    animation: {
      type: "fade-up",
      delay: 0,
    },
  },
  {
    name: "Rocket.Chat",
    imgPreview: "https://caferati.me/images/portfolio/rocket-chat/list.jpg",
    hoverImgBgr: "https://caferati.me/images/portfolio/rocket-chat/hover.jpg",
    tags: [
      "WebApp",
      "Html5",
      "Less",
      "Animations",
      "UI/UX Design",
      "MeteorJs",
      "Mongo Db",
    ],
    category: ["all", "animations", "ux-ui"],
    animation: {
      type: "fade-up",
      delay: 0,
    },
  },
  {
    name: "Perverte Web Agency Portfolio",
    imgPreview: "https://caferati.me/images/portfolio/perverte/list.jpg",
    hoverImgBgr: "https://caferati.me/images/portfolio/perverte/hover.jpg",
    tags: ["WebSite", "Html5", "CSS3", "Sass", "Animation", "RequireJs"],
    category: ["all", "frontend"],
    animation: {
      type: "fade-up",
      delay: 0,
    },
  },
  {
    name: "WWF why go wild",
    imgPreview: "https://caferati.me/images/portfolio/whygowild/list.jpg",
    hoverImgBgr: "https://caferati.me/images/portfolio/whygowild/hover.jpg",
    tags: ["Sass", "Animations", "BackboneJs", "Snap svg"],
    category: ["all", "frontend", "ux-ui"],
    animation: {
      type: "fade-up",
      delay: 0,
    },
  },
  {
    name: "Florence NYC",
    imgPreview: "https://caferati.me/images/portfolio/florense-nyc/list.jpg",
    hoverImgBgr: "https://caferati.me/images/portfolio/florense-nyc/hover.jpg",
    tags: [
      "Front-End",
      "Javascript",
      "Html5",
      "Sass",
      "Animations",
      "snap svg",
    ],
    category: ["all", "others"],
    animation: {
      type: "fade-up",
      delay: 0,
    },
  },
];

export const timeline = [
  {
    position: "Assistant Project Manager",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc at laoreet arcu. Fusce posuere et augue vitae scelerisque. Sed ut pretium nisi, at dictum orci. Donec varius a mi nec sodales. Morbi ac aliquam turpis. Ut id luctus lectus. Vivamus nunc enim, blandit et accumsan eget, volutpat non dolor. Sed gravida pulvinar porta.",
    company: "Agma",
    where: "London, UK",
    type: "Full-time",
    duration: "1 yr 7 mos",
    end: "Present",
    start: "JUN, 2018",
  },
  {
    position: "Assistant Accountant",
    description: "Description 1",
    company: "RK Accounting",
    where: "London, UK",
    type: "Full-time",
    end: "MAY, 2018",
    start: "NOV, 2016",
  },
  {
    position: "Junior Front End Developer",
    description: "Description 2",
    company: "GBC",
    where: "Chernivtsi, Ukraine",
    type: "Full-time",
    end: "Sep, 2016",
    start: "May, 2015",
  },
  {
    position: "SEO Specialist",
    description: "Description 3",
    company: "GBC",
    where: "Chernivtsi, Ukraine",
    type: "Full-time",
    end: "Apr, 2015",
    start: "Jul, 2013",
  },
];
