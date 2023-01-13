import { createContext } from "react";

type MainContentProps = {
  name: string;
  setName: React.Dispatch<React.SetStateAction<string>>;
};

export const MainContext = createContext<MainContentProps>(
  {} as MainContentProps
);
