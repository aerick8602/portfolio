import About from "../pages/about";
import Dsa from "../pages/achievement/dsa";
import FlipkartGrid from "../pages/achievement/flipkartgrid";
import Contact from "../pages/contact";
import Btech from "../pages/education/btech";
import Matriculation from "../pages/education/matriculation";
import SrSecondary from "../pages/education/srsecondary";
import FullStackIntern from "../pages/experience/fullstackintern";
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
    key: "about",
    icon: "/svg/info-svgrepo-com.svg",
    isOpen: false,
    component: <About />,
  },
  {
    id: 2,
    name: "resume",
    key: "resume",
    icon: "/png/cv.png",
    isOpen: false,
    component: <Resume />,
  },
  {
    id: 3,
    name: "skills",
    key: "skills",
    icon: "/png/tie.png",
    isOpen: false,
    component: <Skills/>,
  },
  {
    id: 4,
    name: "visulax",
    key: "visulax",
    icon: "/png/html.png",
    isOpen: false,
    component: <Visulax/>,
  },
  {
    id: 5,
    name: "myportfolio",
    key: "myportfolio",
    icon: "/png/css.png",
    isOpen: false,
    component: <MyPortfolio />,
  },
  {
    id: 6,
    name: "clerk_template",
    key: "clerk_template",
    icon: "/png/js.png",
    isOpen: false,
    component: <ClerkTemplate />,
  },
  {
    id: 7,
    name: "inotepad",
    key: "inotepad",
    icon: "/svg/react_icon.svg",
    isOpen: false,
    component: <Inotepad />,
  },
  {
    id: 8,
    name: "eBook_Haven",
    key: "eBook_Haven",
    icon: "/svg/react_icon.svg",
    isOpen: false,
    component: <EBookHaven/>,
  },
  {
    id: 9,
    name: "job_scraper",
    key: "job_scraper",
    icon: "/png/python.png",
    isOpen: false,
    component: <JobScraper />,
  },
  {
    id: 10,
    name: "btech",
    key: "btech",
    icon: "/png/writing.png",
    isOpen: false,
    component: <Btech />,
  },
  {
    id: 11,
    name: "sr_secondary",
    key: "sr_secondary",
    icon: "/png/writing.png",
    isOpen: false,
    component: <SrSecondary />,
  },
  {
    id: 12,
    name: "matriculation",
    key: "matriculation",
    icon: "/png/writing.png",
    isOpen: false,
    component: <Matriculation />,
  },
  {
    id: 13,
    name: "dsa",
    key: "dsa",
    icon: "/png/c-.png",
    isOpen: false,
    component: <Dsa />,
  },
  {
    id: 14,
    name: "flipkart_grid",
    key: "flipkart_grid",
    icon: "/png/favourites.png",
    isOpen: false,
    component: <FlipkartGrid />,
  },
  {
    id: 15,
    name: "contact",
    key: "contact",
    icon: "/png/phone.png",
    isOpen: false,
    component: <Contact />,
  },
  {
    id: 16,
    name: "fullstack.intern",
    key: "fullstack.intern",
    icon: "/png/certificate.png",
    isOpen: false,
    component: <FullStackIntern />,
  },
];

export default files;
