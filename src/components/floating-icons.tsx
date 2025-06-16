"use client"

import { Code, Sparkles, Zap } from "lucide-react"

export default function FloatingIcons() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none" style={{ zIndex: 2 }}>
      {/* Code Icon */}
      <div
        className="absolute top-1/2 right-1/4 animate-bounce"
        style={{ animationDelay: "0s", animationDuration: "3s" }}
      >
        <div className="bg-blue-500/20 p-3 rounded-full backdrop-blur-sm">
          <Code className="w-6 h-6 text-blue-400" />
        </div>
      </div>

      {/* Sparkles Icon */}
      <div className="absolute top-1/3 left-1/4 animate-pulse" style={{ animationDelay: "1s" }}>
        <div className="bg-purple-500/20 p-3 rounded-full backdrop-blur-sm">
          <Sparkles className="w-6 h-6 text-purple-400" />
        </div>
      </div>

      {/* Zap Icon */}
      <div
        className="absolute bottom-1/3 right-1/3 animate-bounce"
        style={{ animationDelay: "2s", animationDuration: "4s" }}
      >
        <div className="bg-yellow-500/20 p-3 rounded-full backdrop-blur-sm">
          <Zap className="w-6 h-6 text-yellow-400" />
        </div>
      </div>
    </div>
  )
}
