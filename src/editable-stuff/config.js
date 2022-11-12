// Navigation Bar SECTION
const navBar = {
  show: true,
};

// Main Body SECTION
const mainBody = {
  gradientColors: "#4484ce, #1ad7c0, #ff9b11, #9b59b6, #ff7f7f, #ecf0f1",
  firstName: "Brad",
  middleName: "",
  lastName: "Webb",
  message: " Data Engineer | Analytics Analyst | Teaching Assistant | Nerd | Traveler | Mentor ",
  icons: [
    {
      image: "fa-github",
      url: "https://github.com/BradWebb101",
    },
    {
      image: "fa-linkedin",
      url: "https://www.linkedin.com/in/brad-webb-101/",
    },
  ],
};

// ABOUT SECTION
// If you want the About Section to show a profile picture you can fill the profilePictureLink either with:
//a) your Instagram username
//      i.e:profilePictureLink:"johnDoe123",
//b) a link to an hosted image
//      i.e:profilePictureLink:"www.picturesonline.com/johnDoeFancyAvatar.jpg",
//c) image in "editable-stuff" directory and use require("") to import here,
//      i.e: profilePictureLink: require("../editable-stuff/hashirshoaeb.png"),
//d) If you do not want any picture to be displayed, just leave it empty :)
//      i.e: profilePictureLink: "",
// For Resume either provide link to your resume or import from "editable-stuff" directory
//     i.e resume: require("../editable-stuff/resume.pdf"),
//         resume: "https://docs.google.com/document/d/13_PWdhThMr6roxb-UFiJj4YAFOj8e_bv3Vx9UHQdyBQ/edit?usp=sharing",

const about = {
  show: true,
  heading: "About Me",
  imageLink: require("../editable-stuff/headshot.png"),
  imageSize: 375,
  message:
    " I’m a specialist Cloud Data/Analytics Engineer, working with AWS and Snowflake. My goal is to overcome that blank stare people give you when you describe your role in more detail than 'Data'. I love problem solving, overcoming challenges, am a vocal advocate for robust data policies and a strong team culture carrier. ",
  resume: "",
};

// PROJECTS SECTION
// Setting up project lenght will automatically fetch your that number of recently updated projects, or you can set this field 0 to show none.
//      i.e: reposLength: 0,
// If you want to display specfic projects, add the repository names,
//      i.e ["repository-1", "repo-2"]
const repos = {
  show: true,
  heading: "Recent Projects",
  gitHubUsername: "bradwebb101", //i.e."johnDoe12Gh"
  reposLength: 0,
  specificRepos: ['geekle_smart_s3_bucket','frenchconcession', 's3BucketCreation','portfolio_website'],
};

// Leadership SECTION
const leadership = {
  show: false,
  heading: "Leadership",
  message:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Vitae auctor eu augue ut lectus arcu bibendum at varius. Libero justo laoreet sit amet cursus sit amet. Imperdiet dui accumsan sit amet nulla facilisi morbi. At auctor urna nunc id. Iaculis urna id volutpat lacus laoreet non curabitur gravida. Et magnis dis parturient montes nascetur ridiculus mus mauris. In nisl nisi scelerisque eu ultrices vitae auctor. Mattis nunc sed blandit libero volutpat sed cras ornare. Pulvinar neque laoreet suspendisse interdum consectetur libero.",
  images: [
    { 
      img: require("../editable-stuff/hashirshoaeb.png"), 
      label: "First slide label", 
      paragraph: "Nulla vitae elit libero, a pharetra augue mollis interdum." 
    },
    { 
      img: require("../editable-stuff/hashirshoaeb.png"), 
      label: "Second slide label", 
      paragraph: "Nulla vitae elit libero, a pharetra augue mollis interdum." 
    },
  ],
  imageSize: {
    width:"615",
    height:"450"
  }
};

// SKILLS SECTION
const skills = {
  show: true,
  heading: "Capabilities",
  hardSkills: [
    { name: "\u2022 Python" },
    { name: "\u2022 Javascript & Typescript" },
    { name: "\u2022 Databases" },
    { name: "\u2022 DevOps" },
    { name: "\u2022 AWS" },
    { name: "\u2022 Snowflake" },
    { name: "\u2022 Analytics" },
    { name: "\u2022 Timeseries Forecasting" },
  ],
  softSkills: [
    { name: "\u2022 AWS (CCP, Developer), 2020-2022" },
    { name: "\u2022 Snowpro (Core, Advanced: Data Engineer), 2022" },
    { name: "\u2022 Masters of Applied Finance, QUT, 2018" },
    { name: "\u2022 Bachelors of Business: Finance, QUT, 2014" },
  ],
};

// GET IN TOUCH SECTION
const getInTouch = {
  show: true,
  heading: "Get In Touch",
  message1:
    "I am currently on a 6 month career break, traveling South East Asia.",
  message2: "Surfing, Jui Jitsu and Coding.",
  message3: 'To contact me, send me an email. ',
  email: "bradwebb101@outlook.com",
};

const experiences = {
  show: false,
  heading: "Experiences",
  data: [
    {
      role: 'Software Engineer',// Here Add Company Name
      companylogo: require('../assets/img/dell.png'),
      date: 'June 2018 – Present',
    },
    {
      role: 'Front-End Developer',
      companylogo: require('../assets/img/boeing.png'),
      date: 'May 2017 – May 2018',
    },
  ]
}

// Blog SECTION
// const blog = {
//   show: false,
// };

export { navBar, mainBody, about, repos, skills, leadership, getInTouch, experiences };
