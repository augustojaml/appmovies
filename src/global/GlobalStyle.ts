import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    background: ${({ theme }) => theme.colors.dark900};
    color: ${({ theme }) => theme.colors.dark100};
    font-family: ${({ theme }) => theme.fonts.text};
  }

  @media (max-width: 1080px) {
    html {
      font-size: 93.75%;
    }
  }
  /*MEDIA SCREEN*/
  @media (max-width: 720px) {
    html {
      font-size: 87.5%;
    }
  }

  body, input, textarea, select, button {
    font-family: ${({ theme }) => theme.fonts.text};
    font-weight: 400;
    font-size: 1rem;
  }

  button {
    cursor: pointer;
    transition: filter 0.2s;
    &:hover {
      filter: brightness(0.8);
    }
  }

  a {
    color: inherit;
    text-decoration: none;
  }
`;
