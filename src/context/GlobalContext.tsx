import { createContext, useContext, useEffect, useState } from "react";
import { mockJson } from "../pages/Home/mockJson";
import {
  getLocalStorageItem,
  removeLocalStorageItem,
  setLocalStorageItem,
} from "../utils/localStorage";
import {
  CasesData,
  GlobalContextType,
  GlobalProviderProps,
  UserData,
} from "./types";

export const GlobalContext = createContext<GlobalContextType>(
  {} as GlobalContextType
);

export const GlobalProvider = ({ children }: GlobalProviderProps) => {
  const [currentUser, setCurrentUser] = useState<UserData | undefined>(
    getLocalStorageItem("CurrentUser")
  );

  const [cases, setCases] = useState<CasesData[]>(getLocalStorageItem("Cases"));

  const handleLogin = (value: string) => {
    const userData: UserData[] | undefined = getLocalStorageItem(
      "Users"
    )?.filter((user: UserData) => user.email === value);

    if (userData) {
      setCurrentUser(userData[0]);
      setLocalStorageItem("CurrentUser", userData[0]);
    }

    return !!userData?.length;
  };

  const handleCases = (cases: CasesData[]) => {
    setCases(cases);
    setLocalStorageItem("Cases", cases);
  };

  const handleLogout = () => {
    setCurrentUser(undefined);
    removeLocalStorageItem("CurrentUser");
  };

  useEffect(() => {
    if (!getLocalStorageItem("Cases")) {
      setLocalStorageItem("Cases", mockJson);
    }
  }, []);

  return (
    <GlobalContext.Provider
      value={{
        currentUser,
        handleLogin,
        handleLogout,
        cases,
        handleCases,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export const useGlobalContext = () => useContext(GlobalContext);
