import React from 'react'
import Gallery from '../components/Gallery'


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
  
</>
 <Gallery />

    </div>
  )
}

export default About
