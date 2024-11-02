import UserIcon from "../assets/user_icon.png";
import WalletIcon from "../assets/wallet_icon.svg";
import CloseIcon from "../assets/close_icon.svg";
import TimerResetIcon from "../assets/timer-reset_icon.svg";
import JewelIcon from "../assets/jewel_icon-lg.svg";
import CompassIcon from "../assets/compass_icon.svg";
import PlusIcon from "../assets/plus_icon.svg";
import LogoBg from "../assets/logo-bg.png";
import PrizeIcon from "../assets/prize_icon.png";
import GreenGewelIcon from "../assets/jewel_green.svg"
import AdImg from "../assets/ad_img.png";

import Button from "../components/Button";

const LauncherPage = () => {
  return (
    <>
      <div className="flex justify-between">
        <div className="flex gap-2 items-center">
          <div className="flex justify-center items-center w-10 h-10 bg-secondary rounded-[50%]">
            <img src={UserIcon} alt="User" width={18} height={18} />
          </div>
          <h6 className="font-medium text-primary text-sm">Flexpropsolution</h6>
        </div>
        <div className="relative w-10 h-10 flex items-center justify-center bg-secondary rounded-[50%]">
          <img src={WalletIcon} alt="Wallet" width={21} height={18} />
          <div className="absolute top-0 right-0 bg-[#F1520D] rounded-[50%] w-3 h-3 flex items-center justify-center">
            <img src={CloseIcon} alt="Close" width={7} height={7} />
          </div>
        </div>
      </div>
      <div className="flex justify-center mt-11">
        <div className="flex gap-2">
          <div className="bg-secondary w-10 h-10 flex justify-center items-center rounded-2xl">
            <img
              src={TimerResetIcon}
              alt="Timer Reset"
              width={24}
              height={20}
            />
          </div>
          <span className="font-medium text-2xl">250.000</span>
          <div className="w-10 h-10 bg-jewel rounded-xl flex items-center justify-center">
            <img src={JewelIcon} alt="Jewel" width={27} height={25.5} />
          </div>
        </div>
      </div>
      <div className="flex justify-center mt-3">
        <div className="flex bg-secondary rounded-3xl pl-4 gap-3 justify-between items-center">
          <img src={CompassIcon} alt="Compass" width={24} height={24} />
          <span className="font-medium">0.002</span>
          <div className="w-5 h-5 bg-jewel rounded flex items-center justify-center">
            <img src={JewelIcon} alt="Jewel" width={14} height={14} />
          </div>
          <div className="w-11 h-9 bg-primary rounded-3xl flex justify-center items-center">
            <img src={PlusIcon} alt="Plus" width={15} height={15} />
          </div>
        </div>
      </div>
      <div className="mt-6 flex justify-center relative">
        <img src={LogoBg} alt="Logo" width={275} height={225} />
        <div className="absolute top-6" style={{ left: "calc(50% + 110px)" }}>
          <div className="relative">
            <img src={PrizeIcon} alt="Prize" width={48} height={48} />
            <div className="bg-[#F1520D] font-semibold text-[7px] text-center rounded-3xl absolute bottom-0 w-full">17d01h</div>
          </div>
        </div>
      </div>
      <div className="mt-7 flex justify-center">
        <div className="flex gap-3">
          <div className="flex gap-3 bg-secondary px-5 py-3 rounded-3xl items-center">
            Claim: <span>30.20</span>
            <div className="bg-white w-5 h-5 flex justify-center items-center rounded">
              <img src={GreenGewelIcon} alt="Green Jewel" width={14} height={14} />
            </div>
          </div>
          <Button className="px-6 py-3">Boost</Button>
        </div>
      </div>
      <a><img src={AdImg} alt="AD" className="mt-5 w-full" /></a>
    </>
  );
};

export default LauncherPage;
