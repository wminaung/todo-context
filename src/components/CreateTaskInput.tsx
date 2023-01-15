import React, { useContext, useRef } from "react";
import { MainContext } from "./context/MainContext";

type CreateTaskInputProps = {
  children: React.ReactNode;
};
export const CreateTaskInput = ({ children }: CreateTaskInputProps) => {
  const { handleCreateTaskInputKeyup } = useContext(MainContext);

  const inputRef = useRef<HTMLInputElement>(null);

  return (
    <div className="w-11/12 mx-auto z-20 relative py-4 bg-box flex justify-between px-3 rounded-md">
      {children}
      <input
        ref={inputRef}
        onKeyUp={(e: React.KeyboardEvent<HTMLInputElement>) => {
          handleCreateTaskInputKeyup(e, inputRef);
        }}
        type="text"
        className="w-11/12 bg-inherit outline-none px-2  text-lg color-box placeholder:text-sm select-none"
        placeholder="Create a new todo..."
      />
    </div>
  );
};
