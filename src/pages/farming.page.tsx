import Checkbox from "../components/Checkbox";
import JewelIcon from "../assets/jewel_icon-lg.svg";
import { useState } from "react";
import Button from "../components/Button";

interface FarmingItem {
  checked: boolean;
  day: number;
  speed: number;
}

const FarmingPage = () => {
  const [farmingData, setFarmingData] = useState<FarmingItem[]>([
    { checked: true, day: 1, speed: 0.001 },
    { checked: false, day: 2, speed: 0.002 },
    { checked: false, day: 3, speed: 0.002 },
    { checked: false, day: 4, speed: 0.002 },
    { checked: false, day: 5, speed: 0.002 },
  ]);

  return (
    <>
      <div className="bg-secondary py-2 rounded-2xl flex flex-col items-center">
        <h5 className="text-white text-xl text-center">Daily check-In</h5>
        <p className="text-xs text-primary text-center mt-1">
          Progress will be lost if you miss a day!
        </p>
        <span className="px-6 py-2 bg-black w-fit rounded-2xl mt-3">
          22:23:15
        </span>
      </div>

      {farmingData.map((item, index) => (
        <div
          className={`relative bg-secondary hover:border border-primary p-3 mt-5 rounded-3xl flex farming-item ${
            item.checked ? "opacity-50" : ""
          }`}
          key={`farming-item-${index}`}
        >
          <Checkbox checked={item.checked} />
          <div className="ml-2">
            <div className="font-medium mb-1">Day {item.day}</div>
            <div className="font-normal text-xs">{item.speed} / 1s</div>
          </div>
          <div className="flex-1" />
          <div className="flex items-center gap-1">
            <div className="w-5 h-5 bg-jewel rounded flex items-center justify-center">
              <img src={JewelIcon} alt="Jewel" width={15} height={15} />
            </div>
            SOON
          </div>
          <div className="absolute w-full h-full top-0 left-0 justify-center items-center rounded-3xl check-hover hidden hover:bg-[#00000088]">
            <Button
              className="px-12 py-3"
              onClick={() => {
                farmingData[index].checked = !farmingData[index].checked;
                setFarmingData([...farmingData]);
              }}
            >
              OK
            </Button>
          </div>
        </div>
      ))}
    </>
  );
};

export default FarmingPage;
