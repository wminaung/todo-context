import React, { useContext, useRef } from "react";
import { toggleThemeInput } from "../customHook/DisplayHook";

import { MainContext } from "./context/MainContext";

type CreateTaskInputProps = {
  children: React.ReactNode; //<CheckUnCheck/>
};

export const CreateTaskInput = ({ children }: CreateTaskInputProps) => {
  const { handleCreateTaskInputKeyup, theme } = useContext(MainContext);

  const inputRef = useRef<HTMLInputElement>(null);

  return (
    <div
      className={` w-11/12 ${toggleThemeInput(
        theme
      )} mx-auto  z-20 relative py-4  flex justify-between px-3 rounded-md sm:w-8/12`}
    >
      {children}
      <input
        ref={inputRef}
        onKeyUp={(e: React.KeyboardEvent<HTMLInputElement>) => {
          handleCreateTaskInputKeyup(e, inputRef);
        }}
        type="text"
        className={`w-11/12  bg-inherit text-inherit  outline-none px-2  text-lg  placeholder:text-sm select-none`}
        placeholder="Create a new todo..."
      />
    </div>
  );
};
//  bg-box =--very-dark-desaturated-blue
