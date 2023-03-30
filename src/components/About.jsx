import React from 'react'
import { Link } from 'react-router-dom'

const About = () => {
  return (
    <section className="ds intro_section">
    <div className="flexslider vertical-nav">
     
        <div>
          <img src="assets/images/slide01.png" alt="" />
          <div className="container">
            <div className="row">
              <div className="col-sm-12 text-center text-md-right">
                <div className="slide_description_wrapper">
                  <div className="slide_description">
                    <div className="intro-layer">
                      <h2 className="big margin_0">About Me</h2>
                      <h2 className="muellerhoff topmargin_5 bottommargin_50 highlight">
                        Someting You Need to Know
                      </h2>
                    </div>
                    <div className="intro-layer" >
                      <p className="entry-excerpt bottommargin_30">
                        Hi, my name is Nuwan &amp; I work as freelance retoucher
                        and photographer..
                      </p>
                      <p>
                        Feel free to contact me for any of your Photography or
                        retouching needs.
                      </p>
                      <p>
                        E-mail: <span> nilanga2008@gmail.com</span>
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
                      <Link
                        to="/about"
                        className="theme_button color1 topmargin_20"
                      >
                        About us
                      </Link>
                    </div>
                  </div>
                  {/* eof .slide_description */}
                </div>
                {/* eof .slide_description_wrapper */}
              </div>
              {/* eof .col-* */}
            </div>
            {/* eof .row */}
          </div>
          {/* eof .container */}
        </div>
     
    </div>
    {/* eof flexslider */}
  </section>
  
  )
}

export default About
