import { useContext, useRef } from "react";
import { toggleThemeInput } from "../utils/theme-utils";
import { v4 as uuidv4 } from "uuid";
import { TodoContext } from "./context/TodoContext";

type CreateTaskInputProps = {
  children: React.ReactNode; //<CheckUnCheck/>
};

export const CreateTaskInput = ({ children }: CreateTaskInputProps) => {
  const { theme, todoList, setTodoList } = useContext(TodoContext);

  const inputRef = useRef<HTMLInputElement>(null);
  const handleCreateTaskInputKeyup = (
    e: React.KeyboardEvent<HTMLInputElement>
  ) => {
    if (e.key === "Enter" && inputRef.current) {
      if (inputRef.current?.value.trim() === "") {
        alert("Please enter a task");
        return;
      }

      setTodoList([
        ...todoList,
        {
          id: uuidv4(),
          isCheck: false,
          todoItem: inputRef.current.value,
        },
      ]);
      inputRef.current.value = "";
    }
  };
  return (
    <div
      className={` w-11/12 ${toggleThemeInput(
        theme
      )} mx-auto  z-20 relative py-4  flex justify-between px-3 rounded-md sm:w-8/12`}
    >
      {children}
      <input
        ref={inputRef}
        onKeyUp={handleCreateTaskInputKeyup}
        type="text"
        className={`w-11/12  bg-inherit text-inherit  outline-none px-2  text-lg  placeholder:text-sm select-none`}
        placeholder="Create a new todo..."
      />
    </div>
  );
};
//  bg-box =--very-dark-desaturated-blue
