import { OpenAction } from "../components/Actions";
import { ThemeState, TodoListState } from "../components/context/MainContext";

export type UseDisplayProps = {
  todoList: TodoListState[];
  setCpyTodoList: (value: React.SetStateAction<TodoListState[]>) => void;
  setTheme: (value: React.SetStateAction<ThemeState>) => void;
  setMode: React.Dispatch<React.SetStateAction<OpenAction>>;
};

export const useDisplay = ({
  setCpyTodoList,
  todoList,
  setTheme,
  setMode,
}: UseDisplayProps) => {
  const showAll = () => {
    setCpyTodoList([...todoList]);
    setMode(OpenAction.ALL);
  };
  const showActive = () => {
    setCpyTodoList(todoList.filter((todo) => !todo.isCheck));
    setMode(OpenAction.ACTIVE);
  };
  const showCompleted = () => {
    setCpyTodoList(todoList.filter((todo) => todo.isCheck));
    setMode(OpenAction.COMPLETED);
  };

  const changeTheme = (theme: ThemeState) => {
    theme === "dark" ? setTheme("light") : setTheme("dark");
  };

  return { showAll, showActive, showCompleted, changeTheme };
};

export enum ThemeColorClass {
  DARK = "bg-[#161722] ",
  LITHT = "bg-[#e4e5f1]",
}

export enum ThemeColorClassForInput {
  DARK = "bg-[#25273c] text-[#e4e5f1] font-semibold transition-all",
  LITHT = " bg-[#fefefe] text-[25273c] font-semibold transition-all",
}

export const toggleTheme = (themeState: ThemeState) => {
  return themeState === "dark" ? ThemeColorClass.DARK : ThemeColorClass.LITHT;
};

export const toggleThemeInput = (themeState: ThemeState) => {
  return themeState === "dark"
    ? ThemeColorClassForInput.DARK
    : ThemeColorClassForInput.LITHT;
};
