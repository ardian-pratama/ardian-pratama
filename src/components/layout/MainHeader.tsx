import Brand from '@/assets/icons/brand.svg?react'
import { ButtonTheme } from '@/components/ButtonTheme'
import { MainSidebar } from '@/components/layout/MainSidebar'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import { Link, linkOptions } from '@tanstack/react-router'
import {
  BookOpen,
  BookUser,
  FileBadge,
  FolderGit2,
  House,
  UserRoundPlus,
} from 'lucide-react'

const menuItems = linkOptions([
  {
    to: '/',
    label: 'Beranda',
    icon: <House />,
    activeOptions: { exact: true },
  },
  {
    to: '/about',
    label: 'Tentang',
    icon: <BookUser />,
    activeOptions: { exact: true },
  },
  {
    to: '/achievements',
    label: 'Pencapaian',
    icon: <FileBadge />,
    activeOptions: { exact: true },
  },
  {
    to: '/creations',
    label: 'Hasil Karya',
    icon: <FolderGit2 />,
    activeOptions: { exact: true },
  },
  {
    to: '/blogs',
    label: 'Blog',
    icon: <BookOpen />,
    activeOptions: { exact: true },
  },
])

export function MainHeader() {
  return (
    <header
      className="from-background/0 to-background @container sticky top-0 z-10
      flex items-center gap-2 bg-gradient-to-t p-4"
    >
      <div
        className="bg-card flex h-11 shrink-0 items-center justify-center
        rounded-full border px-2 shadow-xs"
      >
        <Brand className="text-primary h-9 w-full" />
      </div>
      <div
        className="bg-card ml-auto hidden h-11 shrink-0 items-center
      justify-center rounded-full border px-1 shadow-xs @4xl:flex"
      >
        {menuItems.map((item, index) => (
          <Link key={index} to={item.to} activeOptions={item.activeOptions}>
            {({ isActive }) => {
              return (
                <Button
                  variant={isActive ? 'secondary' : 'ghost'}
                  className={cn(
                    'justify-start gap-2 rounded-full px-5',
                    !isActive && 'text-muted-foreground font-normal',
                  )}
                >
                  {item.icon} {item.label}
                </Button>
              )
            }}
          </Link>
        ))}
      </div>
      <div
        className="bg-card ml-auto inline-flex h-11
        shrink-0 items-center justify-center gap-2 rounded-full border px-1
        shadow-xs @4xl:ml-0"
      >
        <ButtonTheme />
        <MainSidebar />
      </div>
    </header>
  )
}
