import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { cn } from '@/lib/utils'
import { motion, useInView, useScroll, useTransform } from 'motion/react'
import { Fragment, type ReactNode, useRef } from 'react'

interface TimelineProps {
  side: 'right' | 'left'
  icon: ReactNode
  title?: string
  description?: string
  content?: ReactNode
}

interface TimelineCardMobileProps {
  icon: ReactNode
  title?: string
  description?: string
  content?: ReactNode
}

interface TimelineCardDesktopProps {
  side: 'right' | 'left'
  icon: ReactNode
  title?: string
  description?: string
  content?: ReactNode
}

export function Timeline({ data }: TimelineProps[]) {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start center', 'end center'],
  })
  const height = useTransform(scrollYProgress, [0, 1], ['0%', '100%'])

  return (
    <div ref={ref} className="relative flex flex-col gap-8">
      <motion.div
        style={{ height }}
        transition={{ duration: 0.4 }}
        className="border-primary absolute top-0 ml-[19px] border-r-2 border-dashed @4xl:left-1/2 @4xl:mr-2
      @4xl:ml-0 @4xl:-translate-x-1/2"
      />
      {data.map((item, index) => (
        <Fragment key={index}>
          <TimelineCardMobile
            icon={item.icon}
            title={item.title}
            description={item.description}
            content={item.content}
          />
          <TimelineCardDesktop
            side={item.side}
            icon={item.icon}
            title={item.title}
            description={item.description}
            content={item.content}
          />
        </Fragment>
      ))}
    </div>
  )
}

function TimelineCardMobile({
  icon,
  title,
  description,
  content,
}: TimelineCardMobileProps) {
  const ref = useRef(null)
  const isInView = useInView(ref, { amount: 0.5 })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: -40 }}
      animate={isInView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.4 }}
      className="relative flex items-center gap-4 @4xl:hidden"
    >
      <div
        className="bg-primary text-primary-foreground ring-background
      relative inline-flex size-9 shrink-0 items-center
      justify-center rounded-full ring-4 [&_svg]:pointer-events-none
      [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4"
      >
        {icon}
      </div>
      <Card className="w-full">
        <CardHeader>
          <CardTitle>{title}</CardTitle>
          <CardDescription>{description}</CardDescription>
        </CardHeader>
        {content && <CardContent>{content}</CardContent>}
      </Card>
    </motion.div>
  )
}

function TimelineCardDesktop({
  side,
  icon,
  title,
  description,
  content,
}: TimelineCardDesktopProps) {
  const ref = useRef(null)
  const isInView = useInView(ref, { amount: 0.5 })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: side === 'left' ? -30 : 30 }}
      animate={isInView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.4 }}
      className="relative hidden items-center gap-4 @4xl:flex "
    >
      <Card className={cn('w-full', side === 'left' ? 'visible' : 'invisible')}>
        <CardHeader>
          <CardTitle>{title}</CardTitle>
          <CardDescription>{description}</CardDescription>
        </CardHeader>
        {content && <CardContent>{content}</CardContent>}
      </Card>
      <div
        className="bg-primary text-primary-foreground ring-background
      relative inline-flex size-9 shrink-0 items-center
      justify-center rounded-full ring-4 [&_svg]:pointer-events-none
      [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4"
      >
        {icon}
      </div>
      <Card
        className={cn('w-full', side === 'right' ? 'visible' : 'invisible')}
      >
        <CardHeader>
          <CardTitle>{title}</CardTitle>
          <CardDescription>{description}</CardDescription>
        </CardHeader>
        {content && <CardContent>{content}</CardContent>}
      </Card>
    </motion.div>
  )
}
