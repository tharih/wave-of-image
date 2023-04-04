import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { imageData } from "../data/mockData";
import { motion } from "framer-motion";
import "../gallery/gallery.css";
import { fetchGallery } from "../utils/fetchGallery";
import FilterComp from "./filterComp";
import { urlFor } from "../client";
const Gallery = () => {
  const [image, setImage] = useState([]);
  const [loading, setLoading] = useState(false);
  const [filterCategory, setFilterCategory] = useState("");
  useEffect(() => {
    setLoading(true);
    fetchGallery()
      .then((res) => {
        setImage(res);
        // console.log(res);
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  if (loading) return <div>Loading...</div>;
  return (
    <section className="ds ms page_models models_portrait gorizontal_padding section_padding_70">
      <div className="container-fluid">
        <FilterComp setFilterCategory={setFilterCategory} />
        <div
          className="isotope_container isotope row masonry-layout"
          data-filters=".isotope_filters"
        >
          <div className="grid_home">
            {image
              .filter((item) =>
                item.category.title.toLocaleLowerCase().includes(filterCategory)
              )
              .map((item, index) => (
                <Link to="/gallery">
                  <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{
                      duration: 1,
                    }}
                    key={index}
                    className="image_box"
                  >
                    <img
                      className="homeGridImage"
                      src={urlFor(item.image.asset._ref).url()}
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
