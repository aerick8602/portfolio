import Project from "@/app/components/project";
import ProjectDetails from "@/app/utils/projectlist";

const ClerkTemplate = () => {
    const data=ProjectDetails.clerktemplate;
    const link=ProjectDetails.clerktemplateLink;
    return <Project data={data} link={link}></Project>;
  };
  export default ClerkTemplate;
  