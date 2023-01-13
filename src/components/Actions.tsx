import React from "react";
/** justify-between w-1/3 */

type ActionsProps = {
  className: string;
};

export const Actions = ({ className }: ActionsProps) => {
  return (
    <div className={` ${className} sm:static sm:w-1/3`}>
      <div>All</div>
      <div>Active</div>
      <div>Completed</div>
    </div>
  );
};
