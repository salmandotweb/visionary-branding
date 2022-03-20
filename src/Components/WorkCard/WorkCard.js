import React from "react";
import classes from "./WorkCard.module.css";

const WorkCard = ({ img, caption }) => {
  return (
    <div className={classes.work_card}>
      <div className={classes.img_container}>
        <img src={img} alt="" />
      </div>
      <p>{caption}</p>
    </div>
  );
};

export default WorkCard;
