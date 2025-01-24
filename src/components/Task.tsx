import { useContext } from "react";
import { toggleThemeInput } from "../customHook/DisplayHook";
import { MainContext } from "./context/MainContext";
import { IconCross } from "./svg";
import { useDrag, useDrop } from "react-dnd";
import { OpenAction } from "./Actions";

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
  const { handleTaskDelete, setTodoList, todoList, mode, theme } =
    useContext(MainContext);

  const [{ bgClassName }, dragRef] = useDrag(() => ({
    type: "todo",
    item: { id: todoId },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
      bgClassName: monitor.isDragging() ? "bg-[#393a4c]" : "",
    }),
  }));

  const [{ overClass }, dropRef] = useDrop(
    () => ({
      accept: "todo",
      drop: (item: any) => doDropFun(item.id),
      collect: (monitor) => ({
        isOver: monitor.isOver(),
        overClass: monitor.isOver() ? "bg-[#4d5066] transform scale-95 " : "",
      }),
    }),
    [todoList]
  );

  const doDropFun = (id: string) => {
    if (id === todoId) return;

    const dropItemIdx = todoList.findIndex((todo) => todo.todoId === todoId);
    const dragItemIdx = todoList.findIndex((todo) => todo.todoId === id);

    const dragItem = todoList[dragItemIdx];
    const dropItem = todoList[dropItemIdx];

    setTodoList(
      todoList.map((todo, idx) => {
        if (idx === dragItemIdx) {
          return dropItem;
        }
        if (idx === dropItemIdx) {
          return dragItem;
        }
        return todo;
      })
    );
  };

  const cursorCss = mode === OpenAction.ALL ? "cursor-grab" : "cursor-auto";

  return (
    <div
      ref={mode === OpenAction.ALL ? dropRef : null}
      className={`py-4 ${toggleThemeInput(
        theme
      )} transition-all flex  justify-between    items-center px-3  border-b border-[#4d5066]  ${
        bgClassName + " " + overClass
      }`}
    >
      {children}
      <input
        ref={mode === OpenAction.ALL ? dragRef : null}
        type="text"
        className={`${
          isCheck ? "line-through" : ""
        } w-11/12   ${cursorCss}   bg-inherit outline-none px-2  text-lg text-inherit placeholder:text-sm select-none`}
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
