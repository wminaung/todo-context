import { Actions } from "./Actions";
import { ActionTasks } from "./ActionTasks";
import { CheckUnCheck } from "./CheckUnCheck";
import { CreateTaskInput } from "./CreateTaskInput";
import { Tasks } from "./Tasks";
import bgMbDk from "./../assets/images/bg-mobile-dark.jpg";
import bgDtDk from "./../assets/images/bg-desktop-dark.jpg";
import { Heading } from "./Heading";
import { Theme } from "./Theme";
import { ChangeEvent, useContext } from "react";
import { MainContext } from "./context/MainContext";

export const Main = () => {
  const { theme, setTheme, todoList, setTodoList } = useContext(MainContext);
  console.log(theme, todoList);
  return (
    <div className="Main my-0 mx-auto pt-12">
      <img
        src={bgMbDk}
        className={"absolute z-0 top-0 left-0 w-full h-2/5"}
        alt="backgroundImg"
      />
      <Heading h1="TODO">
        <Theme theme="light" />
      </Heading>
      <CreateTaskInput>
        <CheckUnCheck check={false} readonly />
      </CreateTaskInput>
      {/* Todo Input */}
      <div className="py-5"></div>
      <Tasks /> {/* Show todo Listing */}
      <ActionTasks>
        <Actions
          className={
            "absolute -bottom-[130%] bg-inherit rounded-md left-0 h-full w-full  flex items-center justify-center gap-x-4"
          }
        />
      </ActionTasks>
    </div>
  );
};
