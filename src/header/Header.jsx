import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import $ from "jquery";
import "jquery-ui-dist/jquery-ui";
import "./header.css" 
import { useState } from "react";
const Header = () => {
  // const [clicked, setClicked] = useState(false)

  // handleClick = () =>{
  //   setClicked({clicked})
  // }

  // const [showMobileMenu, setShowMobileMenu] = useState(false)

  // const handleShowMobileMenu = () => {
  //   setShowMobileMenu(true);
  // };
  // const handleCloseMobileMenu = () => {
  //   setShowMobileMenu(false);
  // };
  useEffect(() => {
    if ($().scrollbar) {
      $('[class*="scrollbar-"]').scrollbar();
    }
    if ($().superfish) {
      $("ul.sf-menu").superfish({
        popUpSelector: "ul:not(.mega-menu ul), .mega-menu ",
        delay: 700,
        animation: { opacity: "show", marginTop: 1 },
        animationOut: { opacity: "hide", marginTop: 5 },
        speed: 200,
        speedOut: 200,
        disableHI: false,
        cssArrows: true,
        autoArrows: true,
      });
      $("ul.sf-menu-side").superfish({
        popUpSelector: "ul:not(.mega-menu ul), .mega-menu ",
        delay: 600,
        animation: { opacity: "show", height: "100%" },
        animationOut: { opacity: "hide", height: 0 },
        speed: 600,
        speedOut: 400,
        disableHI: false,
        cssArrows: true,
        autoArrows: true,
      });
    }

    //toggle mobile menu
    $(".toggle_menu").on("click", function () {
      $(".toggle_menu").toggleClass("mobile-active");
      $(".page_header").toggleClass("mobile-active");
    });

    $(".mainmenu a").on("click", function () {
      if (!$(this).hasClass("sf-with-ul")) {
        $(".toggle_menu").toggleClass("mobile-active");
        $(".page_header").toggleClass("mobile-active");
      }
    });

    //side header processing
    var $sideHeader = $(".page_header_side");
    if ($sideHeader.length) {
      var $body = $("body");
      $(".toggle_menu_side").on("click", function () {
        if ($(this).hasClass("header-slide")) {
          $sideHeader.toggleClass("active-slide-side-header");
        } else {
          if ($(this).parent().hasClass("header_side_right")) {
            $body.toggleClass("active-side-header slide-right");
          } else {
            $body.toggleClass("active-side-header");
          }
        }
      });
      // toggle sub-menus visibility on menu-side-click
      $("ul.menu-side-click")
        .find("li")
        .each(function () {
          var $thisLi = $(this);
          //toggle submenu only for menu items with submenu
          if ($thisLi.find("ul").length) {
            $thisLi
              .append('<span class="activate_submenu"></span>')
              .find(".activate_submenu")
              .on("click", function () {
                var $thisSpan = $(this);
                if ($thisSpan.parent().hasClass("active-submenu")) {
                  $thisSpan.parent().removeClass("active-submenu");
                  return;
                }
                $thisLi
                  .addClass("active-submenu")
                  .siblings()
                  .removeClass("active-submenu");
              });
          } //eof sumbenu check
        });
      //hidding side header on click outside header
      $("body").on("click", function (e) {
        if (!$(e.target).closest(".page_header_side").length) {
          $sideHeader.removeClass("active-slide-side-header");
          $body.removeClass("active-side-header slide-right");
        }
      });
    } //sideHeader check

    //1 and 2/3/4th level mainmenu offscreen fix
    var MainWindowWidth = $(window).width();
    $(window).on("resize", function () {
      MainWindowWidth = $(window).width();
    });
    //2/3/4 levels
    $(".mainmenu")
      .on("mouseover", "ul li", function () {
        if (MainWindowWidth > 991) {
          var $this = $(this);
          // checks if third level menu exist
          var subMenuExist = $this.find("ul").length;
          if (subMenuExist > 0) {
            var subMenuWidth = $this.find("ul, div").first().width();
            var subMenuOffset =
              $this.find("ul, div").first().parent().offset().left +
              subMenuWidth;
            // if sub menu is off screen, give new position
            if (subMenuOffset + subMenuWidth > MainWindowWidth) {
              var newSubMenuPosition = subMenuWidth + 0;
              $this.find("ul, div").first().css({
                left: -newSubMenuPosition,
              });
            } else {
              $this.find("ul, div").first().css({
                left: "100%",
              });
            }
          }
        }
        //1st level
      })
      .on("mouseover", "> li", function () {
        if (MainWindowWidth > 991) {
          var $this = $(this);
          var subMenuExist = $this.find("ul").length;
          if (subMenuExist > 0) {
            var subMenuWidth = $this.find("ul").width();
            var subMenuOffset = $this.find("ul").parent().offset().left;
            // if sub menu is off screen, give new position
            if (subMenuOffset + subMenuWidth > MainWindowWidth) {
              var newSubMenuPosition =
                MainWindowWidth - (subMenuOffset + subMenuWidth);
              $this.find("ul").first().css({
                left: newSubMenuPosition,
              });
            }
          }
        }
      });

    //toTop
    if ($().UItoTop) {
      $().UItoTop({ easingType: "easeOutQuart" });
    }
  }, []);

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
            <div className="">
              <ul id="navbar" className="">
                <li >
                  <Link className="active" to="/">Home</Link>
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
            <div id='root'>
          
            </div>
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
  );
};

export default Header;
