import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import "./header.css";
import { useState } from "react";
import { CiMenuFries } from "react-icons/ci";
import { HiOutlineMenuAlt2 } from "react-icons/hi";
const Header = () => {
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  const handleClick = () => {
    setShowMobileMenu(true);
  };

  const handleClose = () => {
    setShowMobileMenu(false);
  };

  // const handleShowMobileMenu = () => {
  //   setShowMobileMenu(true);
  // };
  // const handleCloseMobileMenu = () => {
  //   setShowMobileMenu(false);
  // };
  useEffect(() => {}, []);

  return (
    <header className="page_header header_darkgrey columns_padding_0 table_section">
      <div
        className={`mobile-nav ${showMobileMenu ? "mobile-nav-open" : null}`}
      >
        <div>
          <HiOutlineMenuAlt2
            className="mobile-nav-icon"
            size={24}
            color="#f7ab10"
            onClick={handleClose}
          />

          <Link to={"/"} onClick={handleClose} className="mobile-nav-link">
            Home
          </Link>
          <Link to="/about" onClick={handleClose} className="mobile-nav-link">
            About
          </Link>
          <Link to="/gallery" onClick={handleClose} className="mobile-nav-link">
            Gallery
          </Link>
          <Link to="/video" onClick={handleClose} className="mobile-nav-link">
            Videos
          </Link>
          <Link onClick={handleClose} to="/contact" className="mobile-nav-link">
            Contact
          </Link>
        </div>
      </div>
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-3 col-sm-6 text-center">
            <Link to="/" className="logo logo_image">
              <h1>
                Wave of
                <span className="muellerhoff">image</span>
              </h1>
              {/* <img src="images/logo.png" alt=""> */}
            </Link>
          </div>
          <div className="col-md-6 text-center">
            {/* main nav start */}
            <div className="">
              <ul id="navbar" className="">
                <li>
                  <Link className="active" to="/">
                    Home
                  </Link>
                </li>
                <li>
                  <Link to="/about">About</Link>
                </li>
                {/* eof pages */}
                <li>
                  <Link to="/gallery">Gallery</Link>
                </li>
                <li>
                  <Link to="/video">Videos</Link>
                </li>
                {/* contacts */}
                <li>
                  <Link to="/contact">Contact</Link>
                </li>
                {/* eof contacts */}
              </ul>
            </div>
            {/* eof main nav */}
            {/* <span className="toggle_menu">
              <span />
            </span> */}
            {/* <div id="mobile" > */}
            {/* <i id="bar" className={clicked? "fa fa-times" : "fa fa-bars"}></i> */}
            {/* <i className="fa fa-bars"></i> */}
            {/* <i className="fa fa-times"></i> */}

            {/* </div> */}
            <div id="root"></div>
          </div>
          <div className="col-md-3 col-sm-6 header-contacts text-center">
            <CiMenuFries
              color="#fff"
              onClick={handleClick}
              size={24}
              className="mobile-nav-open-icon"
            />
          </div>{" "}
          <div className="col-md-3 col-sm-6 header-contacts text-center hidden-xs">
            <div className="highlight inline-block fontsize_30 thin">
              (+94) 77 1234567
            </div>
            <div className="fontsize_20 grey topmargin_-5">24/7 free calls</div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
