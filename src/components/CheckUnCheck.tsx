import React, { useContext } from "react";
import { MainContext } from "./context/MainContext";
import { CircleCheckSolid, CircleRegular } from "./svg";
const checkUnCheckCss = `w-6`;
const circleRegularCss = `fill-circle cursor-pointer active:opacity-80`;
const circleCheckCss = ` cursor-pointer active:opacity-80`;

export type CheckUnCheckProps = {
  check?: boolean;
  readonly?: boolean;
  todoId?: string;
};
export const CheckUnCheck = ({
  check,
  readonly,
  todoId,
}: CheckUnCheckProps) => {
  const { handleCheckUnCheckOnClick } = useContext(MainContext);

  if (readonly) {
    return <CircleRegular className={` ${checkUnCheckCss}  fill-circle`} />;
  }

  return (
    <button
      onClick={() => {
        if (todoId) {
          handleCheckUnCheckOnClick(todoId);
        } else {
          console.log("todoId is not there");
        }
      }}
    >
      {check ? (
        <CircleCheckSolid className={` ${checkUnCheckCss} ${circleCheckCss}`} />
      ) : (
        <CircleRegular className={` ${checkUnCheckCss} ${circleRegularCss} `} />
      )}
    </button>
  );
};
