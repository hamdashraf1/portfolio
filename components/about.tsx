"use client"

import { motion } from "framer-motion"
import { Users, Award, Calendar, Target } from "lucide-react"

export default function About() {
  const stats = [
    { icon: Users, number: "150+", label: "Trained Swimmers" },
    { icon: Calendar, number: "3+", label: "Years Experience" },
    { icon: Target, number: "10+", label: "Websites Designed" },
    { icon: Award, number: "300+", label: "AI Prompts Created" },
  ]

  const experiences = [
    {
      company: "Pump Swimming Academy",
      period: "2024",
      role: "Team Training & Performance Development",
      description: "Individual and group training plans, technique improvement, turn and start optimization",
    },
    {
      company: "Swimming Academy",
      period: "2022-2023",
      role: "Basic Training Instructor",
      description: "Teaching fundamentals to beginners, freestyle and backstroke training",
    },
    {
      company: "Shark Academy",
      period: "2020-2022",
      role: "Multi-Age Swimming Trainer",
      description: "Training swimmers of all ages, safety techniques and rescue operations",
    },
  ]

  return (
    <section id="about" className="py-20 bg-gray-800/30">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-white">About</span> <span className="text-teal-400">Me</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            An ambitious 18-year-old professional swimming coach and digital content creator. I combine physical fitness
            with visual creativity, delivering professional services across multiple disciplines.
          </p>
        </motion.div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="text-center p-6 bg-gray-900/50 rounded-xl border border-gray-700 hover:border-teal-400/50 transition-colors"
            >
              <div className="flex justify-center mb-4">
                <div className="p-3 bg-teal-500/20 rounded-lg">
                  <stat.icon className="text-teal-400" size={24} />
                </div>
              </div>
              <h3 className="text-2xl font-bold text-white mb-2">{stat.number}</h3>
              <p className="text-gray-400 text-sm">{stat.label}</p>
            </motion.div>
          ))}
        </div>

        {/* Experience Timeline */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <h3 className="text-3xl font-bold text-white mb-8 text-center">Professional Experience</h3>
          <div className="space-y-6">
            {experiences.map((exp, index) => (
              <motion.div
                key={exp.company}
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="bg-gray-900/50 rounded-xl p-6 border border-gray-700 hover:border-teal-400/50 transition-colors"
              >
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-3">
                  <h4 className="text-xl font-semibold text-white">{exp.company}</h4>
                  <span className="text-teal-400 font-medium">{exp.period}</span>
                </div>
                <p className="text-gray-300 font-medium mb-2">{exp.role}</p>
                <p className="text-gray-400">{exp.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Education & Certifications */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="bg-gray-900/50 rounded-xl p-6 border border-gray-700"
          >
            <h3 className="text-2xl font-bold text-white mb-6">Education</h3>
            <div className="space-y-4">
              <div>
                <h4 className="text-lg font-semibold text-teal-400">Tharwat Abaza Institute</h4>
                <p className="text-gray-400">2018 – 2023</p>
              </div>
              <div>
                <h4 className="text-lg font-semibold text-teal-400">Talaat Abdel Samie Al-Azhar Institute</h4>
                <p className="text-gray-400">2012 – 2018</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="bg-gray-900/50 rounded-xl p-6 border border-gray-700"
          >
            <h3 className="text-2xl font-bold text-white mb-6">Certifications</h3>
            <div className="space-y-4">
              <div>
                <h4 className="text-lg font-semibold text-teal-400">Certified Lifeguard</h4>
                <p className="text-gray-400">Egyptian Diving & Rescue Federation</p>
              </div>
              <div>
                <h4 className="text-lg font-semibold text-teal-400">Swimming Instructor Certificate</h4>
                <p className="text-gray-400">Egyptian Swimming Federation</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
