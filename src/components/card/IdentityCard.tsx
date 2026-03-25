import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Badge } from '@/components/ui/badge'
import { motion, useInView } from 'motion/react'
import { useRef } from 'react'

interface IdentityCardProps {
  text: string
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
      duration?: number
      delay?: number
    }
  }
}

const identityData = [
  {
    text: 'Indonesia',
    motion: {
      initial: {
        x: 0,
        opacity: 0,
      },
      animate: {
        x: -152,
        y: -250,
        opacity: 1,
      },
      transition: {
        delay: 0.8,
        duration: 0.4,
      },
    },
  },
  {
    text: 'Pekanbaru',
    motion: {
      initial: {
        x: 0,
        opacity: 0,
      },
      animate: {
        x: 155,
        y: -175,
        opacity: 1,
      },
      transition: {
        delay: 0.6,
        duration: 0.4,
      },
    },
  },
  {
    text: 'Islam',
    motion: {
      initial: {
        x: 0,
        opacity: 0,
      },
      animate: {
        x: -141,
        y: -100,
        opacity: 1,
      },
      transition: {
        delay: 0.4,
        duration: 0.4,
      },
    },
  },
  {
    text: 'Cowo',
    motion: {
      initial: {
        x: 0,
        opacity: 0,
      },
      animate: {
        x: 142,
        y: -25,
        opacity: 1,
      },
      transition: {
        delay: 0.2,
        duration: 0.4,
      },
    },
  },
  {
    text: 'Ardian Pratama',
    motion: {
      initial: {
        x: 0,
        opacity: 0,
      },
      animate: {
        y: 35,
        opacity: 1,
      },
      transition: {
        duration: 0.4,
      },
    },
  },
]

export function IdentityCard() {
  const ref = useRef(null)
  const isInView = useInView(ref, { amount: 0.5 })

  return (
    <div
      ref={ref}
      className="relative my-10 flex items-center justify-center @4xl:col-span-3"
    >
      <div className="bg-card w-52 rounded-lg border shadow">
        <div className="inline-flex gap-2 p-2">
          <div className="size-2 rounded-full bg-red-500" />
          <div className="size-2 rounded-full bg-yellow-400" />
          <div className="size-2 rounded-full bg-green-500" />
        </div>
        <div className="mx-2 mb-2">
          <Avatar className="h-auto w-full after:border-none">
            <AvatarImage
              src="/images/ardian-pratama-potrait.webp"
              className="aspect-[3/4] rounded-lg object-cover"
            />
            <AvatarFallback className="aspect-[3/4] animate-pulse rounded-lg" />
          </Avatar>
        </div>
      </div>
      {identityData.map((data, index) => (
        <motion.div
          key={index}
          initial={{ ...data.motion.initial }}
          animate={isInView ? { ...data.motion.animate } : {}}
          transition={{ ...data.motion.transition }}
          className="absolute bottom-0 left-1/2 -translate-x-1/2"
        >
          <Badge
            variant="outline"
            className="bg-card text-muted-foreground
          font-normal"
          >
            {data.text}
          </Badge>
        </motion.div>
      ))}
    </div>
  )
}
