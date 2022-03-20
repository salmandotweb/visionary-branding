import React from "react";
import SectionLabel from "../../Components/SectionLabel/SectionLabel";
import { CarouselProvider, Slider, Slide } from "pure-react-carousel";
import "pure-react-carousel/dist/react-carousel.es.css";
import classes from "./Testimonial.module.css";
import Review from "../../Components/Review/Review";

const Testimonial = () => {
  return (
    <div className={`section ${classes.testimonial_section}`}>
      <SectionLabel
        tagline="Testimonial"
        title="What Our 
Customer's Say"
      />
      <div className={classes.section}>
        <img src="images/map.png" alt="" />
        <div className={classes.carousel}>
          <CarouselProvider
            naturalSlideWidth={100}
            naturalSlideHeight={70}
            totalSlides={3}
            isPlaying={true}
          >
            <Slider>
              <Slide index={0}>
                <Review />
              </Slide>
              <Slide index={1}>
                <Review />
              </Slide>
              <Slide index={2}>
                <Review />
              </Slide>
            </Slider>
          </CarouselProvider>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
