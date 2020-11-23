import React, { createContext } from 'react';
import { Popout } from '@test';

type ContextValueProps = {
  go: (props: any) => void;
  togglePopout: (value: Popout) => void;
};

const contextValue = (val: ContextValueProps) => val;

const defaultValue = contextValue({
  go: () => {},
  togglePopout: () => {},
});

export const AppContext = createContext(defaultValue);

type AppProviderProps = {
  value: ContextValueProps;
  children: JSX.Element;
};

export const AppProvider = ({
  children,
  value = defaultValue,
}: AppProviderProps) => {
  return (
    <AppContext.Provider value={value}>
      {children}
    </AppContext.Provider>
  );
};
