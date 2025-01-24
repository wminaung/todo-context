import { Actions } from "./Actions";
import { ActionTasks } from "./ActionTasks";
import { CheckUnCheck } from "./CheckUnCheck";
import { CreateTaskInput } from "./CreateTaskInput";

import { Heading } from "./Heading";
import { Theme } from "./Theme";
import { useContext, useEffect, useState } from "react";
import { Task } from "./Task";
import { TodoTasks } from "./TodoTasks";
import { Image } from "./Image";
import { OpenAction, TodoContext } from "./context/TodoContext";

export const Main = () => {
  const { todoList, theme, openAction, showIds, setShowIds } =
    useContext(TodoContext);

  useEffect(() => {
    if (openAction === OpenAction.ALL) {
      setShowIds(todoList.map((todo) => todo.id));
    } else if (openAction === OpenAction.ACTIVE) {
      setShowIds(
        todoList.filter((todo) => todo.isCheck === false).map((todo) => todo.id)
      );
    } else if (openAction === OpenAction.COMPLETED) {
      setShowIds(
        todoList.filter((todo) => todo.isCheck === true).map((todo) => todo.id)
      );
    }
  }, [openAction, setShowIds, todoList]);

  const showTodoList = todoList.filter((todo) => showIds.includes(todo.id));

  return (
    <main className={`Main  my-0 mx-auto pt-12`}>
      <Image theme={theme} />

      <Heading h1="TODO">
        <Theme />
      </Heading>
      {/* Heading  */}

      <CreateTaskInput>
        <CheckUnCheck readonly />
      </CreateTaskInput>
      {/* Todo Input */}

      <div className="py-5"></div>

      <TodoTasks>
        {showTodoList.map((todo) => (
          <Task key={todo.id} todo={todo}>
            <CheckUnCheck todoId={todo.id} check={todo.isCheck} />
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
