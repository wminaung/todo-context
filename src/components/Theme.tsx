import { useContext } from "react";
import { MainContext } from "./context/MainContext";
import { IconMoon, IconSun } from "./svg";

export type ThemeProps = {
  theme: "dark" | "light";
};
export const Theme = ({ theme }: ThemeProps) => {
  const { changeTheme } = useContext(MainContext);

  const handleChangeTheme = () => {
    changeTheme(theme);
  };

  const themeClass = "cursor-pointer hover:opacity-70";
  if (theme === "dark") {
    return <IconSun onClick={handleChangeTheme} className={themeClass} />;
  }
  return <IconMoon onClick={handleChangeTheme} className={themeClass} />;
};
