import { createContext, ReactNode, useContext, useState } from 'react';
import { theme } from '../global/theme';

interface ICustomThemeProvider {
  children: ReactNode;
}

interface ICustomThemeContext {
  customTheme: typeof theme.dark | typeof theme.light;
  isActive: boolean;
  toggleTheme: () => void;
}

const CustomThemeContext = createContext({} as ICustomThemeContext);

function CustomThemeProvider({ children }: ICustomThemeProvider) {
  const [customTheme, setCustomTheme] = useState<typeof theme.dark | typeof theme.light>(theme.dark);
  const [isActive, setIsActive] = useState(false);

  function toggleTheme() {
    setIsActive(!isActive);
    customTheme === theme.dark ? setCustomTheme(theme.light) : setCustomTheme(theme.dark);
  }

  return (
    <>
      <CustomThemeContext.Provider value={{ customTheme, isActive, toggleTheme }}>
        {children}
      </CustomThemeContext.Provider>
    </>
  );
}

function useCustomTheme() {
  return useContext(CustomThemeContext);
}

export { CustomThemeProvider, useCustomTheme };
