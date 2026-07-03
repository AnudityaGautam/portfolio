import Navigation from './components/Navigation'
import Hero from './components/Hero'
import Projects from './components/Projects'
import Footer from './components/Footer'

function App() {
  return (
    // flex column + min height ensures footer stays at bottom
    <div className="min-h-screen flex flex-col bg-gradient-subtle relative overflow-x-hidden">
      <Navigation />
      
      {/* flex-1 makes this section take all remaining space */}
      <main className="flex-1">
        <Hero />
        <Projects />
      </main>
      
      <Footer />
    </div>
  )
}

export default App
