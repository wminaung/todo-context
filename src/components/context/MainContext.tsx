import React, { createContext } from "react";

export type TodoListState = {
  todoItem: string;
  todoId: number;
  isCheck: boolean;
};
export type ThemeState = "dark" | "light";
export type MainContextProps = {
  todoList: TodoListState[];
  setTodoList: React.Dispatch<React.SetStateAction<TodoListState[]>>;
  theme: ThemeState;
  setTheme: React.Dispatch<React.SetStateAction<ThemeState>>;
  // handleKeyup: (
  //   e: React.KeyboardEvent<HTMLInputElement>,
  //   inputRef: React.MutableRefObject<any>
  // ) => void;
};

export const MainContext = createContext<MainContextProps>(
  {} as MainContextProps
);
