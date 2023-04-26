import React, { useRef } from 'react'
import { Link } from 'react-router-dom'
import emailjs from '@emailjs/browser';

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_406t204', 'template_djutns2', form.current, 'JIoITWCRFErW3lGUM')
      .then((result) => {
          console.log(result.text);
          console.log("message sent");
      }, (error) => {
          console.log(error.text);
      });
  


  }
  return (
    <>
  <section className="ds map muted_section">
    <div className="container">
      <div className="row">
        <div className="col-sm-12 text-center">
          <div className="teaser text-center">
            <div className="teaser_icon black size_normal">
              <i className="rt-icon2-location2 highlight" />
            </div>
          </div>
          <Link to="/" className="theme_button">
            kurunagala
          </Link>
        </div>
      </div>
    </div>
  </section>
  <section className="ds section_padding_70">
    <div className="container">
      <div className="row">
        <div className="col-sm-12 text-center">
          <h2 className="big margin_0">Contact Me</h2>
          <h2 className="muellerhoff topmargin_5 bottommargin_50 highlight">
            Contact Form
          </h2>
        </div>
      </div>
      <div className="row">
        <div className="col-md-4">
          <p className="bottommargin_20">
            <span className="grey fontsize_12 text-uppercase bold">
              address:
            </span>
            <br /> Kurunagala, Kurunagala
          </p>
          <p className="bottommargin_20">
            <span className="grey fontsize_12 text-uppercase bold">
              Call me:
            </span>
            <br /> (+94) 77-123467, (+94) 77-123467
          </p>
          <p className="bottommargin_0">
            <span className="grey fontsize_12 text-uppercase bold">Email:</span>
            <br />
            <a href="mainto:nilanga2008@gmail.com">
              <em>
                <span
                  className="__cf_email__"
                  data-cfemail="f29395979c918bb2818782829d8086dc919d9f"
                >
                  nilanga2008@gmail.com
                </span>
              </em>
            </a>
          </p>
        </div>
        <div className="col-md-8">
          <form
            className="contact-form row"
            method="post"
            // action="https://html.modernwebtemplates.com/"
            onSubmit={sendEmail}
            ref={form}
          >
            <div className="col-sm-6">
              <div className="form-group">
                <label htmlFor="name" className="sr-only">
                  Full Name
                  <span className="required">*</span>
                </label>
                <input
                  type="text"
                  aria-required="true"
                  size={30}
                  defaultValue=""
                  name="user_name"
                  id="name"
                  className="form-control with-icon"
                  placeholder=""
                />
                <i className="rt-icon2-user" />
              </div>
              <div className="form-group">
                <label htmlFor="email" className="sr-only">
                  Email address
                  <span className="required">*</span>
                </label>
                <input
                  type="email"
                  aria-required="true"
                  size={30}
                  defaultValue=""
                  name="user_email"
                  id="email"
                  className="form-control with-icon"
                  placeholder=""
                />
                <i className="rt-icon2-mail" />
              </div>
              <div className="form-group">
                <label htmlFor="phone" className="sr-only">
                  Phone number
                  <span className="required">*</span>
                </label>
                <input
                  type="text"
                  aria-required="true"
                  size={30}
                  defaultValue=""
                  name="user_number"
                  id="phone"
                  className="form-control with-icon"
                  placeholder=""
                />
                <i className="rt-icon2-phone5" />
              </div>
              {/* <div className="form-group bottommargin_0">
                <label htmlFor="theme" className="sr-only">
                  Message 
                  <span className="required">*</span>
                </label>
                <input
                  type="text"
                  aria-required="true"
                  size={30}
                  defaultValue=""
                  name="message"
                  id="theme"
                  className="form-control with-icon"
                  placeholder=""
                />
                <i className="rt-icon2-bulb" />
              </div> */}
            </div>
            <div className="col-sm-6">
              <div className="form-group">
                <label htmlFor="message" className="sr-only">
                  Message
                </label>
                <textarea
                  aria-required="true"
                  rows={6}
                  cols={45}
                  name="message"
                  id="message"
                  className="form-control with-icon"
                  placeholder=""
                  defaultValue={""}
                />
                <i className="rt-icon2-pen" />
              </div>
              <button
                type="submit"
                id="contact_form_submit"
                name="contact_submit"
                value="Send"
                className="theme_button color1 bottommargin_0"
              >
                Send
              </button>
              <button
                type="reset"
                id="contact_form_clear"
                name="contact_clear"
                className="theme_button inverse bottommargin_0"
              >
                Clear
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </section>
  <section className="ds ms section_padding_30 page_social">
    <div className="container">
      <div className="row topmargin_20 bottommargin_10">
        <div className="col-sm-12 text-center">
          <div className="page_social_icons">
            <a
              className="social-icon color-bg-icon soc-instagram"
              href="https://www.instagram.com/wave_of_image/"
              title="Instagram"
            />
            {/* <a
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
            /> */}
          </div>
        </div>
      </div>
    </div>
  </section>
</>

  )
}

export default Contact
