import React from "react";
import { IconMoon, IconSun } from "./svg";

type ThemeProps = {
  theme: "dark" | "light";
};
export const Theme = ({ theme }: ThemeProps) => {
  const themeClass = "cursor-pointer hover:opacity-70";
  if (theme === "dark") {
    return <IconSun className={themeClass} />;
  }
  return <IconMoon className={themeClass} />;
};
