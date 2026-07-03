import Navigation from './components/Navigation'
import Hero from './components/Hero'
import Projects from './components/Projects'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-gradient-subtle relative overflow-x-hidden">
      <Navigation />
      <Hero />
      <Projects />
      <Footer />
    </div>
  )
}

export default App
