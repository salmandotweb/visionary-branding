import React, { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
import { useAnimation } from "framer-motion";
import classes from "./Partners.module.css";

const Partners = () => {
  const { ref, inView } = useInView({
    threshold: 0.2,
  });
  const animation = useAnimation();
  useEffect(() => {
    if (inView) {
      animation.start({
        scale: 1,
        transition: {
          duration: 0.6,
        },
      });
    }
    if (!inView) {
      animation.start({ scale: 0 });
    }
  }, [inView]);
  return (
    <section className={`section ${classes.img_container}`}>
      <motion.div className={classes.left} ref={ref} animate={animation}>
        <img src="images/partner-1.png" alt="" />
      </motion.div>
      <motion.div className={classes.left} ref={ref} animate={animation}>
        <img src="images/partner-2.png" alt="" />
      </motion.div>
      <motion.div className={classes.left} ref={ref} animate={animation}>
        <img src="images/partner-3.png" alt="" />
      </motion.div>
      <motion.div className={classes.left} ref={ref} animate={animation}>
        <img src="images/partner-4.png" alt="" />
      </motion.div>
    </section>
  );
};

export default Partners;
