import React from "react";

type HeadingProps = {
  children: React.ReactNode;
  h1: string;
};

export const Heading = ({ children, h1 }: HeadingProps) => {
  return (
    <header className="z-20 relative  py-7 mb-9 mx-auto flex items-center justify-between h-10 w-11/12 sm:w-8/12">
      <h1 id="todo" className="text-4xl text-white font-semibold ">
        {h1}
      </h1>
      {children}
    </header>
  );
};
