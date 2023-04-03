import React, { useEffect, useRef, useState } from "react";
import {motion,AnimatePresence} from 'framer-motion'
import image01 from "../images/01.jpg";
import image02 from "../images/02.jpg";
import image03 from "../images/03.jpg";
import image04 from "../images/04.jpg";
import image05 from "../images/05.jpg";
import image06 from "../images/06.jpg";
import image07 from "../images/3.jpg";
import image08 from "../images/1.jpg";
import "./gallery.css";
import Modal from "../components/Modal";
import { randomGen } from "../utils/cal";
import { SanityClient } from "@sanity/client";
import { fetchGallery } from "../utils/fetchGallery";

const imageData = [
  {
    id: 0, 
    category: "photography",
    src: image01,
  },{
    id: 1, 
    category: "retouching",
    src: image02,
  },{
    id: 2, 
    category: "photography",
    src: image03,
  },{
    id: 3, 
    category: "photography",
    src: image04,
  },{
    id: 4, 
    category: "retouching",
    src: image05,
  },
  {
    id: 5, 
    category: "color grading",
    src: image06,
  }, {
    id: 6, 
    category: "color grading",
    src: image07,
  }, {
    id: 7, 
    category: "retouching",
    src: image08,
  }

];

const Gallery = () => {
  const imageRef = useRef();
  const [openModal, setOpenModal] = useState(false);
  const [clickedImage, setClickedImage] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(null);
  const [animateClass, setAnimateClass] = useState("second");
  const [filterCategory, setFilterCategory] = useState("")
  const [image, setImage] = useState([])
  const [loading, setLoading] = useState(false)

  useEffect(() =>{
    setLoading(true)
    fetchGallery()
    .then((res) => {
      setImage(res);
    })
    .catch((error)=>{
      console.log(error);
      
    })
    .finally(()=>{
      setLoading(false)
    })
  },[])



  const handleClick = (item) => {
    setCurrentIndex(item.id);
    console.log(item.id);
    setOpenModal(true);
  };

  const closeModal = () => {
    setOpenModal(false);
    setClickedImage(null);
  };
  const handleNext = () => {
    currentIndex + 1 === imageData.length
      ? setCurrentIndex(0)
      : setCurrentIndex(currentIndex + 1);
    setAnimateClass("fadeIn");
  };
  const handlePrev = () => {
    currentIndex === 1
      ? setCurrentIndex(imageData.length - 1)
      : setCurrentIndex(currentIndex - 1);
  };

  
  return (
    <div className="ds page_portfolio section_padding_70 columns_padding_0">
      <div className="container-fluid">
        <div className="row">
          <div className="col-sm-12">
            <div className="filters isotope_filters text-center">
              <span className="filter_btn" onClick={()=> setFilterCategory("")}>
              All
              </span>
              <span className="filter_btn" onClick={()=> setFilterCategory("photography")}>
                Photography
              </span>
              <span className="filter_btn" onClick={()=> setFilterCategory("retouching")}>
                Retouching
              </span>
              <span className="filter_btn" onClick={()=> setFilterCategory("color grading")}>
                Color grading
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="grid_wrapper">
        {imageData
        .filter(item => item.category.toLocaleLowerCase().includes(filterCategory))
        .map((item, index) => (
          <AnimatePresence>
          <motion.div
          initial={{scale: 0, opacity:0}}
          whileInView={{
            scale:1, opacity:1
          }}
          exit={{opacity: 0, scale:0}}
          transition={{
            duration: 1
          }}
            style={{ gridRowEnd: `span ${randomGen(3, 7)}` }}
            key={index}
            onClick={() => handleClick(item)}
          >
            <img ref={imageRef} src={item.src} alt="" />
          </motion.div>
          </AnimatePresence>
        ))}
      </div>
      {openModal && (
        <Modal
          handleNext={handleNext}
          closeModal={closeModal}
          handlePrev={handlePrev}
          imageData={imageData}
          currentIndex={currentIndex}
          animateClass={"fadeIn"}
        />
      )}
    </div>
  );
};

export default Gallery;
