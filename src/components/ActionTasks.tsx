import React from "react";

type ActionTasksProps = {
  children: React.ReactNode;
};

export const ActionTasks = ({ children }: ActionTasksProps) => {
  return (
    <div className="relative py-4  bg-box w-11/12 mx-auto flex justify-between items-center px-3   text-sm rounded-b-lg">
      <div>5 items left</div>
      {children}
      <div>Clear Complete</div>
    </div>
  );
};
