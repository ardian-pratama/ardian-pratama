import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
} from '@/components/ui/card'
import { motion, useInView } from 'motion/react'
import { useRef } from 'react'

interface StoryCardProps {
  author: {
    name: string
    avatar_url: string
  }
  description: string
  index: number
}

export function StoryCard({ author, description, index }: StoryCardProps) {
  const ref = useRef(null)
  const isInView = useInView(ref, { amount: 0.5 })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
      animate={isInView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.4 }}
      className=" 
    relative @4xl:[&:nth-child(4n+1)]:col-span-3 @4xl:[&:nth-child(4n+2)]:col-span-2
    @4xl:[&:nth-child(4n+3)]:col-span-2 @4xl:[&:nth-child(4n+4)]:col-span-3"
    >
      <Card className="h-full">
        <CardHeader className="h-full">
          <CardDescription>{description}</CardDescription>
        </CardHeader>
        <CardFooter className="inline-flex items-center gap-2">
          <Avatar size="sm">
            <AvatarImage src={author.avatar_url} />
            <AvatarFallback className="animate-pulse" />
          </Avatar>
          <span className="text-primary text-sm">{author.name}</span>
        </CardFooter>
      </Card>
    </motion.div>
  )
}
