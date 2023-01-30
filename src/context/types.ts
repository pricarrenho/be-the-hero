import { ReactElement } from "react";

export type GlobalProviderProps = {
  children: ReactElement;
};

export type GlobalContextType = {
  currentUser?: UserData;
  handleLogin: (value: string) => boolean;
  handleLogout: () => void;
};

export type UserData = {
  name: string;
  email: string;
  phone: string;
  city: string;
  uf: string;
};

export type CasesData = {
  id: string;
  title: string;
  description: string;
  value: number;
};
