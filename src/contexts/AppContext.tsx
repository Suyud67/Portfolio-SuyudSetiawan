import { createContext, FC, useState } from 'react';

interface Props extends React.HTMLAttributes<HTMLDivElement> {}

interface AppContextProps {
  windowWidth: number;
  setWindowWidth: React.Dispatch<React.SetStateAction<number>>;
}

export const AppContext = createContext<AppContextProps>({} as AppContextProps);

const AppContextProvider: FC<Props> = ({ children }): JSX.Element => {
  const [windowWidth, setWindowWidth] = useState<number>(
    typeof window !== 'undefined' ? window.innerWidth : 800
  );

  return (
    <AppContext.Provider
      value={{
        windowWidth,
        setWindowWidth,
      }}>
      {children}
    </AppContext.Provider>
  );
};

export default AppContextProvider;
