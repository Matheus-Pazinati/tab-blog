import { ThemeProvider } from "styled-components";
import { GlobalReset } from "./styles/global";
import { defaulTheme } from "./styles/themes/default";

export function App() {

  return (
    <ThemeProvider theme={defaulTheme}>
      <GlobalReset />
      <h1>Tab Blog</h1>
    </ThemeProvider>
  )
}
