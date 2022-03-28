import React, { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
import { useAnimation } from "framer-motion";
import SectionLabel from "../../Components/SectionLabel/SectionLabel";
import DatePicker from "react-datepicker";
import classes from "./Contact.module.css";
import "react-datepicker/dist/react-datepicker.css";

const Contact = () => {
  const [startDate, setStartDate] = useState(new Date());
  const { ref, inView } = useInView({
    threshold: 0,
  });
  const animation = useAnimation();
  useEffect(() => {
    if (inView) {
      animation.start({
        opacity: 1,
        transition: {
          duration: 0.8,
        },
      });
    }
    if (!inView) {
      animation.start({ opacity: 0 });
    }
  }, [inView]);
  return (
    <section className={`section ${classes.contact_us}`}>
      <motion.div className={classes.left} ref={ref} animate={animation}>
        <img src="images/contact-image.png" alt="" />
      </motion.div>
      <form type="submit" className={classes.right}>
        <SectionLabel tagline="Contact Us" title="Let’s Collaborate Now!" />
        <div className={classes.name}>
          <label htmlFor="name">Full Name</label>
          <input id="name" type="text" placeholder="Input Your Name" required />
        </div>
        <div className={classes.container}>
          <div className={classes.email}>
            <label htmlFor="email">Email</label>
            <input
              id="email"
              type="email"
              placeholder="Input Your Email"
              required
            />
          </div>
          <div>
            <label htmlFor="date">Date</label>
            <DatePicker
              closeOnScroll={(e) => e.target === document}
              selected={startDate}
              onChange={(date) => setStartDate(date)}
            />
          </div>
        </div>
        <div className={classes.message}>
          <label htmlFor="message">Message</label>
          <textarea
            rows="10"
            id="message"
            placeholder="Write Message..."
            required
          />
        </div>
        <button className={`btn ${classes.sendBtn}`}>Send Message</button>
      </form>
    </section>
  );
};

// Handle Inputs Remaining

export default Contact;
