import './App.css'
import FeatureCard from './components/featureCard/FeatureCard'
import Hero from './components/hero/Hero'
import Navbar from './components/navbar/Navbar'
import PortFolio from './components/portfolio/PortFolio'
import Facts from './components/facts/Facts'
import Team from './components/team/Team'
import Customer from './sustomergallery/Customer'
import News from './news/News'
import Brands from './brandlogo/Brands'
import Footer from './footer/Footer'
import Darkmod from './components/darkmood/Darkmod'

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

      <section className='bg-[#191919] '>
          <Facts />
      </section>

      <section className='bg-[#f8f9fc] '>
          <Team />
      </section> 

      <section className='bg-white ' id='Testimonials'>
          <Customer />
      </section> 

      <section className='bg-[#f8f9fc]' id='News'>
          <News />
      </section>  

      <section className='bg-[#fff]' id='Sponserd'>
          <Brands />
      </section> 

      <section className='bg-[#1c1d23]' >
          <Footer />
      </section> 

       <div className='fixed bottom-10'>
          <Darkmod />
        </div>         
       

    </>
  )
}

export default App
