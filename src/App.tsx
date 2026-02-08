import './App.css'
import Hero from './sections/Hero'
import Services from './sections/Services'
import Advantages from './sections/Advantages'
import Testimonials from './sections/Testimonials'
import Contact from './sections/Contact'
import Footer from './sections/Footer'

function App() {
  return (
    <main className="min-h-screen bg-slate-900">
      <Hero />
      <Services />
      <Advantages />
      <Testimonials />
      <Contact />
      <Footer />
    </main>
  )
}

export default App
