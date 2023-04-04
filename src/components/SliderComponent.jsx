import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useState } from "react";
import { fetchMainSlider } from "../utils/fetchMainSlider";
import { useEffect } from "react";

const SliderComponent = () => {
  const [slider, setSlider] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    fetchMainSlider()
      .then((res) => {
        setSlider(res);
        // console.log(res);
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div className="ds ms intro_section page_mainslider">
      <Slider {...settings}>
        <div className="vertical-item maincarousel-item content-absolute cs">
          <div className="item-media">
            <img className="img_size" src="assets/images/02.jpg" alt="" />
            <div className="media-links"></div>
          </div>
        </div>
        <div className="vertical-item maincarousel-item content-absolute cs">
          <div className="item-media">
            <img className="img_size" src="assets/images/03.jpg" alt="" />
            <div className="media-links"></div>
          </div>
        </div>
        <div className="vertical-item maincarousel-item content-absolute cs">
          <div className="item-media">
            <img className="img_size" src="assets/images/04.jpg" alt="" />
            <div className="media-links"></div>
          </div>
        </div>
        <div className="vertical-item maincarousel-item content-absolute cs">
          <div className="item-media">
            <img className="img_size" src="assets/images/05.jpg" alt="" />
            <div className="media-links"></div>
          </div>
        </div>
        <div className="vertical-item maincarousel-item content-absolute cs">
          <div className="item-media">
            <img className="img_size" src="assets/images/06.jpg" alt="" />
            <div className="media-links"></div>
          </div>
        </div>
      </Slider>
    </div>
  );
};

export default SliderComponent;
