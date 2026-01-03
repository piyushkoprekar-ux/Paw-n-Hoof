import React from 'react'
import Navbar from '../Components/Navbar.jsx'
import Herosec from '../Components/Herosec.jsx'
import Subsec from '../Components/Subsec.jsx'
import Footer from '../Components/Footer.jsx'
import Adopt from '../Components/Adopt.jsx'
import ContactUs from '../Components/ContactUs.jsx'
import Login from '../Components/Login.jsx' 
import Story from '../Components/Story.jsx'
import Newsletter from '../Components/Newsletter.jsx'
function Home() {
  return (
    <>
      <Navbar />
      <Herosec />
      <Subsec />
      <Adopt />
      <Story/>
      <Newsletter/>
      <Login />
      <ContactUs/>
      <Footer />
      
    </>
  )
}

export default Home
