import XIcon from "../assets/twitter_icon.png";
import TelegramIcon from "../assets/telegram_icon.png";
import JewelIcon from "../assets/jewel_icon.png";
import Button from "../components/Button";

const followItems = [
  { type: "tg", message: "Follow TON Station", score: 100 },
  { type: "x", message: "Follow TON Station on X", score: 100 },
  { type: "tg", message: "Follow SIDUS HEROES", score: 100 },
  { type: "x", message: "Follow SIDUS HEROES on X", score: 100 },
  { type: "x", message: "Follow SuperVerse on X", score: 300 },
];

const FollowingPage = () => {
  return (
    <>
      <div className="flex justify-between">
        <h6 className="text-primary text-sm font-medium">Social</h6>
        <span className="font-medium text-sm">6</span>
      </div>
      <div className="mt-5 flex flex-col gap-3">
        {followItems.map((item, index) => (
          <div
            key={`description-item-${index}`}
            className="bg-secondary p-1 rounded-3xl flex justify-between items-center"
          >
            <div className="flex gap-3">
              <div className="w-16 h-16 flex justify-center items-center bg-black text-primary rounded-3xl text-2xl">
                <img
                  src={item.type === "tg" ? TelegramIcon : XIcon}
                  alt="Platform Icon"
                />
              </div>
              <div className="flex flex-col justify-center">
                <p className="font-medium">{item.message}</p>
                <p className="text-sm text-[#DCDCDC] font-normal flex gap-2 items-center">
                  <img width={14} height={14} src={JewelIcon} alt="Jewel" />
                  {item.score}
                </p>
              </div>
            </div>
            <Button className="px-3 py-1 mr-2">Start</Button>
          </div>
        ))}
      </div>
    </>
  );
};

export default FollowingPage;
