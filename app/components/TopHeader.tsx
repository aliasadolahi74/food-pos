"use client";

import React, { useState } from "react";
import { FiSearch } from "react-icons/fi";
import { cn } from "src/lib/utils";

const menuItems = [
  "Hot Dishes",
  "Cold Dishes",
  "Soup",
  "Grill",
  "Appetizer",
  "Dessert",
];

const TopHeader: React.FC = () => {
  const [activeItem, setActiveItem] = useState("Hot Dishes");

  return (
    <div className={cn("bg-dark-bg text-white p-6")}>
      <div className={cn("flex justify-between items-center flex-wrap gap-4 mb-6")}>
        <div>
          <h1 className={cn("text-xl font-semibold")}>Jaegar Resto</h1>
          <p className={cn("text-sm text-gray-400")}>Tuesday, 2 Feb 2021</p>
        </div>

        <div className={cn("relative w-full sm:w-auto flex-1 sm:flex-none max-w-sm")}>
          <FiSearch className={cn("absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400")} />
          <input
            type="text"
            placeholder="Search for food, coffee, etc..."
            className={cn("w-full pl-10 pr-4 py-2 bg-active-bg text-sm text-white rounded-md border border-transparent focus:outline-none focus:ring-2 focus:ring-accent")}
          />
        </div>
      </div>

      <nav className={cn("flex space-x-6 text-sm font-medium")}>
        {menuItems.map((item) => (
          <button
            key={item}
            onClick={() => setActiveItem(item)}
            className={cn(`relative pb-1 transition duration-200 ${
              activeItem === item ? "text-accent" : "text-gray-300 hover:text-white"
            }`)}
          >
            {item}
            {activeItem === item && (
              <span className={cn("absolute bottom-0 left-0 right-0 h-0.5 bg-accent rounded-full")} />
            )}
          </button>
        ))}
      </nav>
    </div>
  );
};

export default TopHeader;
