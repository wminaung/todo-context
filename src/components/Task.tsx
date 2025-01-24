import { useContext } from "react";
import { toggleThemeInput } from "../utils/theme-utils";
import { IconCross } from "./svg";
import { useDrag, useDrop } from "react-dnd";
import { TodoContext, TodoState } from "./context/TodoContext";

export type TaskProps = {
  children: React.ReactNode; // CheckUnCheck
  todo: TodoState;
};

export const Task = ({ children, todo }: TaskProps) => {
  const { setTodoList, todoList, theme } = useContext(TodoContext);

  const [{ bgClassName }, dragRef] = useDrag(() => ({
    type: "todo",
    item: { id: todo.id },
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
    console.log(todoList);
    const dragId = id;
    const dropId = todo.id;
    if (id === todo.id) return;

    const dropItemIdx = todoList.findIndex((todo) => todo.id === dragId);
    const dragItemIdx = todoList.findIndex((todo) => todo.id === dropId);

    const dragItem = todoList[dragItemIdx];
    const dropItem = todoList[dropItemIdx];
    console.log(todoList);
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

  // const cursorCss = mode === OpenAction.ALL ? "cursor-grab" : "cursor-auto";
  const cursorCss = "cursor-auto";
  const handleTaskDelete = () => {
    if (!todo.isCheck) return;
    const todoIdToDelete = todo.id;
    setTodoList(todoList.filter((todo) => todo.id !== todoIdToDelete));
  };

  return (
    <div
      // ref={mode === OpenAction.ALL ? dropRef : null}
      ref={dropRef}
      className={`py-4 ${toggleThemeInput(
        theme
      )} transition-all flex  justify-between    items-center px-3  border-b border-[#4d5066]  ${
        bgClassName + " " + overClass
      }`}
    >
      {children}
      <input
        // ref={mode === OpenAction.ALL ? dragRef : null}
        ref={dragRef}
        type="text"
        className={`${
          todo.isCheck ? "line-through" : ""
        } w-11/12   ${cursorCss}   bg-inherit outline-none px-2  text-lg text-inherit placeholder:text-sm select-none`}
        placeholder="Create a new todo..."
        readOnly
        value={todo.todoItem}
      />
      <IconCross
        onClick={() => {
          handleTaskDelete();
        }}
        className="hover:cursor-pointer hover:opacity-80 active:opacity-100"
      />
    </div>
  );
};
