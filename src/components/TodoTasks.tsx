import React, { useContext } from "react";

import { MainContext } from "./context/MainContext";

type TodoTasksProps = {
  children: React.ReactNode; //<Task/>[<CheckUnCheck/>]
};

export const TodoTasks = ({ children }: TodoTasksProps) => {
  const { todoList } = useContext(MainContext);

  if (todoList.length <= 0) {
    return <></>;
  }
  return (
    <div className=" w-11/12 sm:w-8/12 relative z-20 shadow-lg rounded-t-lg overflow-hidden  mx-auto">
      {children}
    </div>
  );
};
/** 
 {todoList.map((todo, idx) => (
        <Task key={idx} todoItemValue={todo.todoItem}>
          <CheckUnCheck check={todo.isCheck} />
        </Task>
      ))}
 * <Task>
<CheckUnCheck check={true} readonly={false} />
</Task>
<Task>
  <CheckUnCheck check={true} readonly={false} />
</Task>
<Task>
  <CheckUnCheck check={true} readonly={false} />
</Task> */
