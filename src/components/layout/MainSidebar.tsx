import Brand from '@/assets/icons/brand.svg?react'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Button } from '@/components/ui/button'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
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
  EllipsisVertical,
  FileBadge,
  FolderGit2,
  House,
  LayoutDashboard,
  LogOutIcon,
  Menu,
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

export function MainSidebar() {
  const { session } = useRouteContext({ from: '__root__' })
  const router = useRouter()

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
        className="overflow-x-hidden overflow-y-scroll"
      >
        <SheetHeader className="p-2">
          <SheetTitle className="hidden" />
          <SheetDescription className="hidden" />
          <Brand className="text-primary h-14 w-full" />
        </SheetHeader>
        <span className="mx-4 font-semibold">Menu Utama</span>
        <div className="mx-4 flex flex-col gap-2">
          {menuItems.map((item, index) => (
            <Link key={index} to={item.to} activeOptions={{ exact: true }}>
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
        <SheetFooter className={session?.user ? 'p-1' : 'p-2'}>
          {session?.user ? (
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  variant="ghost"
                  className="h-auto justify-start gap-2 p-2"
                >
                  <Avatar>
                    <AvatarImage src={session.user.image} />
                    <AvatarFallback className="animate-pulse" />
                  </Avatar>
                  <div className="flex flex-col text-left leading-none">
                    <span className="max-w-[12rem] truncate text-xs">
                      {session.user.name}
                    </span>
                    <span
                      className="text-muted-foreground max-w-[12rem]
                    truncate text-xs font-normal"
                    >
                      {session.user.email}
                    </span>
                  </div>
                  <EllipsisVertical className="mr-2 ml-auto" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent sideOffset={4} className="w-fit">
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
            <SheetClose asChild>
              <Link to="/sign-up">
                <Button className="w-full gap-2">
                  <UserRoundPlus /> Bergabung
                </Button>
              </Link>
            </SheetClose>
          )}
        </SheetFooter>
      </SheetContent>
    </Sheet>
  )
}
