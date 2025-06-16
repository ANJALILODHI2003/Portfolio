"use client"

import type React from "react"

import { useState } from "react"

interface FlipCardProps {
  frontContent: React.ReactNode
  backContent: React.ReactNode
  className?: string
}

export default function FlipCard({ frontContent, backContent, className = "" }: FlipCardProps) {
  const [isFlipped, setIsFlipped] = useState(false)

  return (
    <div
      className={`flip-card-container ${className}`}
      onMouseEnter={() => setIsFlipped(true)}
      onMouseLeave={() => setIsFlipped(false)}
    >
      <div className={`flip-card ${isFlipped ? "flipped" : ""}`}>
        <div className="flip-card-front">{frontContent}</div>
        <div className="flip-card-back">{backContent}</div>
      </div>

      <style jsx>{`
        .flip-card-container {
          perspective: 1000px;
          width: 100%;
          height: 100%;
        }
        
        .flip-card {
          position: relative;
          width: 100%;
          height: 100%;
          transition: transform 0.8s;
          transform-style: preserve-3d;
        }
        
        .flip-card.flipped {
          transform: rotateY(180deg);
        }
        
        .flip-card-front,
        .flip-card-back {
          position: absolute;
          width: 100%;
          height: 100%;
          backface-visibility: hidden;
          border-radius: 1rem;
        }
        
        .flip-card-back {
          transform: rotateY(180deg);
        }
      `}</style>
    </div>
  )
}
