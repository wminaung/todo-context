import { ThemeState } from "./context/MainContext";
import bgMbDk from "./../assets/images/bg-mobile-dark.jpg";
import bgDtDk from "./../assets/images/bg-desktop-dark.jpg";
import bgMbLt from "./../assets/images/bg-mobile-light.jpg";
import bgDtLt from "./../assets/images/bg-desktop-light.jpg";
import { memo, useEffect, useState } from "react";

type ImageProps = {
  theme: ThemeState;
};
//640
export const Image = memo(({ theme }: ImageProps) => {
  const [width, setWidth] = useState(window.innerWidth);

  const innerWidth = () => {
    setWidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener("resize", innerWidth);
    return () => {
      window.removeEventListener("resize", innerWidth);
    };
  }, [width]);

  const desktopSrc = theme === "dark" ? bgDtDk : bgDtLt;
  const mobileSrc = theme === "dark" ? bgMbDk : bgMbLt;

  return (
    <img
      src={width < 640 ? mobileSrc : desktopSrc}
      alt="backgroundImg"
      className={`  absolute z-0 top-0  left-0 w-full h-2/5`}
    />
  );
});
