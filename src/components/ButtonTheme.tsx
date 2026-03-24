import { Button } from '@/components/ui/button'
import { setTheme } from '@/features/theme/theme.functions'
import { useRouteContext, useRouter } from '@tanstack/react-router'
import { Moon, Sun } from 'lucide-react'
import { AnimatePresence, motion } from 'motion/react'

export function ButtonTheme() {
  const { theme } = useRouteContext({ from: '__root__' })
  const router = useRouter()

  function toggleTheme() {
    const listTheme = {
      light: 'dark',
      dark: 'light',
    } as const
    const nextTheme = listTheme[theme]

    setTheme({ data: nextTheme }).then(() => router.invalidate())
  }

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={toggleTheme}
      className="relative rounded-full"
    >
      <AnimatePresence mode="wait" initial={false}>
        {theme === 'light' ? (
          <motion.div
            key="sun"
            initial={{ rotate: -90, opacity: 0, scale: 0.5 }}
            animate={{ rotate: 0, opacity: 1, scale: 1 }}
            exit={{ rotate: 90, opacity: 0, scale: 0.5 }}
            transition={{ duration: 0.2 }}
            className="absolute"
          >
            <Sun />
          </motion.div>
        ) : (
          <motion.div
            key="moon"
            initial={{ rotate: 90, opacity: 0, scale: 0.5 }}
            animate={{ rotate: 0, opacity: 1, scale: 1 }}
            exit={{ rotate: -90, opacity: 0, scale: 0.5 }}
            transition={{ duration: 0.2 }}
            className="absolute"
          >
            <Moon />
          </motion.div>
        )}
      </AnimatePresence>
    </Button>
  )
}
