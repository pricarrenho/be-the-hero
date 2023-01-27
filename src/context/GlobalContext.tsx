import {
  createContext,
  ReactElement,
  useContext,
  useEffect,
  useState,
} from "react";
import { mockJson } from "../pages/Home/mockJson";

type GlobalProviderProps = {
  children: ReactElement;
};

type GlobalContextType = {
  username: string;
  setUsername: (value: string) => void;
  handleLogin: (value: string) => boolean;
  setLocalStorageUsers: (value: UserData) => void;
  setLocalStorageCases: (value: CasesData) => void;
  getLocalStorageCases: () => CasesData[] | undefined;
};

type UserData = {
  name: string;
  email: string;
  phone: string;
  city: string;
  uf: string;
};

type CasesData = {
  id: string;
  title: string;
  description: string;
  value: number;
};

export const GlobalContext = createContext<GlobalContextType>(
  {} as GlobalContextType
);

export const GlobalProvider = ({ children }: GlobalProviderProps) => {
  const [username, setUsername] = useState("");

  const handleLogin = (value: string) => {
    return !!getLocalStorageUsers()?.filter((user) => user.email === value)
      .length;
  };

  const getLocalStorageUsers = (): UserData[] | undefined => {
    const localStorageData = localStorage.getItem("users");
    if (!localStorageData) return;
    return JSON.parse(localStorageData);
  };

  const setLocalStorageUsers = (value: UserData) => {
    const currentUsers = getLocalStorageUsers() || [];
    currentUsers.push(value);
    const localStorageData = JSON.stringify(currentUsers);
    localStorage.setItem("users", localStorageData);
  };

  const getLocalStorageCases = (): CasesData[] | undefined => {
    const localStorageData = localStorage.getItem("cases");
    if (!localStorageData) return;
    return JSON.parse(localStorageData);
  };

  const setLocalStorageCases = (value: CasesData) => {
    const currentCases = getLocalStorageCases() || [];
    currentCases.push(value);
    const localStorageData = JSON.stringify(currentCases);
    localStorage.setItem("cases", localStorageData);
  };

  useEffect(() => {
    if (!getLocalStorageCases()) {
      localStorage.setItem("cases", JSON.stringify(mockJson));
    }
  }, []);

  return (
    <GlobalContext.Provider
      value={{
        username,
        setUsername,
        handleLogin,
        setLocalStorageUsers,
        setLocalStorageCases,
        getLocalStorageCases,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export const useGlobalContext = () => useContext(GlobalContext);
