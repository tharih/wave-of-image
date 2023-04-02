import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { imageData } from "../data/mockData";
import {motion } from 'framer-motion'
import '../gallery/gallery.css'
const Gallery = () => {
  return (
    <section className="ds ms page_models models_portrait gorizontal_padding section_padding_70">
      <div className="container-fluid">

        <div
          className="isotope_container isotope row masonry-layout"
          data-filters=".isotope_filters"
        >
          <div className="grid_home">
          {imageData.map((item,index)=>(
            <Link to='/gallery'>
              <motion.div initial={{opacity:0}} whileInView={{opacity:1}} transition={{
                duration:1
              }} 
              key={index}  className="image_box">
                <img
                
                  className="homeGridImage"
                  src={`assets/images/${item.src}.jpg`}
                  alt=""
                />
              </motion.div>
            </Link>
          ))}
          </div>

        </div>
      </div>
    </section>
  );
};

export default Gallery;
