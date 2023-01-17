import React, { useEffect, useState } from "react";
import "./App.css";
import {
  MainContext,
  ThemeState,
  TodoListState,
} from "./components/context/MainContext";
import { Main } from "./components/Main";
import { useCRUD } from "./customHook/CRUDHook";
import { toggleTheme, useDisplay } from "./customHook/DisplayHook";
const { v4: uuidv4 } = require("uuid");
/////////////////////////////////////////////////////////

//////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function App() {
  const [todoList, setTodoList] = useState<TodoListState[]>([
    { isCheck: false, todoItem: "watch movie", todoId: "1" },
    { isCheck: false, todoItem: "do homework", todoId: "2" },
    { isCheck: false, todoItem: "play gmae", todoId: "3" },
  ] as TodoListState[]);
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
    <div className={`App   ${toggleTheme(theme)}`}>
      <MainContext.Provider value={value}>
        <Main />
      </MainContext.Provider>
    </div>
  );
}

export default App;
