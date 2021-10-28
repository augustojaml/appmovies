import { ReactNode } from 'react';
import { ThemeProvider } from 'styled-components';
import { useCustomTheme } from '../hooks/useCustomTheme';
import { MoviesProvider } from '../hooks/useMovies';
import { GlobalStyle } from './GlobalStyle';

interface IGlobalComponent {
  children: ReactNode;
}

export function GlobalComponent({ children }: IGlobalComponent) {
  const { customTheme } = useCustomTheme();

  return (
    <>
      <ThemeProvider theme={customTheme}>
        <MoviesProvider>{children}</MoviesProvider>
        <GlobalStyle />
      </ThemeProvider>
    </>
  );
}
