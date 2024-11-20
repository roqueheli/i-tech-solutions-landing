import React, { FC } from "react";
import { useTheme } from "@/context/theme.context";
import { MdDarkMode, MdOutlineLightMode } from "react-icons/md";

const ThemeToggle: FC = () => {
  const { isDarkMode, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="p-2 border rounded-full"
    >
      {isDarkMode ? <MdOutlineLightMode /> : <MdDarkMode />}
    </button>
  );
};

export default ThemeToggle;
