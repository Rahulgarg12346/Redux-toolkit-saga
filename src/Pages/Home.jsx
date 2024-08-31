import React from 'react'
import Header from '../components/Header'
import Banner from '../components/Banner'
import About from '../components/About'
import Services from '../components/Services'
import Counter from '../components/Counter'
import Doctors from '../components/Doctors'
import Contact from '../components/Contact'
import Footer from '../components/Footer'

const Home = () => {
  return (
   <>
   <Header/>
   <Banner/>
   <About/>
   <Services/>
   <Counter/>
   <Doctors/>
   <Contact/>
   <Footer/>
   </>
  )
}

export default Home