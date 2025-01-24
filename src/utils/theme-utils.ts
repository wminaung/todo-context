import { ThemeState } from "../components/context/TodoContext";

export enum ThemeColorClass {
  DARK = "bg-[#161722] ",
  LIGHT = "bg-[#e4e5f1]",
}

export enum ThemeColorClassForInput {
  DARK = "bg-[#25273c] text-[#e4e5f1] font-semibold transition-all",
  LIGHT = " bg-[#fefefe] text-[25273c] font-semibold transition-all",
}

export const toggleTheme = (themeState: ThemeState) => {
  return themeState === "dark" ? ThemeColorClass.DARK : ThemeColorClass.LIGHT;
};

export const toggleThemeInput = (themeState: ThemeState) => {
  return themeState === "dark"
    ? ThemeColorClassForInput.DARK
    : ThemeColorClassForInput.LIGHT;
};
