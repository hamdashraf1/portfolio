"use client"

import { motion } from "framer-motion"
import { Brain, Copy, Star, ExternalLink } from "lucide-react"
import { useState } from "react"

export default function AIPrompts() {
  const [copiedId, setCopiedId] = useState<number | null>(null)

  const prompts = [
    {
      id: 1,
      title: "Swimming Training Poster Design",
      category: "Sports Design",
      description: "Intensive Swimming Technique Workshop - Cinematic underwater scene with professional coaching",
      image: "/images/ai-projects/workshop-poster.jpg",
      prompt:
        "Create a cinematic poster for 'INTENSIVE SWIMMING TECHNIQUE WORKSHOP' featuring a professional swimming coach instructing a swimmer in a pool. Use dramatic lighting, professional sports photography style, bold typography, and teal/blue color scheme.",
      rating: 4.9,
      uses: 1200,
    },
    {
      id: 2,
      title: "Marketing Strategy Document",
      category: "Marketing",
      description: "Comprehensive Instagram and Facebook ads strategy for swimming academies",
      image: "/images/ai-projects/marketing-strategy.jpg",
      prompt:
        "Design a detailed marketing strategy document for swimming academy social media campaigns. Include target demographics, ad formats, seasonal campaigns, budget distribution, and creative samples with professional layout and swimming-themed visuals.",
      rating: 4.8,
      uses: 850,
    },
    {
      id: 3,
      title: "Portfolio Website Design",
      category: "Web Design",
      description: "Modern swimming coach portfolio with dynamic sections and professional layout",
      image: "/images/ai-projects/portfolio-design.jpg",
      prompt:
        "Create a modern website design for a swimming coach and content creator. Include dynamic swimming visuals, sections for About Me, Projects, Skills, AI Tools, and Contact. Use teal/blue gradient backgrounds and professional typography.",
      rating: 4.9,
      uses: 2100,
    },
    {
      id: 4,
      title: "PUMP Academy Website",
      category: "Web Development",
      description: "Complete swimming academy website with training schedules and registration forms",
      image: "/images/ai-projects/pump-website.jpg",
      prompt:
        "Design a comprehensive swimming academy website interface showing training schedules, registration forms, and certificate layouts. Use clean, modern UI design with teal/turquoise branding and professional swimming photography.",
      rating: 4.7,
      uses: 650,
    },
    {
      id: 5,
      title: "Swimming Photography Collection",
      category: "Photography",
      description: "Professional swimming photos showcasing different age groups and training scenarios",
      image: "/images/ai-projects/swimming-photos.jpg",
      prompt:
        "Create a collection of professional swimming photographs featuring a young girl, adult male coach, and swimmer in action. Use consistent blue/teal branding, clean composition, and professional sports photography lighting.",
      rating: 4.8,
      uses: 980,
    },
  ]

  const copyToClipboard = async (text: string, id: number) => {
    try {
      await navigator.clipboard.writeText(text)
      setCopiedId(id)
      setTimeout(() => setCopiedId(null), 2000)
    } catch (err) {
      console.error("Failed to copy text: ", err)
    }
  }

  return (
    <section id="ai-prompts" className="py-20 bg-gray-800/30">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-white">AI</span> <span className="text-teal-400">Prompts Gallery</span>
          </h2>
          <p className="text-xl text-gray-300">
            Professional AI-generated content showcasing prompt engineering skills
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {prompts.map((prompt, index) => (
            <motion.div
              key={prompt.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-gray-900/50 backdrop-blur-sm border border-gray-700 rounded-xl overflow-hidden hover:border-teal-400/50 transition-all duration-300 group"
            >
              {/* Image Preview */}
              <div className="aspect-[16/10] relative overflow-hidden">
                <img
                  src={prompt.image || "/placeholder.svg"}
                  alt={prompt.title}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 via-transparent to-transparent" />

                {/* Category Badge */}
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 bg-teal-500/20 backdrop-blur-sm border border-teal-400/30 rounded-full text-xs text-teal-400 font-semibold uppercase tracking-wide">
                    {prompt.category}
                  </span>
                </div>

                {/* Stats */}
                <div className="absolute bottom-4 left-4 flex items-center space-x-4">
                  <div className="flex items-center text-yellow-400">
                    <Star size={14} className="mr-1 fill-current" />
                    <span className="text-sm font-medium">{prompt.rating}</span>
                  </div>
                  <span className="text-sm text-gray-300">{prompt.uses.toLocaleString()} uses</span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="flex items-start justify-between mb-3">
                  <div className="flex items-center">
                    <div className="p-2 bg-teal-500/20 rounded-lg mr-3">
                      <Brain className="text-teal-400" size={18} />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-white">{prompt.title}</h3>
                    </div>
                  </div>
                </div>

                <p className="text-gray-300 text-sm mb-4 leading-relaxed">{prompt.description}</p>

                {/* Prompt Text */}
                <div className="bg-gray-800/50 rounded-lg p-4 mb-4">
                  <p className="text-gray-400 text-xs leading-relaxed">{prompt.prompt}</p>
                </div>

                {/* Actions */}
                <div className="flex items-center justify-between">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => copyToClipboard(prompt.prompt, prompt.id)}
                    className={`flex items-center px-4 py-2 rounded-lg font-medium transition-all duration-200 ${
                      copiedId === prompt.id
                        ? "bg-green-500/20 text-green-400 border border-green-400/30"
                        : "bg-teal-500/20 text-teal-400 border border-teal-400/30 hover:bg-teal-500/30"
                    }`}
                  >
                    <Copy size={16} className="mr-2" />
                    {copiedId === prompt.id ? "Copied!" : "Copy Prompt"}
                  </motion.button>

                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    className="p-2 text-gray-400 hover:text-teal-400 transition-colors"
                  >
                    <ExternalLink size={16} />
                  </motion.button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Summary Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-16 text-center"
        >
          <div className="inline-flex items-center space-x-8 bg-gray-900/50 rounded-full px-8 py-4 border border-gray-700">
            <div className="text-center">
              <h4 className="text-2xl font-bold text-teal-400">300+</h4>
              <p className="text-gray-400 text-sm">Total Prompts</p>
            </div>
            <div className="w-px h-8 bg-gray-700" />
            <div className="text-center">
              <h4 className="text-2xl font-bold text-teal-400">4.8</h4>
              <p className="text-gray-400 text-sm">Avg Rating</p>
            </div>
            <div className="w-px h-8 bg-gray-700" />
            <div className="text-center">
              <h4 className="text-2xl font-bold text-teal-400">5.8K</h4>
              <p className="text-gray-400 text-sm">Total Uses</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
