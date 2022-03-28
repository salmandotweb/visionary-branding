import React from "react";
import Navbar from "../../Components/Navbar/Navbar";
import classes from "./Home.module.css";
import { BiBadgeCheck } from "react-icons/bi";
import { AiFillPlayCircle, AiFillStar } from "react-icons/ai";
import { motion } from "framer-motion";

const Home = () => {
  return (
    <section className={`home_section ${classes.home}`}>
      <Navbar />
      <motion.div
        className={classes.content}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.7 }}
      >
        <div className={classes.left}>
          <div className={classes.award}>
            <BiBadgeCheck />
            <p>Best Business Platform - World Record 2021</p>
          </div>
          <h1 className={classes.heading}>
            Reach Your <span>Business</span> Goals in Record Time
          </h1>
          <p className={classes.subHeading}>
            Support small business and join the nationwide movement to encourage
            commercial support for the millions of minority owned businesses
            helping world economy.
          </p>
          <div className={classes.btnContainer}>
            <button className={`btn ${classes.startedBtn}`}>Get Started</button>
            <button className={`btn ${classes.videoBtn}`}>
              <AiFillPlayCircle />
              Watch Video
            </button>
          </div>
        </div>
        <div className={classes.right}>
          <img src="images/home-image.png" alt="" />
          <div className={classes.review_box}>
            <div className={classes.number}>
              <p>4.9</p>
              <div className={classes.stars}>
                <AiFillStar />
                <AiFillStar />
                <AiFillStar />
                <AiFillStar />
                <AiFillStar />
              </div>
            </div>
            <div className={classes.people}>
              <div className={classes.circle}>
                <img src="images/circle-1.png" alt="" />
              </div>
              <div className={classes.circle}>
                <img src="images/circle-2.png" alt="" />
              </div>
              <div className={classes.circle}>
                <img src="images/circle-3.png" alt="" />
              </div>
              <div className={classes.circle}>
                <img src="images/circle-4.png" alt="" />
              </div>
              <div className={classes.circle}>5k</div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Home;
