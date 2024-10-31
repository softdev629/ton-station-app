import { Outlet, useLocation, useNavigate } from "react-router-dom";

import {
  ReferralIcon,
  BuyIcon,
  FollowingIcon,
  LauncherIcon,
  FormingIcon,
} from "./icons";

const navItems = [
  {
    text: "Referral",
    to: "/referral",
    icon: <ReferralIcon />,
  },
  {
    text: "Following",
    to: "/following",
    icon: <FollowingIcon />,
  },
  {
    text: "Launcher",
    to: "/launcher",
    icon: <LauncherIcon />,
  },
  {
    text: "Forming",
    to: "/forming",
    icon: <FormingIcon />,
  },
  {
    text: "Buy",
    to: "/buy",
    icon: <BuyIcon />,
  },
];

const Layout = () => {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <div className="relative bg-black w-screen h-screen text-white">
      <Outlet />
      <div className="absolute mx-4 rounded-3xl bg-secondary px-3 py-4 bottom-4 w-[calc(100%_-_2rem)] flex justify-between">
        {navItems.map((item, index) => (
          <div
            role="a"
            key={`nav-item-${index}`}
            onClick={() => navigate(item.to)}
            className={`flex flex-col items-center gap-1 hover:text-primary cursor-pointer ${
              location.pathname === item.to ? "text-primary" : ""
            }`}
          >
            {item.icon}
            <h5 className="text-xs">{item.text}</h5>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Layout;
