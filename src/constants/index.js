import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    html,
    css,
    reactjs,
    tailwind,
    nodejs,
    mongodb,
    git,
    docker,
    java,
    springboot,
    aws,
    mySQL,
    
    kittivaasal,
    racloop,

    adminDashboard,
    portfolio,
    trollvilla,
    erp,

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
      icon: mobile,
    },
    {
      title: "Backend Developer",
      icon: backend,
    },
    {
      title: "Java Developer",
      icon: creator,
    },
  ];
  
  const technologies = [
    {
      name: "Java",
      icon: java,
    },
    {
      name: "Springboot",
      icon: springboot,
    },
    {
      name: "AWS",
      icon: aws,
    },
    {
      name: "MySQL",
      icon: mySQL,
    },
    {
      name: "MongoDB",
      icon: mongodb,
    },
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "React JS",
      icon: reactjs,
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
      name: "git",
      icon: git,
    },
    {
      name: "docker",
      icon: docker,
    },
  ];
  
  const experiences = [
    {
      title: "Software Engineer",
      company_name: "Racloop Technologies PVT. LTD.",
      icon: racloop,
      iconBg: "#383E56",
      date: "Feb 2023 - Present",
      points: [
        "Developing and maintaining applications using Java, Springboot and other related technologies.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
    {
      title: "ML Engineer Intern",
      company_name: "Kittivaasal Technologies PVT. LTD.",
      icon: kittivaasal,
      iconBg: "#E6DEDD",
      date: "Feb 2022 - May 2022",
      points: [
        "Developed and maintaining Android applications using Java, Android Studio and other related technologies.",
        "Implemented machine learning algotithms for feed recommendations.",
        "Utilised opportunity to learn and implement design skills.",
        "Participated in Brainstorming session and gained exposure to professional work environment.",
      ],
    }
  ];
  
  const testimonials = [
    {
      testimonial:
        "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
      name: "Sara Lee",
      designation: "CFO",
      company: "Acme Co",
      image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
      testimonial:
        "I've never met a web developer who truly cares about their clients' success like Rick does.",
      name: "Chris Brown",
      designation: "COO",
      company: "DEF Corp",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
      testimonial:
        "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
      name: "Lisa Wang",
      designation: "CTO",
      company: "456 Enterprises",
      image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
  ];
  
  const projects = [
    {
      name: "Admin Dashboard",
      description:
        "Web-based platform that allows users to view and analyse sales data.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "mongodb",
          color: "green-text-gradient",
        },
        {
          name: "tailwind",
          color: "pink-text-gradient",
        },
      ],
      image: adminDashboard,
      source_code_link: "https://github.com/",
      live_link: "https://dashboard-frontend-3fij.onrender.com",
    },
    {
      name: "3d Portfolio",
      description:
        "Web application that illustrate users portfolio.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "restapi",
          color: "green-text-gradient",
        },
        {
          name: "tailwindcss",
          color: "pink-text-gradient",
        },
      ],
      image: portfolio,
      source_code_link: "https://github.com/akarshsahani/portfolio",
      live_link: "https://akashsahani.com",
    },
    {
      name: "TrollVilla",
      description:
        "A comprehensive backend app including Student portal, Faculties Portal and Management portal to create, read, update and delete their details.",
      tags: [
        {
          name: "java",
          color: "blue-text-gradient",
        },
        {
          name: "androidstudio",
          color: "green-text-gradient",
        },
        {
          name: "firebase",
          color: "pink-text-gradient",
        },
      ],
      image: trollvilla,
      source_code_link: "https://play.google.com/store/apps/details?id=com.shivaconsulting.memesapp&hl=en&gl=US",
      live_link: "https://play.google.com/store/apps/details?id=com.shivaconsulting.memesapp&hl=en&gl=US",
    },
    {
      name: "ERP Management",
      description:
        "A comprehensive backend app including Student portal, Faculties Portal and Management portal to create, read, update and delete their informations.",
      tags: [
        {
          name: "java",
          color: "blue-text-gradient",
        },
        {
          name: "Springboot",
          color: "green-text-gradient",
        },
        {
          name: "sql",
          color: "pink-text-gradient",
        },
      ],
      image: erp,
      source_code_link: "https://github.com/akarshsahani/ERP-Management",
      live_link: "https://github.com/akarshsahani/ERP-Management",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };