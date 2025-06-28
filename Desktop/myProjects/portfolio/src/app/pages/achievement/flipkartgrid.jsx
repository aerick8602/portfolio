import Achievement from "@/app/components/achievement";
import AchievementList from "@/app/utils/achievement";


const FlipkartGrid = () => {
    const data = AchievementList[0];
    return <Achievement data={data} />;
  };
  
  export default FlipkartGrid;
  