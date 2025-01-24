import { createContext } from "react";
import { v4 as uuidv4 } from "uuid";

export type TodoState = {
  id: string;
  todoItem: string;
  isCheck: boolean;
};

export type ThemeState = "dark" | "light";

export enum OpenAction {
  ALL = "all",
  ACTIVE = "active",
  COMPLETED = "completed",
}

export type TodoContextProps = {
  todoList: TodoState[];
  setTodoList: React.Dispatch<React.SetStateAction<TodoState[]>>;
  theme: ThemeState;
  setTheme: React.Dispatch<React.SetStateAction<ThemeState>>;
  showIds: string[];
  setShowIds: React.Dispatch<React.SetStateAction<string[]>>;
  openAction: OpenAction;
  setOpenAction: React.Dispatch<React.SetStateAction<OpenAction>>;
};

export const defaultTodoList = [
  {
    id: `1.uuidv4()`,
    isCheck: false,
    todoItem: "1. watch movie",
  },
  {
    id: `2.uuidv4()`,
    isCheck: true,
    todoItem: "2. do homework",
  },
  {
    id: `3.uuidv4()`,
    isCheck: false,
    todoItem: "3. play game",
  },
  {
    id: `4.uuidv4()`,
    isCheck: true,
    todoItem: "4. clean house",
  },
  {
    id: `5.uuidv4()`,
    isCheck: false,
    todoItem: "5. learn new thing",
  },
] as TodoState[];

export const defaultShowIds = defaultTodoList.map((todo) => todo.id);

export const defaultTodoContext: TodoContextProps = {
  todoList: defaultTodoList,
  setTodoList: () => {},
  theme: "dark",
  setTheme: () => {},
  showIds: defaultShowIds,
  setShowIds: () => {},
  openAction: OpenAction.ALL,
  setOpenAction: () => {},
};

export const TodoContext = createContext<TodoContextProps>(defaultTodoContext);
