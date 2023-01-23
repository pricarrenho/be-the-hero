import { themeWhite } from "./src/styles/theme";

type Theme = typeof themeWhite;

declare module "styled-components" {
  export interface DefaultTheme extends Theme {}
}
