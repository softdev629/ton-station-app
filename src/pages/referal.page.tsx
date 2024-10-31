import Logo from "../assets/logo.png";
import PlusIcon from "../assets/plus_icon.svg";

const descriptions = [
  {
    action: "Share your invitation link",
    explain: "Get a play pass for each friends",
  },
  {
    action: "Your friends join TON Station",
    explain: "And start farming TON Station",
  },
  {
    action: "Score 10% from Buddines",
    explain: "Plus an extra 2.5% from their referrals",
  },
];

const ReferalPage = () => {
  return (
    <div className="h-[calc(100%_-_100px)] p-4 overflow-hidden">
      <h6 className="text-primary text-sm">Referrals</h6>
      <div className="mt-11 flex flex-col items-center">
        <img src={Logo} alt="Logo" />
        <div className="mt-3 text-xl font-medium">Invite friends</div>
        <div className="mt-1 text-xs text-[#DCDCDC] font-normal">
          How it works
        </div>
      </div>
      <div className="mt-8 flex flex-col gap-3">
        {descriptions.map((item, index) => (
          <div
            key={`description-item-${index}`}
            className="bg-secondary p-1 rounded-3xl flex gap-3"
          >
            <div className="w-16 h-16 flex justify-center items-center bg-black text-primary rounded-3xl text-2xl">
              {index + 1}
            </div>
            <div className="flex flex-col justify-center">
              <p className="font-medium">{item.action}</p>
              <p className="text-sm text-[#DCDCDC] font-normal">
                {item.explain}
              </p>
            </div>
          </div>
        ))}
      </div>
      <div className="mt-8 flex justify-center">
        <button className="rounded-3xl bg-primary text-black px-5 py-3 font-medium flex justify-center items-center gap-2">
          <img src={PlusIcon} alt="+" width={14} height={14} />
          Invite friends
        </button>
      </div>
    </div>
  );
};

export default ReferalPage;
