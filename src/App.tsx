import React, { useState } from "react";
import "./App.css";
import {
  MainContext,
  ThemeState,
  TodoListState,
} from "./components/context/MainContext";
import { Main } from "./components/Main";
const { v4: uuidv4 } = require("uuid");
/////////////////////////////////////////////////////////
export enum ThemeColorClass {
  DARK = "bg-[#161722]",
  LITHT = "bg-[#fafafa]",
}
export const toggleTheme = (themeState: ThemeState) => {
  return themeState === "dark" ? ThemeColorClass.DARK : ThemeColorClass.LITHT;
};
/////////////////////////////////////////////////////////

//////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function App() {
  const [todoList, setTodoList] = useState<TodoListState[]>(
    [] as TodoListState[]
  );
  const [theme, setTheme] = useState<ThemeState>("dark");

  //////////////////////////////////////////////////////////////////////
  const handleCheckUnCheckOnClick = (todoId: string) => {
    setTodoList(
      todoList.map((todo) => {
        if (todo.todoId === todoId) {
          todo.isCheck = !todo.isCheck;
        }
        return todo;
      })
    );
  };

  const handleCreateTaskInputKeyup = (
    e: React.KeyboardEvent<HTMLInputElement>,
    inputRef: React.MutableRefObject<any>
  ) => {
    if (e.key === "Enter") {
      setTodoList([
        ...todoList,
        {
          isCheck: false,
          todoItem: inputRef.current?.value,
          todoId: uuidv4(),
        },
      ]);
      inputRef.current.value = "";
    }
  };

  const handleTaskDelete = (todoId: string, isCheck: boolean) => {
    if (isCheck === false) return;
    setTodoList(
      todoList.filter((todo) => {
        return todo.todoId !== todoId;
      })
    );
  };
  //////////////////////////////////////////////////////////////////////

  return (
    <div className={`App ${toggleTheme(theme)}`}>
      <MainContext.Provider
        value={{
          todoList,
          setTodoList,
          theme,
          setTheme,
          handleCheckUnCheckOnClick,
          handleCreateTaskInputKeyup,
          handleTaskDelete,
        }}
      >
        <Main />
      </MainContext.Provider>
    </div>
  );
}

export default App;
