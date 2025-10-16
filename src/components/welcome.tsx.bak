'use client'

import { Button } from '@/components/ui/button'

/**
 * Welcome Component
 *
 * A simple React component that displays a welcome message with an interactive button.
 * Uses modern React patterns including TypeScript, client-side rendering, and shadcn/ui components.
 */
export function Welcome() {
  const handleClick = () => {
    alert('Welcome! Thank you for clicking the button!')
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-[400px] p-8 space-y-6">
      <div className="text-center space-y-4">
        <h1 className="text-5xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
          Welcome!
        </h1>
        <p className="text-xl text-muted-foreground max-w-md">
          This is a modern React component built with TypeScript, Next.js 15, and Tailwind CSS.
        </p>
      </div>

      <Button
        onClick={handleClick}
        size="lg"
        className="px-8 py-6 text-lg font-semibold transition-all hover:scale-105"
      >
        Click Me!
      </Button>
    </div>
  )
}
