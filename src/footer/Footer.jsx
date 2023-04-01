import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <>
  <footer className="ds page_footer section_padding_70">
    <div className="container">
      <div className="row">
        <div
          className="col-md-3 col-lg-3 "
          
        >
          <div className="widget widget_text">
            <Link to="/" className="logo logo_image bottommargin_10">
              <h1>
                Wave of
                <span className="muellerhoff">image</span>
              </h1>
              {/* <img src="images/logo.png" alt=""> */}
            </Link>
            <p>
            Hi, my name is Nuwan & I work as freelance retoucher and photographer..
            </p>
            <p>
            Feel free to contact me for any of your Photography or retouching needs.
            </p>
            {/* <div class="size_small">
									<i class="fa fa-cc-visa"></i>
									<i class="fa fa-cc-discover"></i>
									<i class="fa fa-cc-mastercard"></i>
									<i class="fa fa-cc-amex"></i>
									<i class="fa fa-cc-paypal"></i>
								</div> */}
          </div>
        </div>
        <div
          className="col-md-6 col-lg-offset-1 col-lg-4 "
          
        >
          <div className="row footer_lists">
            <div className="col-xs-6">
              <h3 className="widget-title">Navigation</h3>
              <div>
                <ul className="list2 bottommargin_0">
                  <li className="">
                    <Link to="/">Homepage</Link>
                  </li>
                  <li className="">
                    <Link to="/about">About</Link>
                  </li>
                  <li className="">
                    <Link to="/gallery">Gallery</Link>
                  </li>
                  <li className="">
                    <Link to="/video">Videos</Link>
                  </li>
                  <li className="">
                    <Link to="/contact">Contacts</Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-xs-6">
              <h3 className="widget-title">Services</h3>
              <div>
                <ul className="list2 bottommargin_0">
                  <li className="">
                    <p>Photography</p>
                  </li>
                  <li className="">
                    <p>Retouching</p>
                  </li>
                  <li className="">
                    <p>Wedding Album Templates</p>
                  </li>
                  <li className="">
                    <p>Colour Grading</p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div
          className="col-md-3 col-lg-offset-1 col-lg-3 "
          
        >
          <div className="widget widget_banner">
            <div className="vertical-item content-absolute ds">
              <div className="item-media">
                <img src="assets/images/models_square/01.jpg" alt="" />
              </div>
              <div className="item-content">
                {/* <span class="main_bg_color">
											New
										</span> */}
                <h2>
                  Watch your
                  <br /> Beauty
                </h2>
              </div>
              
            </div>
          </div>
        </div>
      </div>
    </div>
  </footer>
  <section className="ls page_copyright section_padding_20">
    <div className="container">
      <div className="row topmargin_5 bottommargin_5">
        <div className="col-sm-12 text-center">
          <p className="darklinks">
            © Wave of image | Created with
            <i className="rt-icon2-heart highlight" /> by
            <Link to="http://modernwebtemplates.com/">
              Radiant Spark Technology
            </Link>
          </p>
        </div>
      </div>
    </div>
  </section>
</>

  )
}

export default Footer
