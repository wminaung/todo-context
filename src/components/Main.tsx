import { Actions } from "./Actions";
import { ActionTasks } from "./ActionTasks";
import { CheckUnCheck } from "./CheckUnCheck";
import { CreateTaskInput } from "./CreateTaskInput";

import { Heading } from "./Heading";
import { Theme } from "./Theme";
import { useContext } from "react";
import { MainContext } from "./context/MainContext";
import { Task } from "./Task";
import { TodoTasks } from "./TodoTasks";
import { Image } from "./Image";
const { v4: uuidv4 } = require("uuid");

export const Main = () => {
  const { cpyTodoList, theme } = useContext(MainContext);

  return (
    <main className={`Main  my-0 mx-auto pt-12`}>
      <Image theme={theme} />

      <Heading h1="TODO">
        <Theme theme={theme} />
      </Heading>
      {/* Heading  */}

      <CreateTaskInput>
        <CheckUnCheck readonly />
      </CreateTaskInput>
      {/* Todo Input */}

      <div className="py-5"></div>

      <TodoTasks>
        {cpyTodoList.map((todo, idx) => (
          <Task
            key={todo.todoId}
            todoItemValue={`${todo.todoItem}`}
            todoId={todo.todoId}
            isCheck={todo.isCheck}
          >
            <CheckUnCheck check={todo.isCheck} todoId={todo.todoId} />
          </Task>
        ))}
      </TodoTasks>
      {/* Show todo Listing */}

      <ActionTasks>
        <Actions
          className={
            "absolute -bottom-[130%] bg-inherit rounded-md left-0 h-full w-full  flex items-center justify-center gap-x-4"
          }
        />
      </ActionTasks>
      {/* Action and info */}

      <div
        className={`py-20 text-center font-semibold ${
          theme === "light" ? "text-[#080808]" : "text-[#b3b3b3]"
        }`}
      >
        Drag & drop to reorder list
      </div>
    </main>
  );
};
