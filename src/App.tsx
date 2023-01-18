import { ThemeProvider } from 'styled-components'
import { GlobalReset } from './styles/global'
import { defaulTheme } from './styles/themes/default'

import { Home } from './pages/Home'

export function App() {
  return (
    <ThemeProvider theme={defaulTheme}>
      <GlobalReset />
      <Home />
    </ThemeProvider>
  )
}
