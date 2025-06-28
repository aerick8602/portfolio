import Project from "@/app/components/project";
import ProjectDetails from "@/app/utils/projectlist";

const CloudHive = () => {
  const data = ProjectDetails.CloudHive;
  const link = ProjectDetails.CloudHiveLink;
  return <Project data={data} link={link}></Project>;
};
export default CloudHive;
