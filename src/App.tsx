import { ThemeProvider } from 'styled-components'
import { GlobalReset } from './styles/global'
import { defaulTheme } from './styles/themes/default'

import { BrowserRouter } from 'react-router-dom'
import { AppRoutes } from './AppRoutes'

export function App() {
  return (
    <ThemeProvider theme={defaulTheme}>
      <GlobalReset />
      <BrowserRouter>
        <AppRoutes />
      </BrowserRouter>
    </ThemeProvider>
  )
}
