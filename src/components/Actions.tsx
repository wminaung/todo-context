import React, { useContext, useEffect, useState } from "react";
import { MainContext } from "./context/MainContext";
/** justify-between w-1/3 */

type ActionsProps = {
  className: string;
};
enum OpenAction {
  ALL = "all",
  ACTIVE = "active",
  COMPLETED = "completed",
}
export const Actions = ({ className }: ActionsProps) => {
  const { todoList, showAll, showActive, showCompleted } =
    useContext(MainContext);
  const [openAction, setOpenAction] = useState<OpenAction>(OpenAction.ALL);

  useEffect(() => {
    setOpenAction(OpenAction.ALL);
  }, [todoList]);

  const handleShowAll = () => {
    setOpenAction(OpenAction.ALL);
    showAll();
  };
  const handleShowActive = () => {
    setOpenAction(OpenAction.ACTIVE);
    showActive();
  };
  const handleShowCompleted = () => {
    setOpenAction(OpenAction.COMPLETED);
    showCompleted();
  };

  const createCss = (action: OpenAction) => {
    return openAction === action ? "opacity-100" : "opacity-50";
  };
  return (
    <div
      className={` ${className} sm:static sm:w-1/3 sm:shadow-none shadow-sm shadow-slate-800 `}
    >
      <button
        onClick={handleShowAll}
        className={`${createCss(OpenAction.ALL)}  hover:opacity-80 `}
      >
        All
      </button>
      <button
        onClick={handleShowActive}
        className={`${createCss(OpenAction.ACTIVE)} hover:opacity-80`}
      >
        Active
      </button>
      <button
        onClick={handleShowCompleted}
        className={`${createCss(OpenAction.COMPLETED)} hover:opacity-80`}
      >
        Completed
      </button>
    </div>
  );
};
