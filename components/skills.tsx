"use client"

import { motion } from "framer-motion"
import { Waves, Palette, Video, Brain, TrendingUp, Code } from "lucide-react"

export default function Skills() {
  const skills = [
    {
      icon: Waves,
      title: "Swimming Coach",
      description: "Certified coach teaching all 4 swimming styles",
      details: [
        "Egyptian Swimming Federation",
        "Certified Lifeguard",
        "Children & Athletes Training",
        "All Four Swimming Styles",
      ],
    },
    {
      icon: Palette,
      title: "Graphic Design",
      description: "Creative visual design and branding",
      details: ["Adobe Photoshop", "Adobe Illustrator", "Brand Identity", "Social Media Graphics"],
    },
    {
      icon: Video,
      title: "Video Editing",
      description: "Professional video editing and motion graphics",
      details: ["Adobe Premiere Pro", "CapCut", "Motion Graphics", "Color Grading"],
    },
    {
      icon: Code,
      title: "Web Development",
      description: "Modern web development and design",
      details: ["HTML, CSS, JavaScript", "WordPress", "Responsive Design", "UI/UX Design"],
    },
    {
      icon: Brain,
      title: "AI Prompt Engineering",
      description: "Creative AI content generation",
      details: ["ChatGPT", "Midjourney", "Pika Labs", "Content Creation"],
    },
    {
      icon: TrendingUp,
      title: "Media Buying",
      description: "Digital advertising and campaign management",
      details: ["Meta Ads", "TikTok Ads", "Campaign Optimization", "ROI Analysis"],
    },
  ]

  return (
    <section id="skills" className="py-20 bg-gray-800/50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-white">My</span> <span className="text-teal-400">Skills</span>
          </h2>
          <p className="text-xl text-gray-300">Professional Expertise & Capabilities</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ scale: 1.05, y: -10 }}
              className="bg-gray-900/50 backdrop-blur-sm border border-gray-700 rounded-xl p-6 hover:border-teal-400/50 transition-all duration-300"
            >
              <div className="flex items-center mb-4">
                <div className="p-3 bg-teal-500/20 rounded-lg mr-4">
                  <skill.icon className="text-teal-400" size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white">{skill.title}</h3>
                </div>
              </div>

              <p className="text-gray-300 mb-4">{skill.description}</p>

              <ul className="space-y-2">
                {skill.details.map((detail, i) => (
                  <li key={i} className="text-sm text-gray-400 flex items-center">
                    <div className="w-2 h-2 bg-teal-400 rounded-full mr-2" />
                    {detail}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
