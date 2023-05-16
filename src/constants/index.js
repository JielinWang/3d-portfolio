import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  bootstrap,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  mit,
  schoolds54,
  renmin,
  upwork,
  // meta,
  // starbucks,
  // tesla,
  // shopify,
  aigeneration,
  jwbank,
  foodapp,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
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
    title: "Frontend Developer",
    icon: backend,
  },
  {
    title: "JavaScript Developer",
    icon: creator,
  },
  {
    title: "React Developer",
    icon: mobile,
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
    name: "Bootstrap",
    icon: bootstrap,
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
    name: "Redux Toolkit",
    icon: redux,
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
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Web Developer",
    company_name: "Upwork",
    icon: upwork,
    iconBg: "#E6DEDD",
    date: "Jan 2023 - Present",
    points: [
      "Develop and maintain websites using programming languages such as HTML, CSS, and JavaScript, and frameworks like React.js and other related technologies.",
      "Collaborate with designers, content creators, and other team members to optimize website and application performance.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to clients.",
    ],
  },
  {
    title: "Frontend/Web Developer",
    company_name: "MIT Full Stack Development with MERN",
    icon: mit,
    iconBg: "#E6DEDD",
    date: "January 2022 - November 2022",
    points: [
      "Food Ordering App  –  Created a food ordering app using Next.js and CSS, implementing PayPal payment and integrating MongoDB, Node.js, and Cookie-based Authentication for backend security, while also developing RESTful APIs using Axios, and implementing state management with an asynchronous Redux store, data fetching, and React hooks in functional components.",
      "AI Image Generation App  -  Developed an AI image generation app using the MERN stack, integrating the OpenAI API to generate realistic images from textual descriptions, implementing React and Vite.js for the frontend with Tailwind CSS for a user-friendly interface, and architecting the backend with Node.js and Express to create a RESTful API that communicates with the OpenAI API, stores user data in a MongoDB database, and manages images on Cloudinary.",
      "JW Bank Full Stack Application  –  Designed responsive web pages using React and TypeScript, integrated Node.js, Firebase Authentication, Firestore, and Hosting to build a full-stack banking app, incorporated Mantine UI and Bootstrap to create visually appealing charts displaying user data, and implemented CI/CD with GitHub Actions and GitHub workflows for seamless deployment on Firebase.",
    ],
  },
  {
    title: "Chinese Immersion Teacher",
    company_name: "Campanelli Elementary School & Adams Junior High School",
    icon: schoolds54,
    iconBg: "#E6DEDD",
    date: "July 2021 - June 2022",
    points: [
      "Worked closely with other teachers weekly in School District Professional Development meetings to create an engaging and supportive learning environment for students.",
      "Developed lesson plans and utilized technology to enhance language learning to engage students.",
      "Established relationships with 150+ students and parents, built a community of trust, resolved conflicts, and gained the School District Ambassador of Excellence Award for the year.",
    ],
  },

  {
    title: "Student",
    company_name: "Renmin University",
    icon: renmin,
    iconBg: "#E6DEDD",
    date: "September 2015 - July 2019",
    points: [
      "Degree  -  Bachelor of Economics and Management",
      "Marketing Intern  -  Conducted analysis on sales data to identify trends and improve sales strategies. ",
      "Marketing Intern  -  Developed and implemented social media marketing campaigns to increase brand awareness.",
      "Retail Associate  -  Collaborated with cross-functional teams to ensure consistent brand messaging and alignment across various channels.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "Jielin is an exceptional web developer who has a deep understanding of web development best practices. She was able to translate my requirements into a visually stunning website that has received many compliments. Thank you, Jielin!",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "Working with Jielin was a fantastic experience. She was professional, and responsive, and delivered a high-quality website that exceeded my expectations. I'm thrilled with the results!",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "I am impressed with Jielin's technical skills and their ability to solve complex web development challenges. She delivered my project on time and with exceptional quality. I definitely recommend Jielin!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Food Ordering App",
    description:
      "The Food Ordering application where the admin can signIn add product to the home page and track orders and products on the orderDetail page. Any custome can chosse their items to add to the cart, then make the payment by cash or Paypal.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "paypal",
        color: "pink-text-gradient",
      },
      {
        name: "restapi",
        color: "purple-text-gradient",
      },
    ],
    image: foodapp,
    source_code_link: "https://github.com/JielinWang/Food-Ordering-App",
  },
  {
    name: "AI Img Generator",
    description:
      "This web application consists on a AI Image Generation application where users can auto generate images based on their typing prompt. Utilized OpenAI API to auto generate images based on user's typing prompt. Then users can share the image to the community, which will render to the home page.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "node",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
      {
        name: "express",
        color: "purple-text-gradient",
      },
    ],
    image: aigeneration,
    source_code_link: "https://github.com/JielinWang/AI-Img-Generation-App",
    source_internet_link: "https://dall-e-bacc.onrender.com/",
  },
  {
    name: "JW Bank",
    description:
      "The online bank app, where users can create an account and sign in, then start to deposit and withdraw their money online. Users can also check the detail of their transitions on the user page.",
    tags: [
      {
        name: "typescript",
        color: "blue-text-gradient",
      },
      {
        name: "bootstrap",
        color: "green-text-gradient",
      },
      {
        name: "firebase",
        color: "pink-text-gradient",
      },
      {
        name: "css",
        color: "purple-text-gradient",
      },
    ],
    image: jwbank,
    source_code_link: "https://github.com/JielinWang/jw-bank-fullstack-app",
    source_internet_link: "https://jw-bank.web.app/",
  },
];

export { services, technologies, experiences, testimonials, projects };
