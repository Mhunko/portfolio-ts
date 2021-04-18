import { DefaultTheme, createGlobalStyle } from "styled-components";

export const theme: DefaultTheme = {
  fontSize: 10,
};

export const GlobalStyle = createGlobalStyle`
html{
    ${(props) => props.theme.fontSize}
}
`;
