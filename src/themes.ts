import { createGlobalStyle } from "styled-components";

interface themeStyles {
  body: string;
  fontColor: string;
}

interface themeProps {
  theme: themeStyles;
}

export const lightTheme: themeStyles = {
  body: "#ffffff",
  fontColor: "#000000",
};
export const darkTheme: themeStyles = {
  body: "#000000",
  fontColor: "#ffffff",
};

export const GlobalStyles = createGlobalStyle`
    body {
        background-color: ${(props: themeProps) => props.theme.body};
    }
    h1, h2, h3, h4, h5, span, p, div, a {
      color: ${(props: themeProps) => props.theme.fontColor};
    }
`;
