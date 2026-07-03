const Footer = () => {
  const year = new Date().getFullYear()

  return (
    <footer className="py-6 px-6 border-t border-white/5 glass">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <span className="text-sm text-gray-400">
          © {year} — Built with <span className="text-purple-400">React</span> &amp; <span className="text-blue-400">Tailwind</span>
        </span>
        <div className="flex items-center gap-6 text-sm">
          <a href="#hero" className="text-gray-500 hover:text-white transition-colors">Home</a>
          <a href="#projects" className="text-gray-500 hover:text-white transition-colors">Projects</a>
        </div>
      </div>
    </footer>
  )
}

export default Footer
