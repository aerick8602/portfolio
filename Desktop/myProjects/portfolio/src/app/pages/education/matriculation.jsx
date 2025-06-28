import Education from "@/app/components/education";
import EducationList from "@/app/utils/educationlist";

const Matriculation = () => {
    const data = EducationList[2];
    return <Education data={data} />;
  };
  
  export default Matriculation;
  
  

  