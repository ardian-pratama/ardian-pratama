import Brand from '@/assets/icons/brand.svg?react'
import { ButtonTheme } from '@/components/ButtonTheme'
import { MainSidebar } from '@/components/layout/MainSidebar'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Button } from '@/components/ui/button'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { signOut } from '@/lib/auth-client'
import { cn } from '@/lib/utils'
import {
  Link,
  linkOptions,
  useRouteContext,
  useRouter,
} from '@tanstack/react-router'
import {
  BookOpen,
  BookUser,
  FileBadge,
  FolderGit2,
  House,
  LayoutDashboard,
  LogOutIcon,
  UserIcon,
  UserRoundPlus,
} from 'lucide-react'

const menuItems = linkOptions([
  {
    to: '/',
    label: 'Beranda',
    icon: <House />,
  },
  {
    to: '/about',
    label: 'Tentang',
    icon: <BookUser />,
  },
  {
    to: '/achievements',
    label: 'Pencapaian',
    icon: <FileBadge />,
  },
  {
    to: '/creations',
    label: 'Hasil Karya',
    icon: <FolderGit2 />,
  },
  {
    to: '/blogs',
    label: 'Blog',
    icon: <BookOpen />,
  },
])

export function MainHeader() {
  const { session } = useRouteContext({ from: '__root__' })
  const router = useRouter()

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
          <Link key={index} to={item.to} activeOptions={{ exact: true }}>
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
        {session?.user ? (
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Avatar className="hidden size-9 @4xl:block">
                <AvatarImage src={session.user.image} />
                <AvatarFallback className="animate-pulse" />
              </Avatar>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" sideOffset={10} className="w-fit">
              <DropdownMenuItem>
                <UserIcon />
                Profile
              </DropdownMenuItem>
              <DropdownMenuItem>
                <LayoutDashboard />
                Dashboard
              </DropdownMenuItem>
              <DropdownMenuItem
                variant="destructive"
                onClick={async () => {
                  await signOut(session.session.token)
                  await router.invalidate()
                }}
              >
                <LogOutIcon />
                Keluar
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        ) : (
          <Link to="/sign-up" className="hidden @4xl:block">
            <Button className="gap-2 rounded-full px-5">
              <UserRoundPlus /> Bergabung
            </Button>
          </Link>
        )}
      </div>
    </header>
  )
}
