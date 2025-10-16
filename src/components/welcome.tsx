'use client'

import { Button } from '@/components/ui/button'
import { useState } from 'react'

/**
 * Welcome Component
 *
 * An animated React component with smooth entrance effects, interactive elements,
 * and beautiful micro-interactions. Features staggered animations, floating shapes,
 * and modern gradient effects.
 */
export function Welcome() {
  const [clicked, setClicked] = useState(false)

  const handleClick = () => {
    setClicked(true)
    setTimeout(() => setClicked(false), 600)
    alert('Welcome! Thank you for clicking the button!')
  }

  return (
    <div className="relative flex flex-col items-center justify-center min-h-[400px] p-8 space-y-6 overflow-hidden">
      {/* Animated floating orbs background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-500/20 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-purple-500/20 rounded-full blur-3xl animate-float-delayed" />
        <div className="absolute top-1/2 right-1/3 w-48 h-48 bg-pink-500/20 rounded-full blur-3xl animate-float-slow" />
      </div>

      {/* Main content with staggered entrance animations */}
      <div className="relative z-10 text-center space-y-4">
        {/* Title with fade-in and slide-up animation */}
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent animate-slide-up bg-[length:200%_auto] animate-gradient">
          Welcome!
        </h1>

        {/* Subtitle with delayed fade-in */}
        <p className="text-xl text-muted-foreground max-w-md animate-fade-in-delayed">
          This is a modern React component built with TypeScript, Next.js 15, and Tailwind CSS.
        </p>

        {/* Animated decorative line */}
        <div className="flex justify-center items-center gap-2 py-4 animate-fade-in-more-delayed">
          <div className="h-px w-12 bg-gradient-to-r from-transparent via-blue-500 to-transparent animate-pulse" />
          <div className="w-2 h-2 rounded-full bg-purple-500 animate-ping" />
          <div className="h-px w-12 bg-gradient-to-r from-transparent via-purple-500 to-transparent animate-pulse" />
        </div>
      </div>

      {/* Button with scale animation and click effect */}
      <div className="relative z-10 animate-fade-in-button">
        <Button
          onClick={handleClick}
          size="lg"
          className={`
            px-8 py-6 text-lg font-semibold
            transition-all duration-300
            hover:scale-110 hover:shadow-2xl hover:shadow-purple-500/50
            active:scale-95
            relative overflow-hidden
            group
            ${clicked ? 'animate-button-click' : ''}
          `}
        >
          {/* Animated background gradient on hover */}
          <span className="absolute inset-0 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

          {/* Shimmer effect */}
          <span className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/20 to-transparent" />

          {/* Button text */}
          <span className="relative z-10">Click Me!</span>
        </Button>
      </div>

      {/* Floating particles */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-blue-400/40 rounded-full animate-particle"
            style={{
              left: `${20 + i * 15}%`,
              top: `${30 + (i % 3) * 20}%`,
              animationDelay: `${i * 0.5}s`,
              animationDuration: `${3 + i * 0.5}s`
            }}
          />
        ))}
      </div>

      <style jsx>{`
        @keyframes float {
          0%, 100% {
            transform: translate(0, 0) scale(1);
          }
          33% {
            transform: translate(30px, -30px) scale(1.1);
          }
          66% {
            transform: translate(-20px, 20px) scale(0.9);
          }
        }

        @keyframes float-delayed {
          0%, 100% {
            transform: translate(0, 0) scale(1);
          }
          33% {
            transform: translate(-40px, 30px) scale(1.05);
          }
          66% {
            transform: translate(30px, -20px) scale(0.95);
          }
        }

        @keyframes float-slow {
          0%, 100% {
            transform: translate(0, 0) rotate(0deg);
          }
          50% {
            transform: translate(20px, 20px) rotate(180deg);
          }
        }

        @keyframes slide-up {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes fade-in {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        @keyframes gradient {
          0% {
            background-position: 0% center;
          }
          100% {
            background-position: 200% center;
          }
        }

        @keyframes particle {
          0% {
            transform: translateY(0) translateX(0) scale(1);
            opacity: 0;
          }
          10% {
            opacity: 1;
          }
          90% {
            opacity: 1;
          }
          100% {
            transform: translateY(-100px) translateX(50px) scale(0);
            opacity: 0;
          }
        }

        @keyframes button-click {
          0%, 100% {
            transform: scale(1);
          }
          50% {
            transform: scale(0.95);
          }
        }

        :global(.animate-float) {
          animation: float 8s ease-in-out infinite;
        }

        :global(.animate-float-delayed) {
          animation: float-delayed 10s ease-in-out infinite;
        }

        :global(.animate-float-slow) {
          animation: float-slow 12s ease-in-out infinite;
        }

        :global(.animate-slide-up) {
          animation: slide-up 0.8s ease-out;
        }

        :global(.animate-fade-in-delayed) {
          animation: fade-in 0.8s ease-out 0.3s both;
        }

        :global(.animate-fade-in-more-delayed) {
          animation: fade-in 0.8s ease-out 0.5s both;
        }

        :global(.animate-fade-in-button) {
          animation: slide-up 0.8s ease-out 0.7s both;
        }

        :global(.animate-gradient) {
          animation: gradient 3s linear infinite;
        }

        :global(.animate-particle) {
          animation: particle 3s ease-in-out infinite;
        }

        :global(.animate-button-click) {
          animation: button-click 0.6s ease-in-out;
        }
      `}</style>
    </div>
  )
}
