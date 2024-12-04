import About from "../pages/about";
import FullStackInternship from "../pages/achievement/certifications/full_stack_internship";
import Dsa from "../pages/achievement/dsa";
import FlipkartGrid from "../pages/achievement/flipkartgrid";
import Contact from "../pages/contact";
import Btech from "../pages/education/btech";
import Matriculation from "../pages/education/matriculation";
import SrSecondary from "../pages/education/srsecondary";
import FullStackIntern from "../pages/experience/fullstackintern";
import Amritam from "../pages/projects/Amritam";
import ClerkTemplate from "../pages/projects/clerktemplate";
import EBookHaven from "../pages/projects/ebookhaven";
import Inotepad from "../pages/projects/inotepad";
import JobScraper from "../pages/projects/jobscraper";
import MyPortfolio from "../pages/projects/myportfolio";
import Visulax from "../pages/projects/visulax";
import Resume from "../pages/resume";
import Skills from "../pages/skills";
const files = [
  {
    id: 1,
    name: "about",
    icon: "/svg/info-svgrepo-com.svg",
    isactive: false,
    isOpen: false,
    component: <About />,
    extension: ".md",
  },
  {
    id: 2,
    name: "resume",
    icon: "/png/cv.png",
    isactive: false,
    isOpen: false, 
    component: <Resume />,
    extension: ".cv",
  },
  {
    id: 3,
    name: "skills-lock",
    icon: "/png/tie.png",
    isactive: false,
    isOpen: false, 
    component: <Skills />,
    extension: ".json",
  },
  {
    id: 4,
    name: "visulax",
    icon: "/png/html.png",
    isactive: false,
    isOpen: false, 
    component: <Visulax />,
    extension: ".html",
  },
  {
    id: 5,
    name: "myportfolio",
    icon: "/png/css.png",
    isactive: false,
    isOpen: false, 
    component: <MyPortfolio />,
    extension: ".css",
  },
  {
    id: 6,
    name: "clerk_template",
    icon: "/png/js.png",
    isactive: false,
    isOpen: false, 
    component: <ClerkTemplate />,
    extension: ".js",
  },
  {
    id: 7,
    name: "inotepad",
    icon: "/svg/react_icon.svg",
    isactive: false,
    isOpen: false, 
    component: <Inotepad />,
    extension: ".jsx",
  },
  {
    id: 8,
    name: "eBook_Haven",
    icon: "/svg/react_icon.svg",
    isactive: false,
    isOpen: false, 
    component: <EBookHaven />,
    extension: ".jsx",
  },
  {
    id: 9,
    name: "job_scraper",
    icon: "/png/python.png",
    isactive: false,
    isOpen: false, 
    component: <JobScraper />,
    extension: ".py",
  },
  {
    id: 10,
    name: "btech",
    icon: "/png/writing.png",
    isactive: false,
    isOpen: false, 
    component: <Btech />,
    extension: ".txt",
  },
  {
    id: 11,
    name: "sr_secondary",
    icon: "/png/writing.png",
    isactive: false,
    isOpen: false, 
    component: <SrSecondary />,
    extension: ".txt",
  },
  {
    id: 12,
    name: "matriculation",
    icon: "/png/writing.png",
    isactive: false,
    isOpen: false, 
    component: <Matriculation />,
    extension: ".txt",
  },
  {
    id: 13,
    name: "dsa",
    icon: "/png/c-.png",
    isactive: false,
    isOpen: false, 
    component: <Dsa />,
    extension: ".cpp",
  },
  {
    id: 14,
    name: "flipkart",
    icon: "/png/favourites.png",
    isactive: false,
    isOpen: false,
    component: <FlipkartGrid />,
    extension: ".grid",
  },
  {
    id: 15,
    name: "contact",
    icon: "/png/phone.png",
    isactive: false,
    isOpen: false, 
    component: <Contact />,
    extension: ".json",
  },
  {
    id: 16,
    name: "fullstack",
    icon: "/png/certificate.png",
    isactive: false,
    isOpen: false,
    component: <FullStackIntern />,
    extension: ".intern",
  },
  {
    id: 17,
    name: "intership",
    icon: "/png/doc.png",
    isactive: false,
    isOpen: false, 
    component: <FullStackInternship />,
    extension: ".pdf",
  },
  {
    id: 18,
    name: "Amritam",
    icon: "/svg/react_icon.svg",
    isactive: false,
    isOpen: false, 
    component: <Amritam/>,
    extension: ".jsx",
  },
];

export default files;

