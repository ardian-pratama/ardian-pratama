import Brand from '@/assets/icons/brand.svg?react'
import { Button } from '@/components/ui/button'
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet'
import { cn } from '@/lib/utils'
import { Link, linkOptions } from '@tanstack/react-router'
import {
  BookOpen,
  BookUser,
  FileBadge,
  FolderGit2,
  House,
  Menu,
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

export function MainSidebar() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button
          variant="ghost"
          size="icon"
          className="border-border rounded-full @4xl:hidden"
        >
          <Menu />
        </Button>
      </SheetTrigger>
      <SheetContent
        side="right"
        showCloseButton={false}
        className="overflow-y-scroll"
      >
        <SheetHeader className="p-2">
          <SheetTitle className="hidden" />
          <SheetDescription className="hidden" />
          <Brand className="text-primary h-14 w-full" />
        </SheetHeader>
        <span className="mx-4 font-semibold">Menu Utama</span>
        <div className="mx-4 flex flex-col gap-2">
          {menuItems.map((item, index) => (
            <Link key={index} to={item.to} activeOptions={item.activeOptions}>
              {({ isActive }) => {
                return (
                  <SheetClose asChild>
                    <Button
                      variant={isActive ? 'secondary' : 'ghost'}
                      className={cn(
                        'w-full justify-start gap-2 px-5',
                        !isActive && 'text-muted-foreground font-normal',
                      )}
                    >
                      {item.icon} {item.label}
                    </Button>
                  </SheetClose>
                )
              }}
            </Link>
          ))}
        </div>
      </SheetContent>
    </Sheet>
  )
}
