import React, { memo } from "react";
import { CircleCheckSolid, CircleRegular } from "./svg";
const checkUnCheckCss = `w-6`;
const circleRegularCss = `fill-circle cursor-pointer active:opacity-80`;
const circleCheckCss = ` cursor-pointer active:opacity-80`;

export type CheckUnCheckProps = {
  check: boolean;
  readonly: boolean;
};
export const CheckUnCheck = ({ check, readonly }: CheckUnCheckProps) => {
  if (readonly) {
    return <CircleRegular className={` ${checkUnCheckCss}  fill-circle`} />;
  }
  // console.log(readonly);

  return check ? (
    <CircleCheckSolid className={` ${checkUnCheckCss} ${circleCheckCss}`} />
  ) : (
    <CircleRegular className={` ${checkUnCheckCss} ${circleRegularCss} `} />
  );
};
