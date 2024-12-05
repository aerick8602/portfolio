import Project from "@/app/components/project";
import ProjectDetails from "@/app/utils/projectlist";

const ClerkTemplate = () => {
    const data=ProjectDetails.clerktemplate;
    return <Project data={data}></Project>;
  };
  export default ClerkTemplate;
  