import { cn } from '@/lib/utils'
import { AnimatePresence, motion } from 'framer-motion'
import { useState } from 'react'

export const HoverEffect = ({
  items,
  className,
}: {
  items: {
    title: string
    description: string | number
    icon: React.ReactNode
  }[]
  className?: string
}) => {
  let [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  return (
    <div className={cn('grid grid-cols-1 md:grid-cols-2  lg:grid-cols-3  py-6', className)}>
      {items.map((item, idx) => (
        <div key={item?.title} className="relative group  block p-2 h-full w-full" onMouseEnter={() => setHoveredIndex(idx)} onMouseLeave={() => setHoveredIndex(null)}>
          {hoveredIndex === idx ? (
            <AnimatePresence>
              <motion.span
                className="absolute h-full w-full bg-primary block rounded-3xl"
                layoutId="hoverBackground"
                initial={{ opacity: 0 }}
                animate={{
                  opacity: 1,
                  transition: { duration: 0.15 },
                }}
                exit={{
                  opacity: 0,
                  transition: { duration: 0.15, delay: 0.2 },
                }}
              />
            </AnimatePresence>
          ) : (
            <div className="absolute h-full w-full block  rounded-3xl" />
          )}
          <Card>
            <div className="absolute top-0 right-0">{item.icon}</div>
            <CardTitle>{item.title}</CardTitle>
            <CardDescription>{item.description || '-'}</CardDescription>
          </Card>
        </div>
      ))}
    </div>
  )
}

export const Card = ({ className, children }: { className?: string; children: React.ReactNode }) => {
  return (
    <div className={cn('rounded-2xl h-full w-full p-2 overflow-hidden bg-background border-2 border-foreground relative z-20 cursor-pointer', className)}>
      <div className="relative z-50">
        <div className="p-2">{children}</div>
      </div>
    </div>
  )
}
export const CardTitle = ({ className, children }: { className?: string; children: React.ReactNode }) => {
  return <h4 className={cn('text-zinc-400 font-bold tracking-wide text-sm', className)}>{children}</h4>
}
export const CardDescription = ({ className, children }: { className?: string; children: React.ReactNode }) => {
  return <p className={cn('text-foreground tracking-wide leading-relaxed text-xl font-bold', className)}>{children}</p>
}
