import React from "react";
import About from "../components/About";
import Contact from "../components/Contact";
import Gallery from "../components/Gallery";
import Service from "../components/Service";
import SliderComponent from "../components/SliderComponent";
import Slider_two from "../components/Slider_two";
const Home = () => {
  return (
    <div>
      <SliderComponent />
      <About />
      <Gallery />
      <Service />
      <Slider_two />
      <Contact />
    </div>
  );
};

export default Home;
