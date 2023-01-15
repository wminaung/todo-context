import React, { createContext } from "react";
import { ThemeProps } from "../Theme";

export type TodoListState = {
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
  changeTheme: (theme: ThemeState) => void;
};

export const MainContext = createContext<MainContextProps>(
  {} as MainContextProps
);
