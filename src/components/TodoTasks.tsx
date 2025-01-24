import { useContext } from "react";
import { TodoContext } from "./context/TodoContext";

type TodoTasksProps = {
  children: React.ReactNode; //<Task/>[<CheckUnCheck/>]
};

export const TodoTasks = ({ children }: TodoTasksProps) => {
  const { todoList } = useContext(TodoContext);

  if (todoList.length <= 0) {
    return <div>There is no Todo</div>;
  }
  return (
    <div className=" w-11/12 sm:w-8/12 transition-all relative z-20 shadow-lg rounded-t-lg overflow-hidden  mx-auto">
      {children}
    </div>
  );
};
