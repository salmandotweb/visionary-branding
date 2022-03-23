import React from "react";
import classes from "./Loader.module.css";

const Loader = () => {
  return (
    <div className={classes.loading_wrapper}>
      <div class={`${classes.loader} ${classes.loader2}`}></div>
    </div>
  );
};

export default Loader;
