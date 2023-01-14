import React, { memo, useContext } from "react";

import { CheckUnCheck } from "./CheckUnCheck";
import { MainContext } from "./context/MainContext";
import { Task } from "./Task";

export const Tasks = () => {
  const { todoList, setTodoList } = useContext(MainContext);

  if (todoList.length <= 0) {
    return <></>;
  }
  return (
    <div className=" w-11/12 relative z-20  rounded-t-lg overflow-hidden  mx-auto">
      {todoList.map((todo, idx) => (
        <Task key={idx} todoItemValue={todo.todoItem}>
          <CheckUnCheck check={todo.isCheck} readonly />
        </Task>
      ))}
    </div>
  );
};
/** <Task>
<CheckUnCheck check={true} readonly={false} />
</Task>
<Task>
  <CheckUnCheck check={true} readonly={false} />
</Task>
<Task>
  <CheckUnCheck check={true} readonly={false} />
</Task> */
