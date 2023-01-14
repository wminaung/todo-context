import React, { useContext } from "react";
import { MainContext } from "./context/MainContext";

export const Test = () => {
  return (
    <div>
      i'm testing..
      <div>value is - </div>
      <div>
        <input className="text-black" onChange={(e) => {}} type="text" />
      </div>
    </div>
  );
};

/* 
      import {
  CircleCheckSolid,
  CircleRegular,
  IconCheck,
  IconCross,
  IconMoon,
  IconSun,
} from "./svg";<IconCheck />
      <IconCross />
      <IconSun />
      <IconMoon />
      <CircleCheckSolid />
      <CircleRegular /> */
