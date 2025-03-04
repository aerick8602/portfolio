import Project from "@/app/components/project";
import ProjectDetails from "@/app/utils/projectlist";

const ReferralShala = () => {
  const data = ProjectDetails.ReferralShala;
  const link = ProjectDetails.ReferralShalaLink;
  return <Project data={data} link={link}></Project>;
};
export default ReferralShala;
