import Achievement from "@/app/components/achievement";
import AchievementList from "@/app/utils/achievement";


const Dsa = () => {
    const data = AchievementList[1];
    return <Achievement data={data} />;
  };
  
  export default Dsa;
  