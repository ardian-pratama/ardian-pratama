import { AchievementCard } from '@/components/card/AchievementCard'
import { Button } from '@/components/ui/button'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
} from '@/components/ui/input-group'
import { cn } from '@/lib/utils'
import { createFileRoute, Link, linkOptions } from '@tanstack/react-router'
import { FileBadge, Menu, SearchIcon } from 'lucide-react'

const menuItems = linkOptions([])

const achievementData = [
  {
    img_url: '/images/ardian-pratama-landscape.webp',
    date: '08 Mei 2005',
    title: 'Lorem ipsum dolor sit amet, consectetur adipisicing.',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Suscipit totam nostrum sequi iure ducimus voluptas cupiditate quis magnam sit corporis.',
  },
  {
    img_url: '/images/ardian-pratama-landscape.webp',
    date: '08 Mei 2005',
    title: 'Lorem ipsum dolor sit amet, consectetur adipisicing.',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Suscipit totam nostrum sequi iure ducimus voluptas cupiditate quis magnam sit corporis.',
  },
  {
    img_url: '/images/ardian-pratama-landscape.webp',
    date: '08 Mei 2005',
    title: 'Lorem ipsum dolor sit amet, consectetur adipisicing.',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Suscipit totam nostrum sequi iure ducimus voluptas cupiditate quis magnam sit corporis.',
  },
  {
    img_url: '/images/ardian-pratama-landscape.webp',
    date: '08 Mei 2005',
    title: 'Lorem ipsum dolor sit amet, consectetur adipisicing.',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Suscipit totam nostrum sequi iure ducimus voluptas cupiditate quis magnam sit corporis.',
  },
]

export const Route = createFileRoute('/(main)/achievements/')({
  component: Achievement,
})

function Achievement() {
  return (
    <section
      className="@container flex items-center justify-center
    overflow-x-hidden @7xl:min-h-[calc(100svh-92px)]"
    >
      <div
        className="my-8 grid gap-8 px-4 @lg:px-8 @4xl:grid-cols-5
        @4xl:px-12 @5xl:px-16 @7xl:grid-cols-7 @7xl:px-32"
      >
        <div className="@max-4xl:text-center @4xl:col-span-2 @7xl:col-span-2">
          <h1 className="@4xl:text-left">Jejak yang Tertuang</h1>
          <p className="mt-4">
            Pencapaian bukan sekadar tentang pengakuan, melainkan bukti nyata
            dari dedikasi dan proses belajar yang tak pernah berhenti.
          </p>
          <div
            className="mt-4 hidden gap-2 rounded-md border border-dashed p-1
          @4xl:flex @4xl:flex-col"
          >
            <Link
              to="/achievements"
              activeOptions={{ exact: true }}
              className="hidden @4xl:block"
            >
              {({ isActive }) => {
                return (
                  <Button
                    variant={isActive ? 'secondary' : 'ghost'}
                    className={cn(
                      'w-full justify-start gap-2 px-5',
                      !isActive && 'text-muted-foreground font-normal',
                    )}
                  >
                    <FileBadge /> Semua Pencapaian
                  </Button>
                )
              }}
            </Link>
            {menuItems.map((item, index) => (
              <Link
                key={index}
                to={item.to}
                activeOptions={{ exact: true }}
                className="hidden @4xl:block"
              >
                {({ isActive }) => {
                  return (
                    <Button
                      variant={isActive ? 'secondary' : 'ghost'}
                      className={cn(
                        'w-full justify-start gap-2 px-5',
                        !isActive && 'text-muted-foreground font-normal',
                      )}
                    >
                      <FileBadge /> {item.label}
                    </Button>
                  )
                }}
              </Link>
            ))}
          </div>
        </div>
        <div
          className="grid gap-4 @4xl:col-span-3 @7xl:col-span-5
        @7xl:grid-cols-2"
        >
          <div className="mt-4 flex items-center gap-2 @4xl:mt-0 @7xl:col-span-1 @7xl:col-start-2">
            <InputGroup
              className="text-muted-foreground
            font-light"
            >
              <InputGroupInput />
              <InputGroupAddon className="mr-1">
                <SearchIcon />
              </InputGroupAddon>
            </InputGroup>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline" size="icon" className="@4xl:hidden">
                  <Menu />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent
                align="end"
                sideOffset={10}
                className="flex w-fit flex-col"
              >
                <Link to="/achievements" activeOptions={{ exact: true }}>
                  {({ isActive }) => {
                    return (
                      <Button
                        variant={isActive ? 'secondary' : 'ghost'}
                        className={cn(
                          'w-full justify-start gap-2 px-5',
                          !isActive && 'text-muted-foreground font-normal',
                        )}
                      >
                        <FileBadge /> Semua Pencapaian
                      </Button>
                    )
                  }}
                </Link>
                {menuItems.map((item, index) => (
                  <Link
                    key={index}
                    to={item.to}
                    activeOptions={{ exact: true }}
                  >
                    {({ isActive }) => {
                      return (
                        <Button
                          variant={isActive ? 'secondary' : 'ghost'}
                          className={cn(
                            'justify-start gap-2 px-5',
                            !isActive && 'text-muted-foreground font-normal',
                          )}
                        >
                          <FileBadge /> {item.label}
                        </Button>
                      )
                    }}
                  </Link>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
          {achievementData.map((data, index) => (
            <AchievementCard
              key={index}
              img_url={data.img_url}
              date={data.date}
              title={data.title}
              description={data.description}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
