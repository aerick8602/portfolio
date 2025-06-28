import Project from "@/app/components/project";
import ProjectDetails from "@/app/utils/projectlist";

const Inodepad = () => {
    const data=ProjectDetails.iNotepad;
    const link=ProjectDetails.iNotepadLink;
    return <Project data={data} link={link}></Project>;
  };
  export default Inodepad;
  