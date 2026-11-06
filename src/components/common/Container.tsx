import type { ReactNode } from 'react'
import { cn } from '@/utils/format'

type ContainerProps = {
  children: ReactNode
  className?: string
}

export function Container({ children, className }: ContainerProps) {
  return (
    <div className={cn('mx-auto w-full max-w-content px-4 sm:px-6 lg:px-8 3xl:max-w-content-xl 4xl:max-w-content-4k', className)}>
      {children}
    </div>
  )
}
