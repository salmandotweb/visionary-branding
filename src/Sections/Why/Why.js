import React from "react";
import { AiFillStar } from "react-icons/ai";
import classes from "./Why.module.css";

const Why = () => {
  return (
    <section className={`section ${classes.why_section}`}>
      <div className={classes.left}>
        <img src="images/why-image.png" alt="" />
      </div>
      <div className={classes.right}>
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
      </div>
    </section>
  );
};

export default Why;
