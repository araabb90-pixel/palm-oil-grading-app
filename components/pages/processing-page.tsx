'use client'

import { useEffect } from 'react'
import { Spinner } from '@/components/ui/spinner'

interface ProcessingPageProps {
  onComplete: () => void
}

export default function ProcessingPage({ onComplete }: ProcessingPageProps) {
  useEffect(() => {
    // Simulate processing time
    const timer = setTimeout(() => {
      onComplete()
    }, 3000)

    return () => clearTimeout(timer)
  }, [onComplete])

  return (
    <div className="flex-1 flex flex-col items-center justify-center p-4">
      <div className="text-center space-y-4">
        <Spinner className="w-12 h-12 text-primary mx-auto" />
        <h1 className="text-xl font-bold">Analyzing image…</h1>
        <p className="text-sm text-muted-foreground">
          Please wait while AI determines grading and quantity.
        </p>
      </div>
    </div>
  )
}
