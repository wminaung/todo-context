import { useContext } from "react";
import { toggleThemeInput } from "../customHook/DisplayHook";

import { MainContext } from "./context/MainContext";

type ActionTasksProps = {
  children: React.ReactNode; //<Actions/>
};

export const ActionTasks = ({ children }: ActionTasksProps) => {
  const { todoList, handleClearComplete, theme } = useContext(MainContext);
  const leftItems = todoList.filter((todo) => !todo.isCheck).length;
  return (
    <div
      className={`relative py-4 ${toggleThemeInput(
        theme
      )} w-11/12 sm:w-8/12 mx-auto flex justify-between items-center px-3 z-30 shadow-lg text-sm rounded-b-lg`}
    >
      <div>
        {leftItems <= 1 ? `${leftItems} item left` : `${leftItems} items left`}{" "}
      </div>
      {children}
      <button
        onClick={handleClearComplete}
        className={`hover:opacity-80 active:opacity-95`}
      >
        Clear Complete
      </button>
    </div>
  );
};
