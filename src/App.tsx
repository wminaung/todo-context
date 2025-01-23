import { useEffect, useState } from "react";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import "./App.css";
import { OpenAction } from "./components/Actions";
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
    {
      idd: uuidv4(),
      isCheck: false,
      todoItem: "1. watch movie",
      todoId: "1xid",
    },
    {
      idd: uuidv4(),
      isCheck: true,
      todoItem: "2. do homework",
      todoId: "2xid",
    },
    { idd: uuidv4(), isCheck: false, todoItem: "3. play game", todoId: "3xid" },
    {
      idd: uuidv4(),
      isCheck: true,
      todoItem: "4. clean house",
      todoId: "4xid",
    },
    {
      idd: uuidv4(),
      isCheck: false,
      todoItem: "5. learn new thing",
      todoId: "5xid",
    },
  ] as TodoListState[]);
  const [cpyTodoList, setCpyTodoList] = useState<TodoListState[]>(
    [] as TodoListState[]
  );
  const [theme, setTheme] = useState<ThemeState>("dark");
  const [mode, setMode] = useState<OpenAction>(OpenAction.ALL);

  useEffect(() => {
    setCpyTodoList([...todoList]);
    setMode(OpenAction.ALL);
  }, [todoList]);

  //////////////////////////////////////////////////////////////////////
  ////////////// display items
  //////////////////////////////////////////////////////////////////////
  const { changeTheme, showActive, showAll, showCompleted } = useDisplay({
    setCpyTodoList,
    setTheme,
    todoList,
    setMode,
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
    setCpyTodoList,
    mode,
  };
  return (
    <div className={`App   ${toggleTheme(theme)}`}>
      <MainContext.Provider value={value}>
        <DndProvider backend={HTML5Backend}>
          <Main />
        </DndProvider>
      </MainContext.Provider>
    </div>
  );
}

export default App;
