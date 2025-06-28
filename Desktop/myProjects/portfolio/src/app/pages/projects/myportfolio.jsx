import Project from "@/app/components/project";
import ProjectDetails from "@/app/utils/projectlist";

const MyPortfolio = () => {
  const data=ProjectDetails.myPortfolio;
    return <Project data={data}></Project>
  };
  
  export default MyPortfolio;
  