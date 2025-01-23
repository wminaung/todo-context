import { createContext } from "react";
import { OpenAction } from "../Actions";

export type TodoListState = {
  idd: string;
  todoItem: string;
  todoId: string;
  isCheck: boolean;
};
export type ThemeState = "dark" | "light";
export type MainContextProps = {
  todoList: TodoListState[];
  setTodoList: React.Dispatch<React.SetStateAction<TodoListState[]>>;
  theme: ThemeState;
  setTheme: React.Dispatch<React.SetStateAction<ThemeState>>;
  handleCheckUnCheckOnClick: (todoId: string) => void;
  handleCreateTaskInputKeyup: (
    e: React.KeyboardEvent<HTMLInputElement>,
    inputRef: React.MutableRefObject<any>
  ) => void;
  handleTaskDelete: (todoId: string, isCheck: boolean) => void;
  handleClearComplete: () => void;
  showAll: () => void;
  showActive: () => void;
  showCompleted: () => void;
  cpyTodoList: TodoListState[];
  setCpyTodoList: React.Dispatch<React.SetStateAction<TodoListState[]>>;
  changeTheme: (theme: ThemeState) => void;
  mode: OpenAction;
};

export const MainContext = createContext<MainContextProps>(
  {} as MainContextProps
);
