import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <header className="page_header header_darkgrey columns_padding_0 table_section">
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
          <nav className="mainmenu_wrapper">
            <ul className="mainmenu nav sf-menu">
              <li className="active">
                <Link to="/">Home</Link>
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
          </nav>
          {/* eof main nav */}
          <span className="toggle_menu">
            <span />
          </span>
        </div>
        <div className="col-md-3 col-sm-6 header-contacts text-center hidden-xs">
          <div className="highlight inline-block fontsize_30 thin">
            (+94) 77 1234567
          </div>
          <div className="fontsize_20 grey topmargin_-5">24/7 free calls</div>
        </div>
      </div>
    </div>
  </header>
  
  )
}

export default Header
