import { Actions } from "./Actions";
import { ActionTasks } from "./ActionTasks";
import { CheckUnCheck } from "./CheckUnCheck";
import { CreateTaskInput } from "./CreateTaskInput";
import bgMbDk from "./../assets/images/bg-mobile-dark.jpg";
//import bgDtDk from "./../assets/images/bg-desktop-dark.jpg";
import { Heading } from "./Heading";
import { Theme } from "./Theme";
import { useContext } from "react";
import { MainContext } from "./context/MainContext";
import { Task } from "./Task";
import { TodoTasks } from "./TodoTasks";

export const Main = () => {
  const { cpyTodoList, theme } = useContext(MainContext);

  return (
    <main className={`Main  my-0 mx-auto pt-12`}>
      <img
        src={bgMbDk}
        className={"absolute z-0 top-0  left-0 w-full h-2/5"}
        alt="backgroundImg"
      />
      <Heading h1="TODO">
        <Theme theme={theme} />
      </Heading>
      <CreateTaskInput>
        <CheckUnCheck readonly />
      </CreateTaskInput>
      {/* Todo Input */}
      <div className="py-5"></div>

      <TodoTasks>
        {cpyTodoList.map((todo, idx) => (
          <Task
            key={idx}
            todoItemValue={todo.todoItem}
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

      <div className="py-20"></div>
    </main>
  );
};
