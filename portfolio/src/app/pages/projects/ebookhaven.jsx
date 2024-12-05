import Project from "@/app/components/project";
import ProjectDetails from "@/app/utils/projectlist";

const EBookHaven = () => {
    const data=ProjectDetails.eBookHaven;
    return <Project data={data}></Project>;
  };
  export default EBookHaven;
  