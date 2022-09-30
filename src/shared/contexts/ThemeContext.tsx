import { ThemeProvider } from '@mui/material';
import { Box } from '@mui/system';
import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
} from 'react';
import { LightTheme, DarkTheme } from '../themes/index';

interface IThemeContextData {
  themeName: 'dark' | 'light';
  toggleTheme: () => void;
}

interface IAppThemeProviderProps {
  children: React.ReactNode;
}

const ThemeContext = createContext({} as IThemeContextData);

export const AppThemeProvider: React.FC<IAppThemeProviderProps> = ({
  children,
}) => {
  const [themeName, setThemeName] = useState<'dark' | 'light'>('light');

  const toggleTheme = useCallback(() => {
    setThemeName(oldTheme => (oldTheme === 'dark' ? 'light' : 'dark'));
  }, []);

  const theme = useMemo(() => {
    return themeName === 'light' ? LightTheme : DarkTheme;
  }, [themeName]);

  return (
    <ThemeContext.Provider value={{ themeName, toggleTheme }}>
      <ThemeProvider theme={theme}>
        <Box
          width="100vw"
          height="100vh"
          bgcolor={theme.palette.background.default}
        >
          {children}
        </Box>
      </ThemeProvider>
    </ThemeContext.Provider>
  );
};

export const useAppThemeContext = () => {
  return useContext(ThemeContext);
};
