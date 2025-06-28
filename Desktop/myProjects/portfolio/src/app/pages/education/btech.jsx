import Education from "@/app/components/education";
import EducationList from "@/app/utils/educationlist";

const Btech = () => {
    const data = EducationList[0];
    return <Education data={data} />;
  };
  
  export default Btech;
  