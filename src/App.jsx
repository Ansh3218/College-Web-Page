import React, { useState } from 'react';
import Navbar from './Components/Navbar/Navbar.jsx';
import Hero from './Components/Hero/hero.jsx';
import Program from './Components/Program/Program.jsx';
import Title from './Components/Title/title.jsx';
import About from './Components/About/About.jsx';
import Campus from './Components/Campus/Campus.jsx';
import Testimonial from './Components/Testimonials/Testimonial.jsx';
import Contact from './Components/Contact.js/Contact.jsx';
import Footer from './Components/Footer/Footer.jsx';
import Video from './Components/VideoPlayer/Video.jsx';



const App = ()=> {

  const [playState, setPlayState] = useState(false);


  return (
    <>
    <Navbar/>
    <Hero/>
    <div className="container">
    <Title subtitle='Our PROGRAM' title='What We Offer'/>
    <Program/>
    <About setPlayState={setPlayState}/>
    <Title subtitle='Gallery' title='Campus Photos'/>
    <Campus/>
    <Title subtitle='TESTIMONIALS' title='What Student Says'/>
    <Testimonial/>
    <Title subtitle='Contact us' title='Get in Touch'/>
    <Contact/>
    <Footer/>
    </div>
    <Video playState={playState} setPlayState={setPlayState}/>
    </> 
  )
}
export default App
