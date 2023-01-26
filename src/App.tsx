import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { GlobalProvider } from "./context/GlobalContext";
import { Routes } from "./routes";
import { GlobalStyle } from "./styles/global";
import { themeWhite } from "./styles/theme";

export function App() {
  return (
    <GlobalProvider>
      <ThemeProvider theme={themeWhite}>
        <BrowserRouter>
          <Routes />
        </BrowserRouter>
        <GlobalStyle />
      </ThemeProvider>
    </GlobalProvider>
  );
}
