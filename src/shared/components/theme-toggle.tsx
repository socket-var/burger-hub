"use client";

import { ThemeContext } from "@/shared/context/theme-provider";
import { Switch } from "antd";
import { useContext } from "react";

export default function ThemeToggle() {
  const { isDarkTheme, setIsDarkTheme } = useContext(ThemeContext);
  return (
    <Switch
      title={isDarkTheme ? "Switch to light mode" : "Switch to dark mode"}
      className="scale-y-125 scale-x-125"
      checkedChildren={<span>🌚</span>}
      unCheckedChildren={<span>🌞</span>}
      value={isDarkTheme}
      onChange={setIsDarkTheme}
    />
  );
}
