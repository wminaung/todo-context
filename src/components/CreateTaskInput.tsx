import React, { memo, useContext, useRef } from "react";
import { MainContext } from "./context/MainContext";

type CreateTaskInputProps = {
  children: React.ReactNode;
};
export const CreateTaskInput = ({ children }: CreateTaskInputProps) => {
  const { todoList, setTodoList } = useContext(MainContext);

  const handleKeyup = (
    e: React.KeyboardEvent<HTMLInputElement>,
    inputRef: React.MutableRefObject<any>
  ) => {
    if (e.key === "Enter") {
      setTodoList([
        ...todoList,
        {
          isCheck: true,
          todoItem: inputRef.current?.value,
          todoId: todoList.length,
        },
      ]);
      inputRef.current.value = "";
    }
  };

  const inputRef = useRef<HTMLInputElement>(null);

  return (
    <div className="w-11/12 mx-auto z-20 relative py-4 bg-box flex justify-between px-3 rounded-md">
      {children}
      <input
        ref={inputRef}
        onKeyUp={(e: React.KeyboardEvent<HTMLInputElement>) => {
          handleKeyup(e, inputRef);
        }}
        type="text"
        className="w-11/12 bg-inherit outline-none px-2  text-lg color-box placeholder:text-sm select-none"
        placeholder="Create a new todo..."
      />
    </div>
  );
};
