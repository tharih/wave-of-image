import React from 'react'
import About from '../components/About'
import Contact from '../components/Contact'
import Gallery from '../components/Gallery'
import Service from '../components/Service'
import Slider_one from '../components/Slider'
import Slider from '../components/Slider'
import Slider_two from '../components/Slider_two'

const Home = () => {
  return (
    <div>
       <Slider_one />
        {/* <About /> */}
        <Gallery />
        {/* <Service /> */}
        {/* <Slider_two /> */}
        <Contact />
      
    </div>
  )
}

export default Home
