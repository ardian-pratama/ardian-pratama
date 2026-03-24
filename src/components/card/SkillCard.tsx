import { motion, useInView } from 'motion/react'
import { useRef, type ReactNode } from 'react'

interface SkillCardProps {
  skill: ReactNode
  index: number
}

export function SkillCard({ skill, index }: SkillCardProps) {
  const ref = useRef(null)
  const isInView = useInView(ref, { amount: 0.5 })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, rotate: 30, scale: 0.8 }}
      animate={isInView ? { opacity: 1, rotate: 0, scale: 1 } : {}}
      transition={{ duration: 0.4, delay: 0.01 * index }}
      className="bg-background relative inline-flex items-center justify-center rounded-lg border
      p-4 shadow [&_svg]:pointer-events-none [&_svg]:shrink-0
        [&_svg:not([class*='size-'])]:size-8"
    >
      {skill}
    </motion.div>
  )
}
