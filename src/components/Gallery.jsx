
import React, { useEffect } from "react";
import { Link } from "react-router-dom";


const Gallery = () => {
  return (
    <section className="ds ms page_models models_portrait gorizontal_padding section_padding_70">
      <div className="container-fluid">
        <div className="row boxed-padding bottommargin_40">
          <div className="col-lg-7">
            <div className="filters isotope_filters inline-block margin_0">
              <Link to="/" className="selected">
                All
              </Link>
              <Link to="/" data-filter=".fashion">
                Photography
              </Link>
              <Link to="/" data-filter=".studio">
                Retouching
              </Link>
              <Link to="/" data-filter=".session">
                Colour grading
              </Link>
            </div>
          </div>
          <div className="col-lg-5 text-lg-right">
            <form className="form-inline models-orderby">
              <div className="form-group select-group">
                <label className="sr-only" htmlFor="orderby">
                  Sort By:
                </label>
                <select
                  className="form-control orderby"
                  name="orderby"
                  id="orderby"
                >
                  <option value="default" selected="">
                    Default sorting
                  </option>
                  <option value="name">Sort by name</option>
                  <option value="date">Sort by date</option>
                  <option value="random">Random sorting</option>
                </select>
                <i className="rt-icon2-chevron-thin-down form-button" />
              </div>
              <div className="form-group select-group">
                <label className="sr-only" htmlFor="orderby1">
                  Sort By:
                </label>
                <select
                  className="form-control orderby"
                  name="orderby1"
                  id="orderby1"
                >
                  <option value="descending" selected="">
                    Descending
                  </option>
                  <option value="ascending">Ascending</option>
                </select>
                <i className="rt-icon2-chevron-thin-down form-button" />
              </div>
            </form>
          </div>
        </div>
        <div
          className="isotope_container isotope row masonry-layout"
          data-filters=".isotope_filters"
        >
          <div className="isotope-item col-lg-3 col-md-4 col-sm-6 fashion">
            <div className="vertical-item content-absolute">
              <div className="item-media">
                <img
                  className="img_size_two"
                  src="assets/images/01.jpg"
                  alt=""
                />
                <div className="media-links">
                  <div className="links-wrap">
                    <a
                      className="p-view prettyPhoto "
                      title=""
                      data-gal="prettyPhoto[gal]"
                      href="assets/images/01.jpg"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="isotope-item col-lg-3 col-md-4 col-sm-6 studio">
            <div className="vertical-item content-absolute">
              <div className="item-media">
                <img
                  className="img_size_two"
                  src="assets/images/02.jpg"
                  alt=""
                />
                <div className="media-links">
                  <div className="links-wrap">
                    <a
                      className="p-view prettyPhoto "
                      title=""
                      data-gal="prettyPhoto[gal]"
                      href="assets/images/02.jpg"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="isotope-item col-lg-3 col-md-4 col-sm-6 session">
            <div className="vertical-item content-absolute">
              <div className="item-media">
                <img
                  className="img_size_two"
                  src="assets/images/03.jpg"
                  alt=""
                />
                <div className="media-links">
                  <div className="links-wrap">
                    <a
                      className="p-view prettyPhoto "
                      title=""
                      data-gal="prettyPhoto[gal]"
                      href="assets/images/03.jpg"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="isotope-item col-lg-3 col-md-4 col-sm-6 fashion">
            <div className="vertical-item content-absolute">
              <div className="item-media">
                <img
                  className="img_size_two"
                  src="assets/images/04.jpg"
                  alt=""
                />
                <div className="media-links">
                  <div className="links-wrap">
                    <a
                      className="p-view prettyPhoto "
                      title=""
                      data-gal="prettyPhoto[gal]"
                      href="assets/images/04.jpg"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="isotope-item col-lg-3 col-md-4 col-sm-6 studio">
            <div className="vertical-item content-absolute">
              <div className="item-media">
                <img
                  className="img_size_two"
                  src="assets/images/05.jpg"
                  alt=""
                />
                <div className="media-links">
                  <div className="links-wrap">
                    <a
                      className="p-view prettyPhoto "
                      title=""
                      data-gal="prettyPhoto[gal]"
                      href="assets/images/05.jpg"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="isotope-item col-lg-3 col-md-4 col-sm-6 session">
            <div className="vertical-item content-absolute">
              <div className="item-media">
                <img
                  className="img_size_two"
                  src="assets/images/06.jpg"
                  alt=""
                />
                <div className="media-links">
                  <div className="links-wrap">
                    <a
                      className="p-view prettyPhoto "
                      title=""
                      data-gal="prettyPhoto[gal]"
                      href="assets/images/06.jpg"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="isotope-item col-lg-3 col-md-4 col-sm-6 fashion">
            <div className="vertical-item content-absolute">
              <div className="item-media">
                <img
                  className="img_size_two"
                  src="assets/images/1.jpg"
                  alt=""
                />
                <div className="media-links">
                  <div className="links-wrap">
                    <a
                      className="p-view prettyPhoto "
                      title=""
                      data-gal="prettyPhoto[gal]"
                      href="assets/images/1.jpg"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="isotope-item col-lg-3 col-md-4 col-sm-6 studio">
            <div className="vertical-item content-absolute">
              <div className="item-media">
                <img
                  className="img_size_two"
                  src="assets/images/2.jpg"
                  alt=""
                />
                <div className="media-links">
                  <div className="links-wrap">
                    <a
                      className="p-view prettyPhoto "
                      title=""
                      data-gal="prettyPhoto[gal]"
                      href="assets/images/2.jpg"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="isotope-item col-lg-3 col-md-4 col-sm-6 session">
            <div className="vertical-item content-absolute">
              <div className="item-media">
                <img
                  className="img_size_two"
                  src="assets/images/3.jpg"
                  alt=""
                />
                <div className="media-links">
                  <div className="links-wrap">
                    <a
                      className="p-view prettyPhoto "
                      title=""
                      data-gal="prettyPhoto[gal]"
                      href="assets/images/3.jpg"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="isotope-item col-lg-3 col-md-4 col-sm-6 fashion">
            <div className="vertical-item content-absolute">
              <div className="item-media">
                <img
                  className="img_size_two"
                  src="assets/images/5.jpg"
                  alt=""
                />
                <div className="media-links">
                  <div className="links-wrap">
                    <a
                      className="p-view prettyPhoto "
                      title=""
                      data-gal="prettyPhoto[gal]"
                      href="assets/images/5.jpg"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="isotope-item col-lg-3 col-md-4 col-sm-6 studio">
            <div className="vertical-item content-absolute">
              <div className="item-media">
                <img
                  className="img_size_two"
                  src="assets/images/7.jpg"
                  alt=""
                />
                <div className="media-links">
                  <div className="links-wrap">
                    <a
                      className="p-view prettyPhoto "
                      title=""
                      data-gal="prettyPhoto[gal]"
                      href="assets/images/7.jpg"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="isotope-item col-lg-3 col-md-4 col-sm-6 session">
            <div className="vertical-item content-absolute">
              <div className="item-media">
                <img
                  className="img_size_two"
                  src="assets/images/8.jpg"
                  alt=""
                />
                <div className="media-links">
                  <div className="links-wrap">
                    <a
                      className="p-view prettyPhoto "
                      title=""
                      data-gal="prettyPhoto[gal]"
                      href="assets/images/8.jpg"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-sm-12 text-center margin_0">
            <ul className="pagination ">
              <li>
                <a href="#">
                  <span className="sr-only">Prev</span>
                  <i className="rt-icon2-chevron-thin-left" />
                </a>
              </li>
              <li className="active">
                <a href="#">1</a>
              </li>
              <li>
                <a href="#">2</a>
              </li>
              <li>
                <a href="#">3</a>
              </li>
              <li>
                <a href="#">4</a>
              </li>
              <li>
                <a href="#">5</a>
              </li>
              <li>
                <a href="#">
                  <span className="sr-only">Next</span>
                  <i className="rt-icon2-chevron-thin-right" />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
