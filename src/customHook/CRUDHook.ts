import { TodoListState } from "../components/context/MainContext";

export type UseCRUDProps = {
  setTodoList: (value: React.SetStateAction<TodoListState[]>) => void;
  todoList: TodoListState[];
  uuidv4: any;
};

export const useCRUD = ({ setTodoList, todoList, uuidv4 }: UseCRUDProps) => {
  const handleCheckUnCheckOnClick = (todoId: string) => {
    setTodoList(
      todoList.map((todo) => {
        if (todo.todoId === todoId) {
          todo.isCheck = !todo.isCheck;
        }
        return todo;
      })
    );
  };

  const handleCreateTaskInputKeyup = (
    e: React.KeyboardEvent<HTMLInputElement>,
    inputRef: React.MutableRefObject<any>
  ) => {
    if (e.key === "Enter") {
      setTodoList([
        ...todoList,
        {
          idd: uuidv4(),
          isCheck: false,
          todoItem: inputRef.current?.value,
          todoId: uuidv4(),
        },
      ]);
      inputRef.current.value = "";
    }
  };

  const handleTaskDelete = (todoId: string, isCheck: boolean) => {
    if (isCheck === false) return;
    setTodoList(
      todoList.filter((todo) => {
        return todo.todoId !== todoId;
      })
    );
  };

  const handleClearComplete = () => {
    const uncheckItems = todoList.filter((todo) => !todo.isCheck);
    const checkItems = todoList.filter((todo) => todo.isCheck);
    if (checkItems.length) {
      setTodoList(uncheckItems);
    }
  };
  return {
    handleCheckUnCheckOnClick,
    handleCreateTaskInputKeyup,
    handleTaskDelete,
    handleClearComplete,
  };
};
