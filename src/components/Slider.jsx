import React, { Component } from "react";
import Slider from "react-slick";

export default class Slider_one extends Component {
  render() {
    const settings = {
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 1
    };
    return (
      
      <Slider {...settings} >
          <section className="ds ms intro_section page_mainslider">
        <div className=" page_maincarousel">
        <div>
      <div className="vertical-item maincarousel-item content-absolute cs">
        <div className="item-media">
          <img className="img_size" src="assets/images/01.jpg" alt="" />
          <div className="media-links">
            <a className="abs-link" title="" href="model.html" />
          </div>
        </div>
      </div>
    </div>

    <div>
      <div className="vertical-item maincarousel-item content-absolute cs">
        <div className="item-media">
          <img className="img_size" src="assets/images/02.jpg" alt="" />
          <div className="media-links">
            
          </div>
        </div>
      </div>
    </div>

    <div>
      <div className="vertical-item maincarousel-item content-absolute cs">
        <div className="item-media">
          <img className="img_size" src="assets/images/03.jpg" alt="" />
          <div className="media-links">
            
          </div>
        </div>
      </div>
    </div>

    <div>
      <div className="vertical-item maincarousel-item content-absolute cs">
        <div className="item-media">
          <img className="img_size" src="assets/images/04.jpg" alt="" />
          <div className="media-links">
            
          </div>
        </div>
      </div>
    </div>

    <div>
      <div className="vertical-item maincarousel-item content-absolute cs">
        <div className="item-media">
          <img className="img_size" src="assets/images/05.jpg" alt="" />
          <div className="media-links">
            
          </div>
        </div>
      </div>
    </div>

    <div>
      <div className="vertical-item maincarousel-item content-absolute cs">
        <div className="item-media">
          <img className="img_size" src="assets/images/06.jpg" alt="" />
          <div className="media-links">
            
          </div>
        </div>
      </div>
    </div>

    <div>
      <div className="vertical-item maincarousel-item content-absolute cs">
        <div className="item-media">
          <img className="img_size" src="assets/images/7.jpg" alt="" />
          <div className="media-links">
            
          </div>
        </div>
      </div>
    </div>

    <div>
      <div className="vertical-item maincarousel-item content-absolute cs">
        <div className="item-media">
          <img className="img_size" src="assets/images/8.jpg" alt="" />
          <div className="media-links">
            
          </div>
        </div>
      </div>
    </div>

    <div>
      <div className="vertical-item maincarousel-item content-absolute cs">
        <div className="item-media">
          <img className="img_size" src="assets/images/2.jpg" alt="" />
          <div className="media-links">
            
          </div>
        </div>
      </div>
    </div>

    <div>
      <div className="vertical-item maincarousel-item content-absolute cs">
        <div className="item-media">
          <img className="img_size" src="assets/images/5.jpg" alt="" />
          <div className="media-links">
            
          </div>
        </div>
      </div>
    </div>
        </div>
      </section>
        </Slider>
    );
  }
}