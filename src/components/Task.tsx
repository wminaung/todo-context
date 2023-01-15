import { useContext } from "react";
import { MainContext } from "./context/MainContext";
import { IconCross } from "./svg";

export type TaskProps = {
  children: React.ReactNode; // CheckUnCheck
  todoItemValue: string;
  todoId: string;
  isCheck: boolean;
};

export const Task = ({
  children,
  todoItemValue,
  todoId,
  isCheck,
}: TaskProps) => {
  const { handleTaskDelete } = useContext(MainContext);

  return (
    <div className="py-4 bg-box   flex justify-between items-center px-3  border-b border-[#4d5066]">
      {children}
      <input
        type="text"
        className="w-11/12 bg-inherit outline-none px-2  text-lg color-box placeholder:text-sm select-none"
        placeholder="Create a new todo..."
        readOnly
        value={todoItemValue}
      />
      <IconCross
        onClick={() => handleTaskDelete(todoId, isCheck)}
        className="hover:cursor-pointer hover:opacity-80 active:opacity-100"
      />
    </div>
  );
};
