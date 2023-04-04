import React, { useState } from "react";
import { DefaultPlayer as Video } from "react-html5video";
import "react-html5video/dist/styles.css";
import image01 from "../images/01.jpg";
import image02 from "../images/02.jpg";
import image03 from "../images/03.jpg";
import image04 from "../images/04.jpg";
import image05 from "../images/05.jpg";
import image06 from "../images/06.jpg";
import image07 from "../images/3.jpg";
import image08 from "../images/1.jpg";
import VideoModal from "../components/VideoModal";
import { fetchVideo } from "../utils/fetchVideo";
import { useEffect } from "react";
import { urlFor } from "../client";
import FilterComp from "../components/filterComp";

const imageData = [
  image01,
  image02,
  image03,
  image04,
  image05,
  image08,
  image06,
  image04,
  image06,
  image07,
  image08,
];

const VideoPage = () => {
  const [openModal, setOpenModal] = useState(false);
  const [video, setVideo] = useState([]);
  console.log("🚀 ~ file: VideoPage.jsx:34 ~ VideoPage ~ video:", video);
  const [loading, setLoading] = useState(false);
  const [linkVideo, setLinkVideo] = useState("");
  const [filterCategory, setFilterCategory] = useState("");

  useEffect(() => {
    setLoading(true);
    fetchVideo()
      .then((res) => {
        setVideo(res);
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  const handleVideoOpen = (item) => {
    setLinkVideo(item.link);
    setOpenModal(true);
  };
  const closeModal = () => {
    setOpenModal(false);
  };

  if (loading) return <div>loading....</div>;
  return (
    <>
      <section className="ds page_portfolio section_padding_70 columns_padding_0">
        <div className="container-fluid">
          <div className="row">
            <div className="col-sm-12">
              <FilterComp setFilterCategory={setFilterCategory} />
              <div
                className="isotope_container isotope row masonry-layout"
                data-filters=".isotope_filters"
              >
                <div className="grid_wrapper">
                  {video &&
                    video
                      .filter((item) =>
                        item.category.title
                          .toLocaleLowerCase()
                          .includes(filterCategory)
                      )
                      .map((item, index) => (
                        <div
                          style={{ gridRowEnd: `span 4` }}
                          key={index}
                          onClick={() => handleVideoOpen(item, index)}
                        >
                          <img
                            src={urlFor(item.image.asset._ref).url()}
                            alt=""
                          />
                        </div>
                      ))}
                </div>
              </div>
              {/* eof .isotope_container.row */}
            </div>
          </div>
        </div>
      </section>
      {openModal && (
        <VideoModal closeModal={closeModal} linkVideo={linkVideo} />
      )}
    </>
  );
};

export default VideoPage;
