import Project from "@/app/components/project";
import ProjectDetails from "@/app/utils/projectlist";

const Inodepad = () => {
    const data=ProjectDetails.iNotepad;
    return <Project data={data}></Project>;
  };
  export default Inodepad;
  