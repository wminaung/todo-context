import { useState } from "react";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import "./App.css";
import { Main } from "./components/Main";
import { toggleTheme } from "./utils/theme-utils";
import {
  defaultShowIds,
  defaultTodoContext,
  defaultTodoList,
  OpenAction,
  ThemeState,
  TodoContext,
  TodoContextProps,
  TodoState,
} from "./components/context/TodoContext";

/////////////////////////////////////////////////////////

function App() {
  const [todoList, setTodoList] = useState<TodoState[]>(defaultTodoList);
  const [showIds, setShowIds] = useState<string[]>(defaultShowIds);
  const [theme, setTheme] = useState<ThemeState>("dark");
  const [openAction, setOpenAction] = useState<OpenAction>(OpenAction.ALL);

  const value: TodoContextProps = {
    theme,
    setTheme,
    todoList,
    setTodoList,
    openAction,
    setShowIds,
    showIds,
    setOpenAction,
  };

  return (
    <div className={`App   ${toggleTheme(theme)}`} data-testid="app-container">
      <TodoContext.Provider value={{ ...defaultTodoContext, ...value }}>
        <DndProvider backend={HTML5Backend}>
          <Main />
        </DndProvider>
      </TodoContext.Provider>
    </div>
  );
}

export default App;
