import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { motion, useInView } from 'motion/react'
import { useRef } from 'react'

interface AchievementCardProps {
  img_url: string
  date: string
  title: string
  description: string
  index: number
}

export function AchievementCard({
  img_url,
  date,
  title,
  description,
  index,
}: AchievementCardProps) {
  const ref = useRef(null)
  const isInView = useInView(ref, { amount: 0.5 })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
      animate={isInView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.4 }}
      className="relative"
    >
      <Card className="relative pt-0">
        <Avatar className="h-auto w-full p-2 after:border-none">
          <AvatarImage
            src={img_url}
            className="aspect-video rounded-md object-cover"
          />
          <AvatarFallback className="aspect-video animate-pulse rounded-md" />
        </Avatar>
        <CardHeader>
          <span className="text-muted-foreground mb-2 text-xs">{date}</span>
          <CardTitle>{title}</CardTitle>
          <CardDescription>{description}</CardDescription>
        </CardHeader>
      </Card>
    </motion.div>
  )
}
