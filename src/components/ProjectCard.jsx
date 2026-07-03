import { motion } from 'framer-motion'

const ProjectCard = ({ title, description, liveUrl, tech, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.6, delay: index * 0.15 }}
      className="group relative glass-strong rounded-2xl p-7 md:p-9 overflow-hidden hover:-translate-y-2 hover:border-purple-500/30 transition-all duration-500 shadow-xl hover:shadow-purple-500/10"
    >
      {/* glow overlay */}
      <div className="absolute inset-0 pointer-events-none rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        style={{
          background: 'radial-gradient(circle at 30% 20%, rgba(124,58,237,0.12), transparent 70%)'
        }}
      />

      <div className="relative z-10">
        <div className="w-12 h-12 rounded-xl glass flex items-center justify-center text-2xl mb-5 border border-white/5">
          {index === 0 ? '📋' : '🧠'}
        </div>

        <h3 className="text-2xl font-bold text-white mb-3 tracking-tight">
          {title}
        </h3>

        <p className="text-gray-300 text-sm leading-relaxed mb-5 max-w-md">
          {description}
        </p>

        <div className="flex flex-wrap gap-2 mb-6">
          {tech.map((t, i) => (
            <span key={i} className="bg-white/5 border border-white/5 px-4 py-1 rounded-full text-xs font-medium text-gray-300 hover:bg-purple-500/20 hover:border-purple-500/30 transition-colors">
              {t}
            </span>
          ))}
        </div>

        <a
          href={liveUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full text-sm font-semibold text-white bg-gradient-to-r from-purple-600 to-blue-500 hover:from-purple-500 hover:to-blue-400 transition-all duration-300 shadow-lg shadow-purple-500/25 hover:shadow-purple-500/40"
        >
          Live Demo
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
          </svg>
        </a>
      </div>
    </motion.div>
  )
}

export default ProjectCard
