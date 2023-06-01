import React from 'react'

const Service = () => {
  return (
    <section className="ds intro_section">
    <div className="flexslider vertical-nav">
      
        <div>
          <img src="assets/images/slider002.png" alt="" />
          <div className="container">
            <div className="row">
              <div className="col-sm-12 text-center text-md-right">
                <div className="slide_description_wrapper">
                  <div className="slide_description">
                    <div className="intro-layer">
                      <h2 className="big margin_0">Our Services</h2>
                      <h2 className="muellerhoff topmargin_5 bottommargin_50 highlight">
                        Someting You Need to Know
                      </h2>
                    </div>
                    <div className="intro-layer">
                      <div className="media bottommargin_30">
                        <div className="media-left">
                          <div className="service-media" />
                        </div>
                        <div className="media-body">
                          <h4 className="topmargin_0 bottommargin_5">
                            <p>Photography</p>
                          </h4>
                        </div>
                      </div>
                      <div className="media bottommargin_30">
                        <div className="media-left">
                          <div className="service-media" />
                        </div>
                        <div className="media-body">
                          <h4 className="topmargin_0 bottommargin_5">
                            <p>Retouching</p>
                          </h4>
                        </div>
                      </div>
                      <div className="media bottommargin_30">
                        <div className="media-left">
                          <div className="service-media" />
                        </div>
                        <div className="media-body">
                          <h4 className="topmargin_0 bottommargin_5">
                            <p>Wedding Album Templates</p>
                          </h4>
                        </div>
                      </div>
                      {/* <div className="media bottommargin_30">
                        <div className="media-left">
                          <div className="service-media" />
                        </div>
                        <div className="media-body">
                          <h4 className="topmargin_0 bottommargin_5">
                            <p>Courses from Professional Models</p>
                          </h4>
                        </div>
                      </div> */}
                      <div className="media bottommargin_30">
                        <div className="media-left">
                          <div className="service-media" />
                        </div>
                        <div className="media-body">
                          <h4 className="topmargin_0 bottommargin_5">
                            <p>Colour Grading</p>
                          </h4>
                        </div>
                      </div>
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

export default Service
