import React, { Component } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import "../assets/App.css"
export default class Testimonials extends Component {
  render() {
    return (
      <Carousel
        showArrows={true}
        infiniteLoop={true}
        showThumbs={false}
        showStatus={false}
        autoPlay={true}
        interval={6100}
        
      >
        <div className="testimonialsBody">
          <img src="https://events.powercommunity.com/wp-content/uploads/2020/07/profile-placeholder.jpg" />
          <div className="myCarousel">
            <h3 className="studentName darkFont">Student One</h3>
            <h4 className="darkFont">-D10B</h4>
            <p className="testimonials-p darkFont">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.
            </p>
          </div>
        </div>

        <div className="testimonialsBody" >
          <img src="https://events.powercommunity.com/wp-content/uploads/2020/07/profile-placeholder.jpg" />
          <div className="myCarousel">
            <h3 className="studentName darkFont">Student Two</h3>
            <h4 className="darkFont">-D15B</h4>
            <p className="testimonials-p darkFont">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
        </div>

        <div className="testimonialsBody">
          <img src="https://events.powercommunity.com/wp-content/uploads/2020/07/profile-placeholder.jpg" />
          <div className="myCarousel">
            <h3 className="studentName darkFont">Student Three</h3>
            <h4 className='darkFont'>-D20B</h4>
            <p className="testimonials-p darkFont">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.
            </p>
          </div>
        </div>
      </Carousel>
    );
  }
}
