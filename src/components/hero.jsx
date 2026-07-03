import { motion } from 'framer-motion'

const Hero = () => {
  return (
    <section id="hero" className="min-h-screen flex items-center justify-center px-6 pt-20 pb-16 relative overflow-hidden bg-gradient-subtle">
      {/* floating orbs */}
      <div className="absolute w-96 h-96 bg-purple-600/20 rounded-full blur-[100px] -top-20 -right-20 animate-pulse" />
      <div className="absolute w-72 h-72 bg-blue-500/20 rounded-full blur-[100px] -bottom-20 -left-20 animate-pulse delay-1000" />

      <div className="max-w-5xl mx-auto text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-block glass px-5 py-2 rounded-full text-sm font-medium text-purple-300 border border-purple-500/20 mb-6"
        >
          ✦ Open to opportunities
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="text-5xl sm:text-7xl md:text-8xl font-extrabold leading-[1.05] tracking-tight mb-6"
        >
          <span className="gradient-text">Crafting digital</span><br />
          <span className="text-white">experiences</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-lg sm:text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed mb-10"
        >
          Developer focused on building polished, performant web applications
          with modern tools and a keen eye for design.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <a href="#projects" className="btn-gradient inline-block">
            View Projects <span className="ml-2 inline-block transition-transform group-hover:translate-x-1">→</span>
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="mt-12 flex justify-center gap-6 text-sm text-gray-500 font-mono"
        >
          <span className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-green-400/60" />
            React · Vite
          </span>
          <span className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-blue-400/60" />
            Tailwind · Framer
          </span>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-gray-500 text-xs tracking-widest uppercase"
      >
        <span>Scroll</span>
        <svg className="w-4 h-4 animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </motion.div>
    </section>
  )
}

export default Hero
