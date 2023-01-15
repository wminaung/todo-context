import React, { useEffect, useState } from "react";
import "./App.css";
import {
  MainContext,
  ThemeState,
  TodoListState,
} from "./components/context/MainContext";
import { Main } from "./components/Main";
import { useCRUD } from "./customHook/CRUDHook";
import { useDisplay } from "./customHook/DisplayHook";
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
  const [cpyTodoList, setCpyTodoList] = useState<TodoListState[]>(
    [] as TodoListState[]
  );
  const [theme, setTheme] = useState<ThemeState>("dark");

  useEffect(() => {
    setCpyTodoList([...todoList]);
  }, [todoList]);

  //////////////////////////////////////////////////////////////////////
  ////////////// display items
  //////////////////////////////////////////////////////////////////////
  const { changeTheme, showActive, showAll, showCompleted } = useDisplay({
    setCpyTodoList,
    setTheme,
    todoList,
  });

  //////////////////////////////////////////////////////////////////////
  ////////////// crud data
  //////////////////////////////////////////////////////////////////////
  const {
    handleCheckUnCheckOnClick,
    handleCreateTaskInputKeyup,
    handleTaskDelete,
    handleClearComplete,
  } = useCRUD({ setTodoList, todoList, uuidv4 });

  //////////////////////////////////////////////////////////////////////
  console.count("app render");
  const value = {
    todoList,
    setTodoList,
    theme,
    setTheme,
    handleCheckUnCheckOnClick,
    handleCreateTaskInputKeyup,
    handleTaskDelete,
    handleClearComplete,
    showAll,
    showActive,
    showCompleted,
    cpyTodoList,
    changeTheme,
  };
  return (
    <div className={`App ${toggleTheme(theme)}`}>
      <MainContext.Provider value={value}>
        <Main />
      </MainContext.Provider>
    </div>
  );
}

export default App;
