import React, { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
import { useAnimation } from "framer-motion";
import { AiFillStar } from "react-icons/ai";
import classes from "./Why.module.css";

const Why = () => {
  const { ref, inView } = useInView({
    threshold: 0.2,
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
    <section className={`section ${classes.why_section}`}>
      <motion.div className={classes.left} ref={ref} animate={animation}>
        <img src="images/why-image.png" alt="" />
      </motion.div>
      <motion.div className={classes.right} ref={ref} animate={animation}>
        <p>Why Choose Us</p>
        <h1>Take on any Challenge of the Digital World</h1>
        <ul>
          <li>
            <AiFillStar />
            Corporate Financial Advisory
          </li>
          <li>
            <AiFillStar />
            Development of Financial Models
          </li>
          <li>
            <AiFillStar />
            Deal Structuring
          </li>
        </ul>
        <button className={`btn ${classes.startedBtn}`}>Get Started</button>
      </motion.div>
    </section>
  );
};

export default Why;
