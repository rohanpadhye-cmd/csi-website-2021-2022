import React, { Component } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import "../assets/App.css";
import D15A from "../assets/AboutPage/Testimonials/D15A.png";
import D14 from "../assets/AboutPage/Testimonials/D14.png";
import D15B from "../assets/AboutPage/Testimonials/D15B.png";
import D12C from "../assets/AboutPage/Testimonials/D12C.png";
import D12A from "../assets/AboutPage/Testimonials/D12A.png";
import D12B from "../assets/AboutPage/Testimonials/D12B.png";
export default class Testimonials extends Component {
  render() {
    return (
      <>
        <div className="d-none d-lg-block">
          <Carousel
            showArrows={false}
            infiniteLoop={true}
            showThumbs={true}
            showStatus={false}
            autoPlay={true}
            interval={6100}
            data-aos="fade-left"
          >
            <div className="testimonialsBody">
              <img src={D12B} alt="Student1" />
              <div className="myCarousel">
                <h3 className="studentName darkFont">Prithviraj Chavan</h3>
                <h4 className="darkFont">-D12B</h4>
                <p className="testimonials-p darkFont" style={{ paddingTop: '20px' }}>
                  CSI has helped me discover many technical domains. All the events were great and I personally had lots of fun taking part in them. I thank all the CSI members who've helped me
                </p>
              </div>
            </div>

            <div className="testimonialsBody">
              <img src={D12A} alt="Student2" />
              <div className="myCarousel">
                <h3 className="studentName darkFont">Radhika Katiyara</h3>
                <h4 className="darkFont">-D12A</h4>
                <p className="testimonials-p darkFont">
                  CSI-VESIT workshops helped me a lot to improve my coding skills. All sessions were amazing and understandable which were useful in creating projects! I thank each and everyone of this council for conducting such great sessions in such a short span of time!
                </p>
              </div>
            </div>

            <div className="testimonialsBody">
              <img src={D15A} alt="Student3" />
              <div className="myCarousel">
                <h3 className="studentName darkFont">Anish Inamdar</h3>
                <h4 className="darkFont">-D15A</h4>
                <p className="testimonials-p darkFont">
                  Being a CSI member has been a fun experience! I got to learn a lot through the workshops and events. Must recommend to everyone who wants to have fun learning!
                </p>
              </div>
            </div>

            <div className="testimonialsBody">
              <img src={D14} alt="Student4" />
              <div className="myCarousel">
                <h3 className="studentName darkFont">Aayushi Mishra</h3>
                <h4 className="darkFont">-D14A</h4>
                <p className="testimonials-p darkFont">
                  CSI covered a lot of relevant and useful topics, which gave me an introduction to the topics, and helped me delve further into them. In particular, I liked the Github, Python and Bootstrap workshops.
                </p>
              </div>
            </div>

            <div className="testimonialsBody">
              <img src={D15B} alt="Student5" />
              <div className="myCarousel">
                <h3 className="studentName darkFont">Raghuttam Parvatikar</h3>
                <h4 className="darkFont">-D15B</h4>
                <p className="testimonials-p darkFont" style={{ paddingTop: '20px' }}>
                  CSI has introduced me to some important technical domains where it could've taken me months to discover it by myself. I'm grateful to each and every individual in the CSI council who has helped me.
                </p>
              </div>
            </div>

            <div className="testimonialsBody">
              <img src={D12C} alt="Student6" />
              <div className="myCarousel">
                <h3 className="studentName darkFont">Sneha Karthik</h3>
                <h4 className="darkFont">-D12C</h4>
                <p className="testimonials-p darkFont">
                  CSI vesit workshops definitely helped me hone my skills. There were a lot of concepts that I was able re learn at these short workshops as they taught everything that was beneficial. The instructors made sure that we learned the most in the shortest span of time .
                </p>
              </div>
            </div>
          </Carousel>
        </div>
        <div className="d-md-none">
          <Carousel
            showArrows={true}
            infiniteLoop={true}
            showThumbs={false}
            showStatus={false}
            autoPlay={true}
            interval={6100}
            data-aos="fade-left"
          >
            <div className="testimonialsBody">
              <img src={D12B} alt="Student1" />
              <div className="myCarousel">
                <h3 className="studentName darkFont">Prithviraj Chavan</h3>
                <h4 className="darkFont">-D12B</h4>
                <p className="testimonials-p darkFont" style={{ paddingTop: '20px' }}>
                  CSI has helped me discover many technical domains. All the events were great and I personally had lots of fun taking part in them. I thank all the CSI members who've helped me
                </p>
              </div>
            </div>

            <div className="testimonialsBody">
              <img src={D12A} alt="Student2" />
              <div className="myCarousel">
                <h3 className="studentName darkFont">Radhika Katiyara</h3>
                <h4 className="darkFont">-D12A</h4>
                <p className="testimonials-p darkFont">
                  CSI-VESIT workshops helped me a lot to improve my coding skills. All sessions were amazing and understandable which were useful in creating projects! I thank each and everyone of this council for conducting such great sessions in such a short span of time!
                </p>
              </div>
            </div>

            <div className="testimonialsBody">
              <img src={D15A} alt="Student3" />
              <div className="myCarousel">
                <h3 className="studentName darkFont">Anish Inamdar</h3>
                <h4 className="darkFont">-D15A</h4>
                <p className="testimonials-p darkFont">
                  Being a CSI member has been a fun experience! I got to learn a lot through the workshops and events. Must recommend to everyone who wants to have fun learning!
                </p>
              </div>
            </div>

            <div className="testimonialsBody">
              <img src={D14} alt="Student4" />
              <div className="myCarousel">
                <h3 className="studentName darkFont">Aayushi Mishra</h3>
                <h4 className="darkFont">-D14A</h4>
                <p className="testimonials-p darkFont">
                  CSI covered a lot of relevant and useful topics, which gave me an introduction to the topics, and helped me delve further into them. In particular, I liked the Github, Python and Bootstrap workshops.
                </p>
              </div>
            </div>

            <div className="testimonialsBody">
              <img src={D15B} alt="Student5" />
              <div className="myCarousel">
                <h3 className="studentName darkFont">Raghuttam Parvatikar</h3>
                <h4 className="darkFont">-D15B</h4>
                <p className="testimonials-p darkFont" style={{ paddingTop: '20px' }}>
                  CSI has introduced me to some important technical domains where it could've taken me months to discover it by myself. I'm grateful to each and every individual in the CSI council who has helped me.
                </p>
              </div>
            </div>

            <div className="testimonialsBody">
              <img src={D12C} alt="Student6" />
              <div className="myCarousel">
                <h3 className="studentName darkFont">Sneha Karthik</h3>
                <h4 className="darkFont">-D12C</h4>
                <p className="testimonials-p darkFont">
                  CSI vesit workshops definitely helped me hone my skills. There were a lot of concepts that I was able re learn at these short workshops as they taught everything that was beneficial. The instructors made sure that we learned the most in the shortest span of time .
                </p>
              </div>
            </div>
          </Carousel>
        </div>
      </>
    );
  }
}
