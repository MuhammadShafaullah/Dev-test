import './App.css'
import FeatureCard from './components/featureCard/FeatureCard'
import Hero from './components/hero/Hero'
import Navbar from './components/navbar/Navbar'
import PortFolio from './components/portfolio/PortFolio'

function App() {

  return (
    <>
      <section id='home' className='bg-black'>
        <div className='container mx-auto max-w-[1340px]'>
          <Navbar />
          <Hero />
         
        </div>
      </section>

      <section id='features' className='py-10 dark:bg-gray-800 dark:text-white'>
        <div className='container mx-auto max-w-[1340px]'>
          <FeatureCard />
        </div>
      </section>

      <section className='bg-[#f8f9fc] dark:bg-[#101010] pb-10 '>
          <PortFolio />
      </section>
    </>
  )
}

export default App
