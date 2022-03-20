import React from "react";
import SectionLabel from "../../Components/SectionLabel/SectionLabel";
import classes from "./Services.module.css";

const ServiceCard = ({ img, title, desc }) => {
  return (
    <div className={classes.service_card}>
      <img src={img} alt="" />
      <h3>{title}</h3>
      <p>{desc}</p>
    </div>
  );
};

const Services = () => {
  return (
    <section className={`section ${classes.service_section}`}>
      <div className={classes.left}>
        <SectionLabel tagline="Services" title="Our Capabilities" />
        <p className={classes.left_desc}>
          We will bring the breathe of our experience and industry knowledge to
          help you succeed
        </p>
        <div className={classes.left_img}>
          <img src="images/arrow.svg" alt="" />
        </div>
      </div>
      <div className={classes.right}>
        <ServiceCard
          img="images/shop.svg"
          title="Market Forcest"
          desc="Leverage agile framework to provide a robust high level synopsys
        overviews"
        />
        <ServiceCard
          img="images/cards.svg"
          title="Fund Raising"
          desc="Bring to the table survival strategies to ensure proactive domination"
        />
        <ServiceCard
          img="images/chart.svg"
          title="Cash Flow"
          desc="Grow the holistic world view of disruptive innovation workspace"
        />
      </div>
    </section>
  );
};

export default Services;
