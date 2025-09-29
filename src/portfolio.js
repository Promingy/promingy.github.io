/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Corbin Ainsworth",
  title: "Hi all, I'm Corbin",
  subTitle: emoji(
    "A passionate Full Stack Software Developer 🚀 having an experience of building Web and Mobile applications with JavaScript / Reactjs / Nodejs / React Native and some other cool libraries and frameworks."
  ),
  resumeLink:
    "https://drive.google.com/file/d/1ofFdKF_mqscH8WvXkSObnVvC9kK7Ldlu/view?usp=sharing", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/Promingy",
  linkedin: "https://www.linkedin.com/in/corbinainsworth/",
  gmail: "ainsworthcorbin@gmail.com",
  // gitlab: "https://gitlab.com/saadpasta",
  // facebook: "https://www.facebook.com/saad.pasta7",
  medium: "https://medium.com/@ainsworthcorbin",
  // stackoverflow: "https://stackoverflow.com/users/10422806/saad-pasta",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "CRAZY FULL STACK DEVELOPER WHO WANTS TO EXPLORE EVERY TECH STACK",
  skills: [
    emoji(
      "⚡ Develop highly interactive Front end / User Interfaces for your web and mobile applications"
    ),
    emoji("⚡ Progressive Web Applications ( PWA ) in normal and SPA Stacks"),
    emoji(
      "⚡ Integration of third party services such as Firebase/ AWS / Digital Ocean"
    )
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "devicon-javascript-plain"
    },
    {
      skillName: "TypeScript",
      fontAwesomeClassname: "devicon-typescript-plain"
    },
    {
      skillName: "Python",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "Golang",
      fontAwesomeClassname: "fab fa-golang"
    },
    {
      skillName: "React",
      fontAwesomeClassname: "fab fa-react"
    },
    {
      skillName: "Redux",
      fontAwesomeClassname: "devicon-redux-original"
    },
    {
      skillName: "Django",
      fontAwesomeClassname: "devicon-django-plain"
    },
    {
      skillName: "SQL",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "HTML-5",
      fontAwesomeClassname: "fab fa-html5"
    },
    {
      skillName: "CSS3",
      fontAwesomeClassname: "fab fa-css3-alt"
    },
    {
      skillName: "SASS",
      fontAwesomeClassname: "fab fa-sass"
    },
    {
      skillName: "AWS",
      fontAwesomeClassname: "fab fa-aws"
    },
    {
      skillName: "Zustand",
      fontAwesomeClassname: "devicon-zustand-plain"
    },
    {
      skillName: "Three.js",
      fontAwesomeClassname: "devicon-threejs-original"
    },
    {
      skillName: "Docker",
      fontAwesomeClassname: "fab fa-docker"
    },
    {
      skillName: "Nginx",
      fontAwesomeClassname: "devicon-nginx-plain"
    },
    {
      skillName: "Git",
      fontAwesomeClassname: "devicon-git-plain"
    },
    {
      skillName: "OAuth",
      fontAwesomeClassname: "devicon-oauth-plain"
    },
    {
      skillName: "PostgreSQL",
      fontAwesomeClassname: "devicon-postgresql-plain"
    },
    {
      skillName: "PostMan",
      fontAwesomeClassname: "devicon-postman-plain"
    },
    {
      skillName: "Node",
      fontAwesomeClassname: "fab fa-node"
    },
    {
      skillName: "NPM",
      fontAwesomeClassname: "fab fa-npm"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "AppAcademy",
      logo: require("./assets/images/aALogo.png"),
      subHeader: "Software Engineering & Computer Science",
      duration: "August 2023 - January 2024",
      desc: "Completed an intensive Software Engineering program with a focus on full-stack web development and computer science fundamentals.",
      descBullets: [
          "Built multiple full-stack web applications using JavaScript, React, Node.js, and SQL.",
          "Collaborated on team projects following Agile and Git workflows.",
          "Learned advanced algorithms, data structures, and best practices for software development.",
          "Gained experience with testing, deployment, and debugging in real-world scenarios."
      ]
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Frontend/Design", //Insert stack or technology you have experience in
      progressPercentage: "90%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Backend",
      progressPercentage: "90%"
    },
    {
      Stack: "Programming",
      progressPercentage: "90%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Front-End Developer",
      company: "Innovative Health Solutions",
      companylogo: require("./assets/images/ihs.png"),
      date: "Feb 2025 – Present",
      desc: "Developed and maintained front-end components for health-related web applications, improving UI responsiveness and user engagement.",
      descBullets: [
        "Implemented dynamic dashboards using React and Redux, increasing real-time data visibility by 40%.",
        "Collaborated with UX designers to enhance user experience and accessibility compliance.",
        "Optimized front-end performance, reducing load times by 30%."
      ]
    },
    {
      role: "Mobile & Front-End Developer",
      company: "GreenStand",
      companylogo: require("./assets/images/greenstand.webp"),
      date: "September 2025 – Present",
      desc: "Contributing to the development of GreenStand's mobile wallet app and associated front-end components.",
      descBullets: [
        "Developing mobile features and UI components for GreenStand’s wallet app using React Native.",
        "Implementing front-end functionality for web dashboards and client-facing applications.",
        "Collaborating with the team on design and code reviews following Agile workflows."
      ]
    },
    {
      role: "Full-Stack Software Engineer",
      company: "Iota Labs",
      companylogo: require("./assets/images/iota_logo.jpeg"),
      date: "September 2024 – November 2024",
      desc: "Contributed to the development of early-stage software products, implementing core features and debugging critical issues.",
      descBullets: [
        "Built dynamic web pages with Django templating for front-end functionality.",
        "Developed back-end features including database models, views, and APIs.",
        "Implemented AI-driven features into applications, enhancing automation and user experience.",
        "Learned Django best practices, deployment, and application architecture."
      ]
    },
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: true // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  // Green Street Global
  title: "Big Projects",
  subtitle: "SOME STARTUPS AND COMPANIES THAT I HELPED TO CREATE THEIR TECH",
  projects: [
    {
      image: require("./assets/images/gsg.png"),
      projectName: "GreenStreetGlobal",
      projectDesc: "Developed key features for a sustainable technology platform, focusing on web applications and dashboards to support eco-friendly initiatives.",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://www.greenstreetglobal.com/"
        }
      ]
    },
    {
      image: require("./assets/images/recipeRendezvous.png"),
      projectName: "ReceipeRendezvous",
      projectDesc: "Built a full-stack recipe-sharing web application with user authentication, searchable recipes, and interactive features using React and Node.js.",
      footerLink: [
        {
          name: "Visit Website",
          url: "http://recipes.corbinainsworth.com/"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/pixelChat.png"),
      projectName: "PixelChat",
      projectDesc: "Created a real-time chat application with Node.js and WebSocket integration, enabling instant messaging between users in a responsive interface.",
      footerLink: [
        {
          name: "Visit Website",
          url: "http://pixelchat.corbinainsworth.com/"
        }
      ]
    },
    {
      image: require("./assets/images/shiori.webp"),
      projectName: "Shiori",
      projectDesc:"Developing a mobile-first language learning app with TypeScript, React Native, and DRF. Features a spaced repetition system for learning the Japanese writing system, an AI chat tailored to the user’s current skill level, and a book analyzer that uses custom algorithms to extract vocabulary and pronunciation from Japanese PDFs, while generating chapter summaries and comprehension questions.",
      footerLink: [
        {
          name: "Coming Soon",
          // url: "http://pixelchat.corbinainsworth.com/"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achievementsCards: [
    {
      title: "Google Code-In Finalist",
      subtitle:
        "First Pakistani to be selected as Google Code-in Finalist from 4000 students from 77 different countries.",
      image: require("./assets/images/codeInLogo.webp"),
      imageAlt: "Google Code-In Logo",
      footerLink: [
        {
          name: "Certification",
          url: "https://drive.google.com/file/d/0B7kazrtMwm5dYkVvNjdNWjNybWJrbndFSHpNY2NFV1p4YmU0/view?usp=sharing"
        },
        {
          name: "Award Letter",
          url: "https://drive.google.com/file/d/0B7kazrtMwm5dekxBTW5hQkg2WXUyR3QzQmR0VERiLXlGRVdF/view?usp=sharing"
        },
        {
          name: "Google Code-in Blog",
          url: "https://opensource.googleblog.com/2019/01/google-code-in-2018-winners.html"
        }
      ]
    },
    {
      title: "Google Assistant Action",
      subtitle:
        "Developed a Google Assistant Action JavaScript Guru that is available on 2 Billion devices world wide.",
      image: require("./assets/images/googleAssistantLogo.webp"),
      imageAlt: "Google Assistant Action Logo",
      footerLink: [
        {
          name: "View Google Assistant Action",
          url: "https://assistant.google.com/services/a/uid/000000100ee688ee?hl=en"
        }
      ]
    },

    {
      title: "PWA Web App Developer",
      subtitle: "Completed Certifcation from SMIT for PWA Web App Development",
      image: require("./assets/images/pwaLogo.webp"),
      imageAlt: "PWA Logo",
      footerLink: [
        {name: "Certification", url: ""},
        {
          name: "Final Project",
          url: "https://pakistan-olx-1.firebaseapp.com/"
        }
      ]
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",
  displayMediumBlogs: "true", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      url: "https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae",
      title: "Win a Google Assistant Tshirt and $200 in Google Cloud Credits",
      description:
        "Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?"
    },
    {
      url: "https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e",
      title: "Why REACT is The Best?",
      description:
        "React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies."
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  talks: [
    {
      title: "Build Actions For Google Assistant",
      subtitle: "Codelab at GDG DevFest Karachi 2019",
      slides_url: "https://bit.ly/saadpasta-slides",
      event_url: "https://www.facebook.com/events/2339906106275053/"
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  ],
  display: false // Set false to hide this section, defaults to true
};

// Resume Section
const resumeSection = {
  title: "Resume",
  subtitle: "Feel free to download my resume",

  // Please Provide with Your Podcast embeded Link
  display: true // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "+1 (305) 570-8392",
  email_address: "ainsworthcorbin@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "elonmusk", //Replace "twitter" with your twitter username without @
  display: false // Set true to display this section, defaults to false
};

const isHireable = true; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable,
  resumeSection
};
