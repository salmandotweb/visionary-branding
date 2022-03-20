import React from "react";
import { RiDoubleQuotesL } from "react-icons/ri";
import classes from "./Review.module.css";

const Review = () => {
  return (
    <div className={classes.review}>
      <RiDoubleQuotesL className={classes.icon} />
      <p>
        I really like the team for example, a relationship-focused performance
        expectation might be that the employee sustain collegial working
        relationships with her peers, subordinates and customers.
      </p>
      <div className={classes.person}>
        <div className={classes.person_img}>
          <img src="images/person.png" alt="" />
        </div>
        <p>Gloria Jessica</p>
      </div>
    </div>
  );
};

export default Review;
