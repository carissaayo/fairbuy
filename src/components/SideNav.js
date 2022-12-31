import { useState } from "react";
import NavItem from "./NavItem";
import {
  HomeIcon,
  BuildingStorefrontIcon,
  WalletIcon,
  CreditCardIcon,
  UserCircleIcon,
  Cog6ToothIcon,
  BanknotesIcon,
  ChatBubbleLeftIcon,
  GiftTopIcon,
  ArrowUpCircleIcon,
  InformationCircleIcon,
  ArrowLeftOnRectangleIcon,
  ChevronDownIcon,
  ChevronUpIcon
} from "@heroicons/react/24/outline";
// import { HomeIcon as HomeIconSolid } from "@heroicons/react/24/solid";

const SideNav = () => {
  const [showMore, setShowMore] = useState(false);
  return (
    <main className={`p-4 pr-2 bg-lightPrimaryBg  sidenav`}>
      {/* Logo */}
      <h1 className="font-bold text-3xl mb-6 px-4">FairPay</h1>
      {/* Navs Main Con */}
      <section className="">
        {/* Navs Title */}
        <h2 className="uppercase font-semibold mb-8 px-4 text-xl">Main Menu</h2>
        {/* Navs Con */}
        {/*  */}
        <div
          className={`inner-con pb-6 w-[250px] h-[600px] ${
            showMore && "overflow-y-scroll  h-[650px]"
          }`}
        >
          <NavItem Icon={HomeIcon} title="home" active={true} />
          <NavItem
            Icon={BuildingStorefrontIcon}
            title="stores"
            active={false}
          />
          <NavItem Icon={BanknotesIcon} title="invest" active={false} />
          <NavItem Icon={CreditCardIcon} title="payment" active={false} />
          <NavItem Icon={UserCircleIcon} title="profile" active={false} />
          <NavItem Icon={Cog6ToothIcon} title="setting" active={false} />

          {/* Show More\Less */}

          <div
            className=" font-semibold mb-8 px-4 flex items-center gap-2 cursor-pointer"
            onClick={() => setShowMore(!showMore)}
          >
            Show {showMore ?"Less ":"More"}
              <ChevronUpIcon className={`h-6 w-6 text-mainIconColor ${showMore?"show-less":"show-more"} `} />
          
          </div>

          {/* Show More Options Con */}
          <div
            className={`${showMore ? "h-auto opacity-100" : "h-0 opacity-0"}`}
          >
            <NavItem Icon={WalletIcon} title="my cards" active={false} />
            <NavItem
              Icon={ChatBubbleLeftIcon}
              title="FAQs and Support"
              active={false}
            />
            <NavItem
              Icon={GiftTopIcon}
              title="rewards and cashbuys"
              active={false}
            />
            <NavItem
              Icon={ArrowUpCircleIcon}
              title="upload documents"
              active={false}
            />
          </div>

          <NavItem Icon={InformationCircleIcon} title="about" active={false} />
          <NavItem
            Icon={ArrowLeftOnRectangleIcon}
            title="logout"
            active={false}
          />
        </div>

        {/* Greeting User */}
        <h2 className="capitalize px-4 pb-10 font-bold text-xl"> Hi Yussuf </h2>
      </section>
    </main>
  );
};

export default SideNav;
