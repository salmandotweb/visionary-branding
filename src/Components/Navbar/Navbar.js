import React, { useEffect, useState } from "react";
import classes from "./Navbar.module.css";
import { VscThreeBars } from "react-icons/vsc";
import { IoIosCloseCircle } from "react-icons/io";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  useEffect(() => {
    const changeWidth = () => {
      setScreenWidth(window.innerWidth);
    };

    window.addEventListener("resize", changeWidth);
  }, []);

  const toggleNav = () => {
    setOpen(!open);
  };
  const closeOverlay = () => {
    setOpen(false);
  };
  return (
    <nav className={classes.navbar}>
      {(open || screenWidth > 1060) && (
        <div onClick={closeOverlay} className={classes.overlay}></div>
      )}
      <div>
        <h1 className={classes.logo}>
          <span>Visionary</span> Branding<span>.</span>
        </h1>
      </div>
      {(open || screenWidth > 1060) && (
        <ul
          className={
            open ? `${classes.links} ${classes.active}` : classes.links
          }
        >
          <li>
            <a href="/">Services</a>
          </li>
          <li>
            <a href="/">Resources</a>
          </li>
          <li>
            <a href="/">Company</a>
          </li>
          <li>
            <a href="/">Blog</a>
          </li>
          <li>
            <a href="/">Contact Us</a>
          </li>
          <li>
            <button className={`btn btn_color ${classes.letsBtn}`}>
              Let's Talk
            </button>
          </li>

          <button onClick={toggleNav} className={`btn ${classes.closeBtn}`}>
            <IoIosCloseCircle />
          </button>
        </ul>
      )}
      <button onClick={toggleNav} className={`btn ${classes.toggleBtn}`}>
        <VscThreeBars />
      </button>
    </nav>
  );
};

export default Navbar;
