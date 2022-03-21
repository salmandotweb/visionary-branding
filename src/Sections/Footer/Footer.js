import React from "react";
import { BsFacebook, BsLinkedin } from "react-icons/bs";
import { AiFillInstagram } from "react-icons/ai";
import classes from "./Footer.module.css";

const Footer = () => {
  const date = new Date();
  const year = date.getFullYear();
  return (
    <footer className={classes.footer}>
      <h1 className={classes.footer_logo}>
        <span>Visionary</span> Branding<span>.</span>
      </h1>
      <span className={classes.line}></span>
      <p className={classes.copyright}>
        &copy; Copyright {year} Visionary Branding. All right reserved
      </p>
      <div className={classes.footer_right}>
        <div className={classes.links}>
          <p>Privacy Policy</p>
          <p>Terms</p>
          <p>Get in Touch</p>
        </div>
        <div className={classes.social_links}>
          <BsFacebook />
          <BsLinkedin />
          <AiFillInstagram />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
