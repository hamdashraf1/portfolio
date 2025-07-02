"use client"

import { motion } from "framer-motion"
import { useEffect, useState, useCallback } from "react"

interface FloatingCharacterProps {
  activeSection: string
}

export default function FloatingCharacter({ activeSection }: FloatingCharacterProps) {
  const [position, setPosition] = useState({ x: "50%", y: "50%", scale: 1 })

  const updatePosition = useCallback(() => {
    const positions = {
      hero: { x: "70%", y: "50%", scale: 1 },
      about: { x: "85%", y: "30%", scale: 0.6 },
      skills: { x: "85%", y: "30%", scale: 0.6 },
      projects: { x: "15%", y: "40%", scale: 0.7 },
      "ai-prompts": { x: "80%", y: "60%", scale: 0.5 },
      contact: { x: "20%", y: "70%", scale: 0.6 },
    }

    setPosition(positions[activeSection as keyof typeof positions] || positions.hero)
  }, [activeSection])

  useEffect(() => {
    updatePosition()
  }, [updatePosition])

  return (
    <motion.div
      className="fixed z-30 pointer-events-none"
      style={{
        left: position.x,
        top: position.y,
        transform: "translate(-50%, -50%)",
      }}
      animate={{
        x: position.x === "70%" ? 0 : position.x === "85%" || position.x === "80%" ? 50 : -50,
        y: 0,
        scale: position.scale,
      }}
      transition={{
        duration: 1.2,
        ease: "easeInOut",
      }}
      role="img"
      aria-label="Hamd Ashraf floating character"
    >
      <motion.div
        animate={{
          y: [0, -8, 0],
        }}
        transition={{
          duration: 4,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
        }}
        className="relative group"
      >
        <div className="relative w-48 h-48 md:w-56 md:h-56">
          {/* Subtle outer glow */}
          <motion.div
            className="absolute inset-0 rounded-full bg-gradient-to-r from-teal-400/20 to-blue-500/20 blur-xl"
            animate={{
              scale: [1, 1.1, 1],
              opacity: [0.3, 0.5, 0.3],
            }}
            transition={{
              duration: 3,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut",
            }}
          />

          {/* Main circular frame */}
          <motion.div
            className="absolute inset-4 rounded-full bg-gradient-to-br from-gray-800 to-gray-900 p-1"
            style={{
              boxShadow: "0 8px 32px rgba(20,184,166,0.2), inset 0 1px 0 rgba(255,255,255,0.1)",
            }}
          >
            <div className="w-full h-full rounded-full border-2 border-teal-400/30 overflow-hidden relative">
              <img
                src="/images/hamd-ashraf.png"
                alt="Hamd Ashraf - Professional Swimming Coach"
                className="w-full h-full object-cover"
                style={{
                  objectPosition: "center 35%",
                  transform: "scale(1.1)",
                }}
              />

              <div className="absolute inset-0 bg-gradient-to-t from-gray-900/10 via-transparent to-transparent" />
            </div>
          </motion.div>

          {/* Floating dots */}
          {[...Array(4)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1.5 h-1.5 bg-teal-400/60 rounded-full"
              style={{
                left: `${50 + Math.cos((i * Math.PI * 2) / 4) * 45}%`,
                top: `${50 + Math.sin((i * Math.PI * 2) / 4) * 45}%`,
                transform: "translate(-50%, -50%)",
              }}
              animate={{
                y: [0, -10, 0],
                opacity: [0.4, 0.8, 0.4],
              }}
              transition={{
                duration: 2 + i * 0.3,
                repeat: Number.POSITIVE_INFINITY,
                delay: i * 0.5,
                ease: "easeInOut",
              }}
            />
          ))}

          {/* Name label */}
          <motion.div
            className="absolute -bottom-10 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            initial={{ y: 10 }}
            whileHover={{ y: 0 }}
          >
            <div className="bg-gray-900/90 backdrop-blur-sm border border-teal-400/50 rounded-full px-4 py-2">
              <span className="text-teal-400 font-semibold text-sm whitespace-nowrap">Hamd Ashraf</span>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </motion.div>
  )
}
