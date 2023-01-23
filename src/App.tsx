import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "./styles/global";
import { themeWhite } from "./styles/theme";

export function App() {
  return (
    <ThemeProvider theme={themeWhite}>
      <div>Be The Hero</div>
      <GlobalStyle />
    </ThemeProvider>
  );
}
