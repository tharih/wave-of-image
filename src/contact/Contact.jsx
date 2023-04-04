import React from 'react'
import { useRef } from 'react';
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
          <Link to="#" className="theme_button">
            kurunagala
          </Link>
        </div>
      </div>
    </div>
  </section>
  <section className="ds contacts section_padding_50 ms">
    <div className="container">
      <div className="row topmargin_10 bottommargin_20">
        <div className="col-sm-4">
          <div className="teaser text-center">
            <h4 className="bottommargin_20">Address</h4>
            Kurunagala, Kurunagala
            <br />
            <span className="highlight">
              <Link to="https://html.modernwebtemplates.com/cdn-cgi/l/email-protection"
                className="__cf_email__"
                data-cfemail="fb939e979e959abb899e989e8b8f929495d5989496"
              >
                [email&nbsp;protected]
              </Link>
            </span>
            <br /> 8 (800) 456-2698
          </div>
        </div>
        <div className="col-sm-4 with_border">
          <div className="teaser text-center">
            <h4 className="bottommargin_20">Email</h4>
            James
            <br />
            <span className="highlight">
              <Link to="https://html.modernwebtemplates.com/cdn-cgi/l/email-protection"
                className="__cf_email__"
                data-cfemail="117b707c746251737e7e7a787f763f727e7c"
              >
                [email&nbsp;protected]
              </Link>
            </span>
            <br /> 8 (800) 456-2643
          </div>
        </div>
        <div className="col-sm-4">
          <div className="teaser text-center">
            <h4 className="bottommargin_20">Contact Number</h4>
            Robert
            <br />
            <span className="highlight">
              <Link
                to="https://html.modernwebtemplates.com/cdn-cgi/l/email-protection"
                className="__cf_email__"
                data-cfemail="f0829f92958284b0808295839994959e84de939f9d"
              >
                [email&nbsp;protected]
              </Link>
            </span>
            <br /> 8 (800) 456-5848
          </div>
        </div>
      </div>
    </div>
  </section>
  <section className="ds section_padding_70">
    <div className="container">
      <div className="row">
        <div className="col-sm-offset-1 col-sm-10 col-md-offset-2 col-md-8 col-lg-offset-3 col-lg-6 text-center">
          <h2 className="big margin_0">Contact Me</h2>
          <h2 className="muellerhoff topmargin_5 bottommargin_50 highlight">
            Contact Form
          </h2>
          <form
            className="contact-form"
            method="post"
            // action="https://html.modernwebtemplates.com/"
             onSubmit={sendEmail}
            ref={form}
          >
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
                className="form-control text-center"
                placeholder="Full name"
              />
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
                className="form-control text-center"
                placeholder="Email"
              />
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
                className="form-control text-center"
                placeholder="Phone number"
              />
            </div>
            <div className="form-group bottommargin_30">
              <label htmlFor="message" className="sr-only">
                Message
              </label>
              <textarea
                aria-required="true"
                rows={6}
                cols={45}
                name="message"
                id="message"
                className="form-control text-center"
                placeholder="Message"
                defaultValue={""}
              />
            </div>
            <button
              type="submit"
              id="contact_form_submit"
              name="contact_submit"
              value="Send"
              className="theme_button color1"
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
            <Link
              className="social-icon color-bg-icon soc-facebook"
              to="#"
              title="Facebook"
            />
            <Link
              className="social-icon color-bg-icon soc-twitter"
              to="#"
              title="Twitter"
            />
            <Link
              className="social-icon color-bg-icon soc-google"
              to="#"
              title="Google"
            />
            <Link
              className="social-icon color-bg-icon soc-linkedin"
              to="#"
              title="LinkedIn"
            />
            <Link
              className="social-icon color-bg-icon soc-pinterest"
              to="#"
              title="Pinterest"
            />
          </div>
        </div>
      </div>
    </div>
  </section>
</>

  )
}

export default Contact
