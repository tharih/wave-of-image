import "./App.css";
import { BrowserRouter, Route, Router, Routes } from "react-router-dom";
import Header from "./header/Header";
import About from "./about/About";
import Footer from "./footer/Footer";
import Home from "./home/Home";
import Gallery from "./gallery/Gallery";
import Contact from "./contact/Contact";
import VideoPage from "./video/VideoPage";
import { useEffect } from "react";

function App() {
  useEffect(() => {
    // define a custom handler function
    // for the contextmenu event
    const handleContextMenu = (e) => {
      // prevent the right-click menu from appearing
      e.preventDefault();
    };

    // attach the event listener to
    // the document object
    document.addEventListener("contextmenu", handleContextMenu);

    // clean up the event listener when
    // the component unmounts
    return () => {
      document.removeEventListener("contextmenu", handleContextMenu);
    };
  }, []);
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
