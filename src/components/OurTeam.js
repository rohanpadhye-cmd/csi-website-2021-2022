import React from "react";
import BE from "../assets/HomePage/BE.jpg";
import SE from "../assets/HomePage/SE.jpg";
import TE from "../assets/HomePage/TE.jpg";
import "../assets/HomePage/HomeStyle.css";
import { Carousel } from "react-bootstrap";
const OurTeam = () => {
  return (
    <div>
      <div className="council-pic-info-sec" style={{overflowX: "hidden"}} data-aos="slide-up" data-aos-duration="6000">
        <div className="council-pic-info shadow">
          {/* <img src={TE} alt="" className="council-img" /> */}
        
        <Carousel className='HomePageCarousel' indicators={false}>
            <Carousel.Item>
                <img src={BE} alt="" />
            </Carousel.Item>
            <Carousel.Item>
                <img src={TE} alt="" />
            </Carousel.Item>
            <Carousel.Item>
                <img src={SE} alt="" />
            </Carousel.Item>
        </Carousel>


          <div className="council-pic-info-txt">
            <h1>Our Team</h1>
            <p>
              Whether it comes to conducting events and workshops or guiding our
              fellow peers to attain the best of our given knowledge, we at
              CSI-VESIT have always been dedicated to work for the better good
              of the society and always will continue to do so as a family. Our
              council is handpicked from a group of intellectual minds and has
              always been contributing significantly in various technical and
              non technical fields for the betterment of our society.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurTeam;
