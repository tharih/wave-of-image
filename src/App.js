import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Route, Router, Routes } from "react-router-dom";
import Header from "./header/Header";
import About from "./about/About";
import Footer from "./footer/Footer";
import Home from "./home/Home";
import Gallery from "./gallery/Gallery";
import Contact from "./contact/Contact";
import Video from "./video/Video";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" exact element={<About />} />
        <Route path="/gallery" exact element={<Gallery />} />
        <Route path="/video" exact element={<Video />} />
        <Route path="/contact" exact element={<Contact />} />


      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
