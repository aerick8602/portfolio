import Project from "@/app/components/project";
import ProjectDetails from "@/app/utils/projectlist";

const Amritam = () => {
    const data=ProjectDetails.Amritam;
    const link=ProjectDetails.AmritamLink;
    return <Project data={data} link={link}></Project>;
  };
  export default Amritam;
  