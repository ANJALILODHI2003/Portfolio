"use client"

import { useEffect, useState } from "react"

interface TrailPoint {
  x: number
  y: number
  id: number
}

export default function MouseTrail() {
  const [trail, setTrail] = useState<TrailPoint[]>([])

  useEffect(() => {
    let mouseX = 0
    let mouseY = 0
    let trailId = 0

    const handleMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX
      mouseY = e.clientY

      setTrail((prev) => {
        const newTrail = [...prev, { x: mouseX, y: mouseY, id: trailId++ }].slice(-15) // Keep only last 15 points

        return newTrail
      })
    }

    const fadeTrail = () => {
      setTrail((prev) => prev.slice(1))
    }

    document.addEventListener("mousemove", handleMouseMove)
    const interval = setInterval(fadeTrail, 50)

    return () => {
      document.removeEventListener("mousemove", handleMouseMove)
      clearInterval(interval)
    }
  }, [])

  return (
    <div className="fixed inset-0 pointer-events-none z-50">
      {trail.map((point, index) => (
        <div
          key={point.id}
          className="absolute w-3 h-3 bg-blue-400 rounded-full"
          style={{
            left: point.x - 6,
            top: point.y - 6,
            opacity: ((index + 1) / trail.length) * 0.7,
            transform: `scale(${(index + 1) / trail.length})`,
            transition: "opacity 0.1s ease-out, transform 0.1s ease-out",
            boxShadow: "0 0 10px rgba(59, 130, 246, 0.8)",
          }}
        />
      ))}
    </div>
  )
}
