import Education from "@/app/components/education";
import EducationList from "@/app/utils/educationlist";

const SrSecondary = () => {
    const data = EducationList[1];
    return <Education data={data} />;
  };
  
  export default SrSecondary;

  