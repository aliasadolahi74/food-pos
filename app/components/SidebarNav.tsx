"use client";
import { useState } from "react";
import { Dashboard, Exit, Home, Logo, Message, Question, Setting } from "public/assets";
import { cn } from "src/lib/utils";

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
    <nav className="flex flex-col items-center ml-3 py-6 bg-dark-bg">
      <button>
        <div className={`p-3 rounded-lg flex justify-center`}>
          <Logo />
        </div>
      </button>
      {navItems.map(({ icon: Icon, label }) => (
        <button
          key={label}
          onClick={() => handleClick(label)}
          className={cn(
            "group p-4 rounded-bl-lg rounded-tl-lg w-full transition-all duration-200 my-1",
            activeItem === label ? "bg-active-bg/50" : "hover:bg-active-bg/50",
          )}
          aria-label={label}
        >
          <div className={`p-3 rounded-lg flex justify-center ${
            activeItem === label
              ? "bg-accent"
              : "bg-transparent group-hover:bg-accent/20"
          }`}>
            <Icon
              className={cn(
                "w-6 h-6", // Base dimensions
                activeItem === label
                  ? "[&>*]:fill-current [&>*]:stroke-current" // Active state
                  : "text-gray-400 [&>*]:stroke-current", // Inactive state
                "transition-colors duration-200", // Smooth transitions
              )}
            />
          </div>
        </button>
      ))}
    </nav>
  );
};

export default SidebarNav;
