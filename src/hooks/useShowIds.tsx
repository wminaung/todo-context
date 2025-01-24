import { useContext, useEffect } from "react";
import { OpenAction, TodoContext } from "../components/context/TodoContext";

const useShowIds = () => {
  const { todoList, openAction, showIds, setShowIds } = useContext(TodoContext);

  useEffect(() => {
    if (openAction === OpenAction.ALL) {
      setShowIds(todoList.map((todo) => todo.id));
    } else if (openAction === OpenAction.ACTIVE) {
      setShowIds(
        todoList.filter((todo) => todo.isCheck === false).map((todo) => todo.id)
      );
    } else if (openAction === OpenAction.COMPLETED) {
      setShowIds(
        todoList.filter((todo) => todo.isCheck === true).map((todo) => todo.id)
      );
    }
  }, [openAction, setShowIds, todoList]);

  const showTodoList = todoList.filter((todo) => showIds.includes(todo.id));

  return { showTodoList };
};

export default useShowIds;
