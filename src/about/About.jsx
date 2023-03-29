import React from 'react'

const About = () => {
  return (
    <div>
      <>
  <section className="ds section_padding_70 about-content">
    <div className="container">
      <div className="row">
        <div className="col-sm-12">
          <article className="post format-small-image with_background">
            <div className="side-item content-padding">
              <div className="row">
                <div className="col-md-6">
                  <div className="item-media entry-thumbnail">
                    <img src="assets/images/01.jpg" alt="" />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="item-content .about-content">
                    <h2 className="big topmargin_0 bottommargin_30">
                      About Me
                    </h2>
                    <p>
                      Hi, my name is Nuwan &amp; I work as freelance retoucher
                      and photographer..
                    </p>
                    <p>
                      Feel free to contact me for any of your Photography or
                      retouching needs.
                    </p>
                    <p>MY PUBLISHED WORK</p>
                    <ul className="list2 bottommargin_0">
                      <li className="">
                        <p>MODEL MAGAZINE</p>
                      </li>
                      <li className="">
                        <p>ELEGANT MAGAZINE</p>
                      </li>
                      <li className="">
                        <p>HI MAGAZINE</p>
                      </li>
                    </ul>
                    <div className="row">
                      <div className="col-sm-6">
                        <ul className="list1 no-bullets">
                          <li>
                            <i className="highlight rt-icon2-phone5" />
                            <span className="grey">Phone:</span>
                            (+94) 77-1234567
                          </li>
                        </ul>
                      </div>
                      <div className="col-sm-6">
                        <ul className="list1 no-bullets">
                          <li>
                            <i className="highlight rt-icon2-world" />
                            <span className="grey">Website:</span>
                            <a href="#">
                              <em>waveofimage.com</em>
                            </a>
                          </li>
                        </ul>
                      </div>
                      <div className="col-sm-12">
                        <ul className="list1 no-bullets">
                          <li>
                            <i className="highlight rt-icon2-mail" />
                            <span className="grey">Email:</span>
                            <a href="#">
                              <em>
                                <span
                                  className="__cf_email__"
                                  data-cfemail="bddcdad8d3dec4fdcec8d2cfc993ded2d0"
                                >
                                  nilanga2008@gmail.com
                                </span>
                              </em>
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="page_social_icons topmargin_20">
                      <a
                        className="social-icon color-bg-icon soc-facebook"
                        href="#"
                        title="Facebook"
                      />
                      <a
                        className="social-icon color-bg-icon soc-twitter"
                        href="#"
                        title="Twitter"
                      />
                      <a
                        className="social-icon color-bg-icon soc-google"
                        href="#"
                        title="Google"
                      />
                      <a
                        className="social-icon color-bg-icon soc-linkedin"
                        href="#"
                        title="LinkedIn"
                      />
                      <a
                        className="social-icon color-bg-icon soc-pinterest"
                        href="#"
                        title="Pinterest"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </article>
        </div>
      </div>
    </div>
  </section>
  <section className="ds ms page_models models_portrait gorizontal_padding section_padding_70">
    <div className="container-fluid">
      <div className="row boxed-padding bottommargin_40">
        <div className="col-lg-7">
          <div className="filters isotope_filters inline-block margin_0">
            <a href="#" data-filter="*" className="selected">
              All
            </a>
            <a href="#" data-filter=".fashion">
              Photography
            </a>
            <a href="#" data-filter=".studio">
              Retouching
            </a>
            <a href="#" data-filter=".session">
              Colour grading
            </a>
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
              <img className="img_size_two" src="assets/images/01.jpg" alt="" />
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
              <img className="img_size_two" src="assets/images/02.jpg" alt="" />
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
              <img className="img_size_two" src="assets/images/03.jpg" alt="" />
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
              <img className="img_size_two" src="assets/images/04.jpg" alt="" />
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
              <img className="img_size_two" src="assets/images/05.jpg" alt="" />
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
              <img className="img_size_two" src="assets/images/06.jpg" alt="" />
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
              <img className="img_size_two" src="assets/images/1.jpg" alt="" />
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
              <img className="img_size_two" src="assets/images/2.jpg" alt="" />
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
              <img className="img_size_two" src="assets/images/3.jpg" alt="" />
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
              <img className="img_size_two" src="assets/images/5.jpg" alt="" />
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
              <img className="img_size_two" src="assets/images/7.jpg" alt="" />
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
              <img className="img_size_two" src="assets/images/8.jpg" alt="" />
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
  
</>

    </div>
  )
}

export default About
