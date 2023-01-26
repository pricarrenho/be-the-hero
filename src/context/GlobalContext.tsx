import { createContext, ReactElement, useContext, useState } from "react";

type GlobalProviderProps = {
  children: ReactElement;
};

type GlobalContextType = {
  username: string;
  setUsername: (value: string) => void;
};

export const GlobalContext = createContext<GlobalContextType>(
  {} as GlobalContextType
);

export const GlobalProvider = ({ children }: GlobalProviderProps) => {
  const [username, setUsername] = useState("");

  return (
    <GlobalContext.Provider value={{ username, setUsername }}>
      {children}
    </GlobalContext.Provider>
  );
};

export const useGlobalContext = () => useContext(GlobalContext);
