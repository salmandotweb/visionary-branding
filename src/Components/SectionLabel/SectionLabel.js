import React from "react";
import classes from "./SectionLabel.module.css";

const SectionLabel = ({ tagline, title }) => {
  return (
    <div className={classes.section_label}>
      {tagline && <p>{tagline}</p>}
      {title && <h1>{title}</h1>}
    </div>
  );
};

export default SectionLabel;
