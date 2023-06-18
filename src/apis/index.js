import { DesignServices, MobileFriendly, Web } from "@mui/icons-material";

export const educationData = [
  {
    degree: "Bachelor's Degree",
    institution: "Dhaka University",
    subject: "Accounting",
    year: "2015",
  },
  {
    degree: "Higher Secondary",
    institution: "Cantonment Public School and College",
    subject: "N/A",
    year: "2010",
  },
  {
    degree: "Secondary School Certificate",
    institution: "ZBSM High School",
    subject: "N/A",
    year: "2008",
  },
];

export const experienceData = [
  {
    title: "Software Engineer",
    company: "Gononet Online Solutions Ltd.",
    description: [
      "Ut fringilla hendrerit consectetur. Integer malesuada risus eget leo accumsan placerat.",
    ],
    duration: "0.3 years",
  },
  {
    title: "Software Developer",
    company: "Ethics Advance Technology Ltd.",
    description: [
      "Ut fringilla hendrerit consectetur. Integer malesuada risus eget leo accumsan placerat.",
    ],
    duration: "2 Years",
  },
  {
    title: "UI/Graphic Designer",
    company: "Fiverr.com",
    description: [
      "Ut fringilla hendrerit consectetur. Integer malesuada risus eget leo accumsan placerat.",
    ],
    duration: "3 Years",
  },
];
export const skillsData = [
  {
    icon: <MobileFriendly sx={{ fontSize: 48, marginBottom: 2 }} />,
    title: "Mobile App Development",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    icon: <Web sx={{ fontSize: 48, marginBottom: 2 }} />,
    title: "Website Development",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    icon: <DesignServices sx={{ fontSize: 48, marginBottom: 2 }} />,
    title: "User Interface Design",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
];

export const technologiesData = [
  {
    name: "HTML",
    category: "frontend",
    expertise: 5, // Expertise level for HTML
  },
  {
    name: "CSS",
    category: "frontend",
    expertise: 4, // Expertise level for CSS
  },
  {
    name: "JavaScript",
    category: "frontend",
    expertise: 5, // Expertise level for JavaScript
  },
  {
    name: "React",
    category: "frontend",
    expertise: 5, // Expertise level for JavaScript
  },
  {
    name: "Redux",
    category: "frontend",
    expertise: 5, // Expertise level for JavaScript
  },
  {
    name: "Material UI",
    category: "frontend",
    expertise: 5, // Expertise level for JavaScript
  },
  {
    name: "React Native",
    category: "frontend",
    expertise: 5, // Expertise level for JavaScript
  },
  {
    name: "Bootstrap",
    category: "frontend",
    expertise: 5, // Expertise level for JavaScript
  },
  {
    name: "Node.js",
    category: "backend",
    expertise: 4, // Expertise level for Node.js
  },
  {
    name: "Express js",
    category: "backend",
    expertise: 4, // Expertise level for Node.js
  },
  {
    name: "No SQL",
    category: "backend",
    expertise: 4, // Expertise level for Node.js
  },
  {
    name: "Python",
    category: "backend",
    expertise: 3, // Expertise level for Python
  },

  {
    name: "MongoDb",
    category: "backend",
    expertise: 3, // Expertise level for SQL
  },
  {
    name: "NPM",
    category: "tools",
    expertise: 4, // Expertise level for SQL
  },
  {
    name: "Webpack",
    category: "tools",
    expertise: 4, // Expertise level for SQL
  },
  {
    name: "SVG",
    category: "tools",
    expertise: 4, // Expertise level for SQL
  },
  {
    name: "Figma",
    category: "tools",
    expertise: 4, // Expertise level for SQL
  },
  {
    name: "Adobe Design Suit",
    category: "tools",
    expertise: 4, // Expertise level for SQL
  },
  // Add more technologies as needed
];

export const workExperiences = [
  {
    position: "Software Engineer",
    company: "Gononet Online Solution - Dhaka",
    startDate: "2023-03-01",
    endDate: null,
    responsibilities: [
      "Lead a team of 4 developers in improving the existing mobile app and developing web apps for employer and admin dashboards.",
      "Manage React-based development for mobile and web applications.",
      "Implement authentication and authorization functionality for enhanced security in web and mobile applications.",
      "Successfully met project timelines and requirements provided."
    ]
  },
  {
    position: "Junior Software Engineer",
    company: "Ethics Advance Technology Ltd - Dhaka",
    startDate: "2021-05-01",
    endDate: "2023-02-28",
    responsibilities: [
      "Contributed to front-end development using Agile methodology for various projects, primarily focusing on React, Vue 3, Redux, and Material-UI (MUI).",
      "Worked on the E-survey project, an initiative of the Ministry of Education in Bangladesh, developing a survey application to collect data from educational institutions across the country.",
      "Led UI design efforts and integrated REST APIs for the Hospital Information Management System's billing module.",
      "Utilized Redux for state management and Redux Saga for handling asynchronous operations."
    ]
  },
  {
    position: "Freelance Graphic/UI Designer",
    company: "Company - Fiverr.com",
    startDate: "2018-01-01",
    endDate: "2020-12-31",
    responsibilities: [
      "PSD/Figma to HTML conversion, Prototyping in Figma.",
      "Magazine and Cover design with Adobe InDesign, Photoshop, and Illustrator."
    ]
  }
];