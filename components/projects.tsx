"use client"

import { motion } from "framer-motion"
import { ExternalLink, Users, Code, Award } from "lucide-react"

export default function Projects() {
  const projects = [
    {
      id: 1,
      title: "PUMP Swimming Academy",
      description: "Complete website showcasing training details, realistic photos, and schedule management",
      thumbnail: "/images/ai-projects/pump-website.jpg",
      category: "Web Development",
      link: "https://hamdashraf1.github.io/PUMP/",
      icon: Code,
      stats: "Live Website",
    },
    {
      id: 2,
      title: "Personal Brand Logo",
      description: "Professional design reflecting both athletic and creative identity",
      thumbnail: "/images/ai-projects/portfolio-design.jpg",
      category: "Graphic Design",
      link: "#",
      icon: Award,
      stats: "Brand Identity",
    },
    {
      id: 3,
      title: "Swimming Training Programs",
      description: "Comprehensive training methodology for 150+ swimmers across all skill levels",
      thumbnail: "/images/ai-projects/swimming-photos.jpg",
      category: "Swimming Coaching",
      link: "#",
      icon: Users,
      stats: "150+ Students",
    },
  ]

  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-white">Featured</span> <span className="text-teal-400">Projects</span>
          </h2>
          <p className="text-xl text-gray-300">Showcasing my diverse portfolio across multiple disciplines</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="group relative overflow-hidden rounded-xl bg-gray-900 border border-gray-700 hover:border-teal-400/50 transition-all duration-300"
            >
              <div className="aspect-[4/3] relative overflow-hidden">
                <img
                  src={project.thumbnail || "/placeholder.svg"}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                {/* Project Icon */}
                <motion.div
                  className="absolute top-4 right-4 p-2 bg-teal-500/20 backdrop-blur-sm rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  whileHover={{ scale: 1.1 }}
                >
                  <project.icon className="text-teal-400" size={20} />
                </motion.div>

                {/* External Link */}
                {project.link !== "#" && (
                  <motion.a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    whileHover={{ scale: 1.1 }}
                  >
                    <div className="w-16 h-16 bg-teal-500 rounded-full flex items-center justify-center">
                      <ExternalLink className="text-white" size={24} />
                    </div>
                  </motion.a>
                )}
              </div>

              <div className="p-6">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs text-teal-400 font-semibold uppercase tracking-wide">
                    {project.category}
                  </span>
                  <span className="text-xs text-gray-400">{project.stats}</span>
                </div>

                <h3 className="text-xl font-semibold text-white mb-3">{project.title}</h3>
                <p className="text-gray-300 text-sm leading-relaxed">{project.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Project Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6"
        >
          {[
            { number: "10+", label: "Websites Designed" },
            { number: "30+", label: "Graphic Projects" },
            { number: "50+", label: "Video Edits" },
            { number: "300+", label: "AI Prompts" },
          ].map((stat, index) => (
            <div key={stat.label} className="text-center">
              <h4 className="text-2xl font-bold text-teal-400 mb-1">{stat.number}</h4>
              <p className="text-gray-400 text-sm">{stat.label}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
