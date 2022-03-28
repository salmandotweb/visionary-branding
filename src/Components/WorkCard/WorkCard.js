import React, { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
import { useAnimation } from "framer-motion";
import classes from "./WorkCard.module.css";

const WorkCard = ({ img, caption }) => {
  const { ref, inView } = useInView({
    threshold: 0.2,
  });
  const animation = useAnimation();
  useEffect(() => {
    if (inView) {
      animation.start({
        scale: 1,
        transition: {
          duration: 1,
          type: "spring",
        },
      });
    }
    if (!inView) {
      animation.start({ scale: 0 });
    }
  }, [inView]);
  return (
    <motion.div className={classes.work_card} ref={ref} animate={animation}>
      <div className={classes.img_container}>
        <img src={img} alt="" />
      </div>
      <p>{caption}</p>
    </motion.div>
  );
};

export default WorkCard;
