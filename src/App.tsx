import React, { useContext, useState } from "react";
import "./App.css";
import {
  MainContext,
  ThemeState,
  TodoListState,
} from "./components/context/MainContext";

import { Main } from "./components/Main";

function App() {
  const [todoList, setTodoList] = useState<TodoListState[]>(
    [] as TodoListState[]
  );
  const [theme, setTheme] = useState<ThemeState>("dark");

  return (
    <div className="App">
      <MainContext.Provider value={{ todoList, setTodoList, theme, setTheme }}>
        <Main />
      </MainContext.Provider>
    </div>
  );
}

export default App;
