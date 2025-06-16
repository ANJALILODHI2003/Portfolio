"use client"

import { useEffect, useRef } from "react"

interface Particle {
  x: number
  y: number
  vx: number
  vy: number
  color: string
  size: number
  opacity: number
  pulse: number
}

interface Wave {
  x: number
  y: number
  radius: number
  opacity: number
  growing: boolean
}

export default function EnhancedBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    const resizeCanvas = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    resizeCanvas()
    window.addEventListener("resize", resizeCanvas)

    const particles: Particle[] = []
    const waves: Wave[] = []
    const colors = ["#3B82F6", "#1D4ED8", "#2563EB", "#1E40AF", "#06B6D4", "#0EA5E9"]

    // Create particles
    for (let i = 0; i < 80; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.8,
        vy: (Math.random() - 0.5) * 0.8,
        color: colors[Math.floor(Math.random() * colors.length)],
        size: Math.random() * 3 + 1,
        opacity: Math.random() * 0.8 + 0.2,
        pulse: Math.random() * Math.PI * 2,
      })
    }

    // Create waves
    const createWave = () => {
      if (waves.length < 5) {
        waves.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          radius: 0,
          opacity: 0.3,
          growing: true,
        })
      }
    }

    setInterval(createWave, 3000)

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      // Update and draw waves
      waves.forEach((wave, index) => {
        if (wave.growing) {
          wave.radius += 2
          wave.opacity -= 0.002
          if (wave.radius > 200 || wave.opacity <= 0) {
            waves.splice(index, 1)
          }
        }

        ctx.beginPath()
        ctx.arc(wave.x, wave.y, wave.radius, 0, Math.PI * 2)
        ctx.strokeStyle = `rgba(59, 130, 246, ${wave.opacity})`
        ctx.lineWidth = 2
        ctx.stroke()
      })

      // Update and draw particles
      particles.forEach((particle, i) => {
        particle.x += particle.vx
        particle.y += particle.vy
        particle.pulse += 0.02

        // Bounce off edges
        if (particle.x < 0 || particle.x > canvas.width) particle.vx *= -1
        if (particle.y < 0 || particle.y > canvas.height) particle.vy *= -1

        // Pulsing effect
        const pulseFactor = Math.sin(particle.pulse) * 0.5 + 1

        // Draw particle with glow
        ctx.beginPath()
        ctx.arc(particle.x, particle.y, particle.size * pulseFactor, 0, Math.PI * 2)

        // Glow effect
        const gradient = ctx.createRadialGradient(
          particle.x,
          particle.y,
          0,
          particle.x,
          particle.y,
          particle.size * pulseFactor * 3,
        )
        gradient.addColorStop(0, particle.color)
        gradient.addColorStop(1, "transparent")

        ctx.fillStyle = gradient
        ctx.fill()

        // Draw connections with enhanced effects
        particles.slice(i + 1).forEach((otherParticle) => {
          const dx = particle.x - otherParticle.x
          const dy = particle.y - otherParticle.y
          const distance = Math.sqrt(dx * dx + dy * dy)

          if (distance < 120) {
            ctx.beginPath()
            ctx.moveTo(particle.x, particle.y)
            ctx.lineTo(otherParticle.x, otherParticle.y)

            const opacity = (1 - distance / 120) * 0.4
            const gradient = ctx.createLinearGradient(particle.x, particle.y, otherParticle.x, otherParticle.y)
            gradient.addColorStop(0, `rgba(59, 130, 246, ${opacity})`)
            gradient.addColorStop(0.5, `rgba(29, 78, 216, ${opacity * 1.5})`)
            gradient.addColorStop(1, `rgba(59, 130, 246, ${opacity})`)

            ctx.strokeStyle = gradient
            ctx.lineWidth = 1.5
            ctx.stroke()
          }
        })
      })

      requestAnimationFrame(animate)
    }

    animate()

    return () => {
      window.removeEventListener("resize", resizeCanvas)
    }
  }, [])

  return <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" style={{ zIndex: 1 }} />
}
