import "./App.css";
import { BrowserRouter, Route, Router, Routes } from "react-router-dom";
import Header from "./header/Header";
import About from "./about/About";
import Footer from "./footer/Footer";
import Home from "./home/Home";
import Gallery from "./gallery/Gallery";
import Contact from "./contact/Contact";
import VideoPage from "./video/VideoPage";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" exact element={<About />} />
        <Route path="/gallery" exact element={<Gallery />} />
        <Route path="/video" exact element={<VideoPage />} />
        <Route path="/contact" exact element={<Contact />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
