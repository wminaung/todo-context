import { useContext } from "react";
import { IconMoon, IconSun } from "./svg";
import { TodoContext } from "./context/TodoContext";

export const Theme = () => {
  const { setTheme, theme } = useContext(TodoContext);

  const handleChangeTheme = () => {
    theme === "dark" ? setTheme("light") : setTheme("dark");
  };

  const themeClass = "cursor-pointer hover:opacity-70";
  if (theme === "dark") {
    return <IconSun onClick={handleChangeTheme} className={themeClass} />;
  }
  return <IconMoon onClick={handleChangeTheme} className={themeClass} />;
};
