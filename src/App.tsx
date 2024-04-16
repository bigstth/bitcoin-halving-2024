import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ThemeProvider } from './components/theme-provider'
import MainApp from './pages/app'
import Nav from './components/layout/nav'
import { Header } from './components/layout/header/header'
import { Analytics } from '@vercel/analytics/react'

function App() {
  const queryClient = new QueryClient()
  return (
    <ThemeProvider defaultTheme="dark" storageKey="big-halving-theme">
      <QueryClientProvider client={queryClient}>
        <Nav />
        <Header />
        <MainApp />
        <Analytics />
      </QueryClientProvider>
    </ThemeProvider>
  )
}

export default App
