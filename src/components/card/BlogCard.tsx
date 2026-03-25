import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Button } from '@/components/ui/button'
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { BookOpen } from 'lucide-react'
import { motion, useInView } from 'motion/react'
import { useRef } from 'react'

interface BlogCardProps {
  img_url: string
  date: string
  title: string
  description: string
  index: number
}

export function BlogCard({
  img_url,
  date,
  title,
  description,
  index,
}: BlogCardProps) {
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
        <CardFooter className="flex gap-2">
          <Button className="grow">
            <BookOpen /> Lihat Selengkapnya
          </Button>
        </CardFooter>
      </Card>
    </motion.div>
  )
}
