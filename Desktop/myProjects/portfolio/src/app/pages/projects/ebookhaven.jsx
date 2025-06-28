import Project from "@/app/components/project";
import ProjectDetails from "@/app/utils/projectlist";

const EBookHaven = () => {
    const data=ProjectDetails.eBookHaven;
    const link=ProjectDetails.eBookHavenLink;
    return <Project data={data} link={link}></Project>;
  };
  export default EBookHaven;
  