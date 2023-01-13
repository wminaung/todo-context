import React, { memo } from "react";
import { TaskProps } from "./Task";

export const CreateTaskInput = ({ children }: TaskProps) => {
  return (
    <div className="w-11/12 mx-auto z-20 relative py-4 bg-box flex justify-between px-3 rounded-md">
      {children}
      <input
        type="text"
        className="w-11/12 bg-inherit outline-none px-2  text-lg color-box placeholder:text-sm select-none"
        placeholder="Create a new todo..."
      />
    </div>
  );
};
