import { statItems } from "../../constants";
import Countup from "../ui/Countup";

const Stats = () => {
  return (
    <div className="px-10 lg:px-20">
      <div className="grid-3-cols mx-auto">
        {statItems.map((item) => (
          <Countup key={item.number} text={item.text} end={item.number} />
        ))}
      </div>
    </div>
  );
};

export default Stats;
