import React from "react";
import SectionLabel from "../../Components/SectionLabel/SectionLabel";
import classes from "./Contact.module.css";

const Contact = () => {
  return (
    <section className={`section ${classes.contact_us}`}>
      <div className={classes.left}>
        <img src="images/contact-image.png" alt="" />
      </div>
      <div className={classes.right}>
        <SectionLabel tagline="Contact Us" title="Let’s Collaborate Now!" />
      </div>
    </section>
  );
};

export default Contact;
