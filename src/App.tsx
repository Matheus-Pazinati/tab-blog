import { ThemeProvider } from 'styled-components'
import { GlobalReset } from './styles/global'
import { defaulTheme } from './styles/themes/default'

import { BrowserRouter } from 'react-router-dom'
import { AppRoutes } from './AppRoutes'
import { QueryClient, QueryClientProvider } from 'react-query'

const queryClient = new QueryClient()

export function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={defaulTheme}>
        <GlobalReset />
        <BrowserRouter>
          <AppRoutes />
        </BrowserRouter>
      </ThemeProvider>
    </QueryClientProvider>
  )
}
