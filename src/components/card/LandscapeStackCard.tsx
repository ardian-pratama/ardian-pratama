import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { motion, useInView } from 'motion/react'
import { useRef } from 'react'

interface LandscapeStackCardProps {
  img_url: string
  className: string
  motion: {
    initial: {
      x?: number
      y?: number
      rotate?: number
      scale?: number
    }
    animate: {
      x?: number
      y?: number
      rotate?: number
      scale?: number
    }
    transition: {
      duration: number
      delay: number
    }
  }
}

export function LandscapeStackCard({ data }: LandscapeStackCardProps) {
  const ref = useRef(null)
  const isInView = useInView(ref, { amount: 0.5 })

  return (
    <div ref={ref} className="relative my-10 flex items-center justify-center">
      {data.map((data, index) => (
        <motion.div
          key={index}
          initial={{ ...data.motion.initial }}
          animate={isInView ? { ...data.motion.animate } : {}}
          transition={{ ...data.motion.transition }}
          className={data.className}
        >
          <Card img_url={data.img_url} />
        </motion.div>
      ))}
    </div>
  )
}

function Card({ img_url }: { img_url: string }) {
  return (
    <div className="bg-card w-72 rounded-lg border shadow">
      <div className="inline-flex gap-2 p-2">
        <div className="size-2 rounded-full bg-red-500" />
        <div className="size-2 rounded-full bg-yellow-400" />
        <div className="size-2 rounded-full bg-green-500" />
      </div>
      <div className="mx-2 mb-2">
        <Avatar className="h-auto w-full after:border-none">
          <AvatarImage
            src={img_url}
            className="aspect-video rounded-lg object-cover"
          />
          <AvatarFallback className="aspect-video animate-pulse rounded-lg" />
        </Avatar>
      </div>
    </div>
  )
}
