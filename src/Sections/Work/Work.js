import React from "react";
import SectionLabel from "../../Components/SectionLabel/SectionLabel";
import WorkCard from "../../Components/WorkCard/WorkCard";
import classes from "./Work.module.css";

const Work = () => {
  return (
    <section className={`section ${classes.work_section}`}>
      <WorkCard img="images/work-1.png" caption="Cosmetic Forcest Marketing" />
      <WorkCard img="images/work-2.png" caption="Sales Analytic" />
      <WorkCard img="images/work-3.png" caption="Fashion Store Mobile Apps" />
      <WorkCard
        img="images/work-4.png"
        caption="Laura’s Clore Branding Identity"
      />
      <WorkCard img="images/work-5.png" caption="SEO Marketing 4.0" />
      <div className={classes.see_more}>
        <SectionLabel tagline="Projects" title="Selected Works from Us" />
        <button className={`btn ${classes.see_moreBtn}`}>See More</button>
      </div>
    </section>
  );
};

export default Work;
