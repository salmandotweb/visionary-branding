import React from "react";
import classes from "./Partners.module.css";

const Partners = () => {
  return (
    <section className={`section ${classes.img_container}`}>
      <img src="images/partner-1.png" alt="" />
      <img src="images/partner-2.png" alt="" />
      <img src="images/partner-3.png" alt="" />
      <img src="images/partner-4.png" alt="" />
    </section>
  );
};

export default Partners;
