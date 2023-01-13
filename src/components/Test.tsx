import React, { useContext } from "react";
import { MainContext } from "./context/MainContext";

export const Test = () => {
  const { name, setName } = useContext(MainContext);
  return (
    <div>
      i'm testing..
      <div>value is - {name}</div>
      <div>
        <input
          className="text-black"
          onChange={(e) => {
            setName(e.target.value);
          }}
          type="text"
        />
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
