"use client";

import { useState } from "react";
import { Dashboard, Exit, Home, Logo, Message, Question, Setting } from "public/assets";

const navItems = [
  { icon: Home, label: "Home" },
  { icon: Question, label: "Question" },
  { icon: Dashboard, label: "Dashboard" },
  { icon: Message, label: "Message" },
  { icon: Setting, label: "Settings" },
  { icon: Exit, label: "Exit" },
];

const SidebarNav = () => {
  const [activeItem, setActiveItem] = useState<string>("Home");

  const handleClick = (label: string) => {
    if (label !== "Logo") {
      setActiveItem(label);
    }
  };

  return (
    <nav className="flex flex-col items-center ml-3 py-6 bg-[#1F1D2B]">
      <button>
        <div className={`p-3 rounded-lg flex justify-center`}>
          <Logo />
        </div>
      </button>
      {navItems.map(({ icon: Icon, label }) => (
        <button
          key={label}
          onClick={() => handleClick(label)}
          className={`group p-4 rounded-bl-lg rounded-tl-lg w-full transition-all duration-200 my-1 ${
            activeItem === label
              ? "bg-[#252836]/50"
              : "hover:bg-[#252836]/50"
          }`}
          aria-label={label}
        >
          <div className={`p-3 rounded-lg flex justify-center ${
            activeItem === label
              ? "bg-[#EB966A]"
              : "bg-transparent group-hover:bg-[#EB966A]/20"
          }`}>
            <Icon className={`
              w-6 h-6 
              ${activeItem === label ? "[&>*]:fill-current [&>*]:stroke-current" : "text-gray-400"}
              
            `} />
          </div>
        </button>
      ))}
    </nav>
  );
};

export default SidebarNav;
