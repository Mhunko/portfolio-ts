import "styled-components";

interface Theme {
  fontSize: number;
}

declare module "styled-components" {
  export interface DefaultTheme extends Theme {}
}
