import React from 'react';
import {createContext, useState, useContext} from 'react';

export type PopupContextType = {
  initialized: Object;
  setInitialized: Object;
}

interface Initial {
  active: boolean;
  message: string;
  color: string;
}

type ThemeContextProviderProps = {
  children: React.ReactNode;
}

export const PopupContext = createContext<PopupContextType | null>(null);

export const PopupProvider = ({children}: ThemeContextProviderProps) => {
  const data = {
    active: false,
    message: '',
    color: '',
  };
  const [initialized, setInitialized] = useState<Initial>(data);

  if (initialized.active != null) {
    setTimeout(() => {
      return setInitialized(data);
    }, 2000);
  }
  return <PopupContext.Provider value={{initialized,
    setInitialized}}>{children}</PopupContext.Provider>;
};

export const useGlobalContext = () => useContext(PopupContext);
