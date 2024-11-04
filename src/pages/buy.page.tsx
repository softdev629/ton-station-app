import BurnifyLogo from "../assets/burnify-logo.png";
import OnedexLogo from "../assets/ondex-logo.png";
import CoinIcon from "../assets/coin-ico.png";

const BuyPage = () => {
  return (
    <>
      <div className="flex justify-between mt-6">
        <div className="flex flex-col justify-center bg-secondary p-2 rounded-2xl">
          <div className="bg-black px-6 py-2 rounded-3xl">
            <img src={OnedexLogo} alt="Burnify" />
          </div>
          <div className="text-primary text-center text-xl font-medium mt-1">
            Buy
          </div>
        </div>
        <div className="flex flex-col justify-center bg-secondary p-2 rounded-2xl">
          <div className="bg-black px-6 py-2 rounded-3xl">
            <img src={BurnifyLogo} alt="Burnify" />
          </div>
          <div className="text-primary text-center text-xl font-medium mt-1">
            Buy
          </div>
        </div>
      </div>
      <h5 className="text-primary font-medium text-sm mt-5 mb-2">
        Transactions History
      </h5>
      <div className="text-white font-medium text-sm mt-2">October 30, 2024</div>
      <div className="mt-5 flex items-center">
        <div className="rounded-3xl bg-black p-3">
          <img src={CoinIcon} alt="Coin" width={30} height={30} />
        </div>
        <div className="ml-4">
          <div className="text-white font-medium text-sm">Farming</div>
          <div className="text-[#8B8B8B] text-xs font-medium">Oct 30 - 00:00:05</div>
        </div>
        <div className="flex-1"></div>
        <p className="text-white font-semibold"><span className="text-primary">+30.9</span> SOON</p>
      </div>
      <div className="mt-5 flex items-center">
        <div className="rounded-3xl bg-black p-3">
          <img src={CoinIcon} alt="Coin" width={30} height={30} />
        </div>
        <div className="ml-4">
          <div className="text-white font-medium text-sm">Lucky Wheel</div>
          <div className="text-[#8B8B8B] text-xs font-medium">Oct 30 - 00:00:05</div>
        </div>
        <div className="flex-1"></div>
        <p className="text-white font-semibold"><span className="text-primary">+200.9</span> SOON</p>
      </div>
      <div className="text-white font-medium text-sm mt-5">October 28, 2024</div>
      <div className="mt-5 flex items-center">
        <div className="rounded-3xl bg-black p-3">
          <img src={CoinIcon} alt="Coin" width={30} height={30} />
        </div>
        <div className="ml-4">
          <div className="text-white font-medium text-sm">Lucky Wheel</div>
          <div className="text-[#8B8B8B] text-xs font-medium">Oct 30 - 00:00:05</div>
        </div>
        <div className="flex-1"></div>
        <p className="text-white font-semibold"><span className="text-primary">+150.9</span> SOON</p>
      </div>
      <div className="mt-5 flex items-center">
        <div className="rounded-3xl bg-black p-3">
          <img src={CoinIcon} alt="Coin" width={30} height={30} />
        </div>
        <div className="ml-4">
          <div className="text-white font-medium text-sm">Lucky Wheel</div>
          <div className="text-[#8B8B8B] text-xs font-medium">Oct 30 - 00:00:05</div>
        </div>
        <div className="flex-1"></div>
        <p className="text-white font-semibold"><span className="text-primary">+40.9</span> SOON</p>
      </div>
      <div className="mt-5 flex items-center">
        <div className="rounded-3xl bg-black p-3">
          <img src={CoinIcon} alt="Coin" width={30} height={30} />
        </div>
        <div className="ml-4">
          <div className="text-white font-medium text-sm">Farming</div>
          <div className="text-[#8B8B8B] text-xs font-medium">Oct 30 - 00:00:05</div>
        </div>
        <div className="flex-1"></div>
        <p className="text-white font-semibold"><span className="text-primary">+30.9</span> SOON</p>
      </div>
    </>
  );
};

export default BuyPage;
