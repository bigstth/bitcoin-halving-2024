import { Github, Moon, Sun } from 'lucide-react'
import { Button } from '../../ui/button'
import { useTheme } from '@/components/theme-provider'

const Nav = () => {
  const { theme, setTheme } = useTheme()
  return (
    <div className="w-full text-end p-2">
      <Button
        size="icon"
        variant="ghost"
        onClick={() => {
          if (theme === 'dark') {
            setTheme('light')
          } else {
            setTheme('dark')
          }
        }}
      >
        {theme === 'light' ? <Sun /> : <Moon />}
      </Button>
      <Button size="icon" variant="ghost" onClick={() => window.open('https://github.com/bigstth/bitcoin-halving-2024', '_blank')}>
        <Github />
      </Button>
    </div>
  )
}

export default Nav
