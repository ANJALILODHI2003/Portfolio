"use client"

import { Code, Sparkles, Zap, Star, Heart, Rocket } from "lucide-react"

export default function FloatingElements() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none" style={{ zIndex: 2 }}>
      {/* Floating Icons with enhanced animations */}
      <div
        className="absolute top-1/4 right-1/4 animate-bounce"
        style={{
          animationDelay: "0s",
          animationDuration: "3s",
          filter: "drop-shadow(0 0 10px rgba(59, 130, 246, 0.5))",
        }}
      >
        <div className="bg-blue-500/20 p-4 rounded-full backdrop-blur-sm border border-blue-400/30 hover:bg-blue-500/30 transition-all">
          <Code className="w-8 h-8 text-blue-400" />
        </div>
      </div>

      <div
        className="absolute top-1/3 left-1/4 animate-pulse"
        style={{
          animationDelay: "1s",
          filter: "drop-shadow(0 0 10px rgba(139, 92, 246, 0.5))",
        }}
      >
        <div className="bg-purple-500/20 p-4 rounded-full backdrop-blur-sm border border-purple-400/30 hover:bg-purple-500/30 transition-all">
          <Sparkles className="w-8 h-8 text-purple-400" />
        </div>
      </div>

      <div
        className="absolute bottom-1/3 right-1/3 animate-bounce"
        style={{
          animationDelay: "2s",
          animationDuration: "4s",
          filter: "drop-shadow(0 0 10px rgba(245, 158, 11, 0.5))",
        }}
      >
        <div className="bg-yellow-500/20 p-4 rounded-full backdrop-blur-sm border border-yellow-400/30 hover:bg-yellow-500/30 transition-all">
          <Zap className="w-8 h-8 text-yellow-400" />
        </div>
      </div>

      <div
        className="absolute top-1/2 left-1/6 animate-spin"
        style={{
          animationDelay: "1.5s",
          animationDuration: "8s",
          filter: "drop-shadow(0 0 10px rgba(16, 185, 129, 0.5))",
        }}
      >
        <div className="bg-green-500/20 p-3 rounded-full backdrop-blur-sm border border-green-400/30">
          <Star className="w-6 h-6 text-green-400" />
        </div>
      </div>

      <div
        className="absolute bottom-1/4 left-1/3 animate-pulse"
        style={{
          animationDelay: "3s",
          filter: "drop-shadow(0 0 10px rgba(236, 72, 153, 0.5))",
        }}
      >
        <div className="bg-pink-500/20 p-3 rounded-full backdrop-blur-sm border border-pink-400/30">
          <Heart className="w-6 h-6 text-pink-400" />
        </div>
      </div>

      <div
        className="absolute top-3/4 right-1/6 animate-bounce"
        style={{
          animationDelay: "2.5s",
          animationDuration: "5s",
          filter: "drop-shadow(0 0 10px rgba(6, 182, 212, 0.5))",
        }}
      >
        <div className="bg-cyan-500/20 p-3 rounded-full backdrop-blur-sm border border-cyan-400/30">
          <Rocket className="w-6 h-6 text-cyan-400" />
        </div>
      </div>
    </div>
  )
}
