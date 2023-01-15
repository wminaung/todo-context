import React, { useContext } from "react";
import { MainContext } from "./context/MainContext";

type ActionTasksProps = {
  children: React.ReactNode; //<Actions/>
};

export const ActionTasks = ({ children }: ActionTasksProps) => {
  const { todoList, handleClearComplete } = useContext(MainContext);
  const leftItems = todoList.filter((todo) => !todo.isCheck).length;
  return (
    <div className="relative py-4  text-white bg-box w-11/12 mx-auto flex justify-between items-center px-3   text-sm rounded-b-lg">
      <div>
        {leftItems <= 1 ? `${leftItems} item left` : `${leftItems} items left`}{" "}
      </div>
      {children}
      <button onClick={handleClearComplete}>Clear Complete</button>
    </div>
  );
};
