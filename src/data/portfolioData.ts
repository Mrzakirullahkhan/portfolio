export type Project = {
  slug: string;
  title: string;
  description: string;
  tech: string[];
  image: string;
  liveUrl?: string;
  codeUrl?: string;
};

const portfolio = {
  meta: {
    name: "Zakir Ullah",
    title: "Frontend Developer / MERN Stack Developer",
    email: "mrzak802@gmail.com",
    github: "#", // placeholder
    linkedin: "#" // placeholder
  },

  hero: {
    tagline: "I build clean, responsive web apps with React and the MERN stack.",
    avatar: "/avatar.png"
  },

  about: {
    summary:
      "Passionate software engineering student dedicated to enhancing technical expertise and problem-solving abilities. Eager to learn new technologies and transform ideas into impactful, user-friendly software solutions."
  },

  skills: [
    { name: "React.js", level: 85 },
    { name: "Next.js", level: 80 },
    { name: "JavaScript", level: 90 },
    { name: "Tailwind CSS", level: 85 },
    { name: "Node.js", level: 75 },
    { name: "Express.js", level: 70 },
    { name: "MongoDB", level: 70 },
    { name: "Firebase", level: 60 },
    { name: "Git", level: 80 }
  ],

  experience: [
    {
      company: "Corporative Prism",
      role: "MERN Stack Developer",
      start: "May 2024",
      end: "Present",
      details: [
        "Build scalable and responsive web applications using the MERN stack.",
        "Collaborate in an agile team environment.",
        "Implement modern UI/UX best practices."
      ]
    },
    {
      company: "Call Center",
      role: "Customer Service Representative",
      start: "May 2023",
      end: "May 2024",
      details: [
        "Managed client inquiries with professionalism.",
        "Provided efficient customer support and service coordination."
      ]
    }
  ],

  education: [
    {
      degree: "B.S. in Software Engineering",
      institution: "Umaer Basha Institute of Information Technology (UBIT), Karachi University",
      period: "2021–2024"
    },
    {
      degree: "Intermediate (Computer Science)",
      institution: "Govt. College Forman Nazimabad",
      period: "2018–2019"
    },
    {
      degree: "Matriculation (Science)",
      institution: "St. Lawrence Grammar School",
      period: "2015–2016"
    },
    {
      degree: "Diploma in Web & Mobile Development",
      institution: "Mass IT Technology",
      period: ""
    }
  ],

  projects: <Project[]>[
    {
      slug: "mern-ecommerce",
      title: "MERN E-commerce (Placeholder)",
      description:
        "A full-stack e-commerce demo built with MongoDB, Express, React and Node. Features product listing, cart and order flow.",
      tech: ["React", "Node.js", "Express", "MongoDB", "Tailwind"],
      image: "/projects/project-1.png",
      liveUrl: "#",
      codeUrl: "#"
    },
    {
      slug: "todo-app",
      title: "Realtime Todo App",
      description: "A realtime todo application using React and Firebase.",
      tech: ["React", "Firebase", "Tailwind"],
      image: "/placeholder.png",
      liveUrl: "#",
      codeUrl: "#"
    }
  ]
};

export default portfolio;
