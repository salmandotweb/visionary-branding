import React from "react";
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
    </footer>
  );
};

export default Footer;
