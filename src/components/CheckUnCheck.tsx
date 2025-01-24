import { useContext } from "react";
import { CircleCheckSolid, CircleRegular } from "./svg";
import { TodoContext } from "./context/TodoContext";

export type CheckUnCheckProps = {
  check?: boolean;
  readonly?: boolean;
  todoId?: string;
};
export const CheckUnCheck = ({
  check,
  readonly,
  todoId,
}: CheckUnCheckProps) => {
  const { todoList, setTodoList } = useContext(TodoContext);
  const checkUnCheckCss = `w-6 `;
  const circleRegularCss = `fill-circle cursor-pointer active:opacity-80`;
  const circleCheckCss = ` cursor-pointer active:opacity-80`;

  const handleCheckUnCheckOnClick = () => {
    setTodoList(
      todoList.map((todo) => {
        if (todo.id === todoId) {
          return {
            ...todo,
            isCheck: !todo.isCheck,
          };
        }
        return todo;
      })
    );
  };

  if (readonly) {
    return <CircleRegular className={` ${checkUnCheckCss}  fill-circle`} />;
  }

  return (
    <button
      onClick={() => {
        handleCheckUnCheckOnClick();
      }}
    >
      {check ? (
        <CircleCheckSolid className={` ${checkUnCheckCss} ${circleCheckCss}`} />
      ) : (
        <CircleRegular className={` ${checkUnCheckCss} ${circleRegularCss} `} />
      )}
    </button>
  );
};
