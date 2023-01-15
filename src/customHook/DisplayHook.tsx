import React from "react";
import { ThemeState, TodoListState } from "../components/context/MainContext";

type UseDisplayProps = {
  todoList: TodoListState[];
  setCpyTodoList: (value: React.SetStateAction<TodoListState[]>) => void;
  setTheme: (value: React.SetStateAction<ThemeState>) => void;
};

export const useDisplay = ({
  setCpyTodoList,
  todoList,
  setTheme,
}: UseDisplayProps) => {
  const showAll = () => {
    setCpyTodoList([...todoList]);
  };
  const showActive = () => {
    setCpyTodoList(todoList.filter((todo) => !todo.isCheck));
  };
  const showCompleted = () => {
    setCpyTodoList(todoList.filter((todo) => todo.isCheck));
  };

  const changeTheme = (theme: ThemeState) => {
    theme === "dark" ? setTheme("light") : setTheme("dark");
  };

  return { showAll, showActive, showCompleted, changeTheme };
};
