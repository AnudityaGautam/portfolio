import { motion } from 'framer-motion'
import ProjectCard from './ProjectCard'

const projects = [
  {
    title: 'Restaurant QR Menu',
    description: 'QR code ordering, online payment, dine-in option — a seamless digital dining experience.',
    liveUrl: 'https://menu-first-eight.vercel.app',
    tech: ['React', 'Tailwind', 'QR Code', 'Vercel']
  },
  {
    title: 'AI Notes Generator',
    description: 'Generate smart AI-powered study notes instantly using modern web technologies.',
    liveUrl: 'https://ai-notes-generator-two.vercel.app',
    tech: ['React', 'AI', 'Tailwind', 'Vercel']
  }
]

const Projects = () => {
  return (
    <section id="projects" className="py-24 px-6 bg-gradient-subtle">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block text-sm font-medium text-purple-400 tracking-widest uppercase mb-3 glass px-5 py-1.5 rounded-full border border-purple-500/10">
            Featured Work
          </span>
          <h2 className="text-4xl sm:text-5xl font-bold tracking-tight">
            <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-gray-400 mt-3 max-w-xl mx-auto">
            A selection of my recent work — each built with care and modern tools.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={index} {...project} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects
