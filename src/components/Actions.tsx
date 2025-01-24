import { useContext } from "react";
import { OpenAction, TodoContext } from "./context/TodoContext";
/** justify-between w-1/3 */

type ActionsProps = {
  className: string;
};

export const Actions = ({ className }: ActionsProps) => {
  const { openAction, setOpenAction } = useContext(TodoContext);

  const handleShowAll = () => {
    setOpenAction(OpenAction.ALL);
  };
  const handleShowActive = () => {
    setOpenAction(OpenAction.ACTIVE);
  };
  const handleShowCompleted = () => {
    setOpenAction(OpenAction.COMPLETED);
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
