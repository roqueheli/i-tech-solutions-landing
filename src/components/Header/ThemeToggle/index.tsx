import React, { FC } from "react";
import { useTheme } from "@/context/theme.context";
import { MdDarkMode, MdOutlineLightMode } from "react-icons/md";

const ThemeToggle: FC = () => {
  const { isDarkMode, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="p-4 border rounded-full flex-shrink-0"
    >
      {isDarkMode ? <MdOutlineLightMode /> : <MdDarkMode />}
    </button>
  );
};

export default ThemeToggle;
