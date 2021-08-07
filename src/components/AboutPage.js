import React from "react";
import Testimonials from "./Testimonials";
import "../assets/AboutPage/AboutStyle.css";
import img1 from '../assets/AboutPage/vivekananda.png'
import { CardDeck, Card, Container } from "react-bootstrap";
import knowledge from "../assets/Knowledge.jpg";
import skill from "../assets/Skill.jpg";
import workshop from "../assets/Workshop.jpg";

const AboutPage = () => {
  return (
    
    <div className='aboutpage'>
      <div className="white-container">
        <div className="about-section">
          <div className="about-content dark-container shadow ">
            <div className="about-text">
            <h1 className="about-heading heading">ABOUT CSI</h1>
            <p className="about-p content-p">
              Computer Society of India was established in the year 1965 is
              today the largest IT professionals society in India. Keeping in
              mind the interest of IT professionals & computer users, CSI
              works towards, making the profession an area of choice among all
              sections of the society. The basic purpose of CSI is to promote
              IT as a profession. To fulfil this objective, CSI regularly
              organizes conferences, conventions, lectures and gives various
              awards.vehicula in lacus. Donec ac placerat sem, ac blandit
              tortor. Nam et sem non lorem consectetur elementum. Sed placerat
              pellentesque ex ut dictum. Pellentesque posuere accumsan felis
              et dapibus.
            </p>
            </div>
            <img src={img1} alt="" className='about-img'/>
          </div>
        </div>

        <div className="ourMission-section">

        
            <div className="ourMission-content dark-container shadow">
              <h1 className="about-heading heading">OUR MISSION</h1>
              <p className="ourMission-content-p">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
            libero mauris, iaculis quis ultrices quis,
            vehicula in lacus. Donec ac placerat sem, ac blandit tortor. Nam et
            sem non lorem consectetur elementum.
            Sed placerat pellentesque ex ut dictum. Pellentesque posuere
            accumsan felis et dapibus.
              </p>
            
          <div className="card-Deck">     
        <CardDeck data-aos="fade-up" data-aos-easing="linear" data-aos-duration="1500">
          {/* <motion.div
            initial={{ x: "100vw" }}
            animate={{ x: 0 }}
            transition={{ duration: 2, delay: 1.5 }}
          > */}
          <div>
            <Card
              style={{
                // backgroundColor: "darkslategrey",
             
              }}
              className="ourMissionCard"
            >
              <Card.Img variant="top" src={knowledge} />
              <Card.Body style={{ color: "white" }}>
                <Card.Title>Knowledge</Card.Title>
                <Card.Text>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </Card.Text>
              </Card.Body>
            </Card>
          </div>
          {/* </motion.div>
          <motion.div
            initial={{ x: "100vw" }}
            animate={{ x: 0 }}
            transition={{ duration: 2, delay: 1.7 }}
          > */}
          <div>
            <Card
              style={{
                // backgroundColor: "darkslategrey",
             
              }}
              className="ourMissionCard"
            >
              <Card.Img variant="top" src={skill} />
              <Card.Body style={{ color: "white" }}>
                <Card.Title>Technical Skills</Card.Title>
                <Card.Text>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </Card.Text>
              </Card.Body>
            </Card>
            </div>
          {/* </motion.div>
          <motion.div
            initial={{ x: "100vw" }}
            animate={{ x: 0 }}
            transition={{ duration: 2, delay: 2 }}
          > */}
          <div>
            <Card
              style={{
                // backgroundColor: "darkslategrey",
              
              }}
              className="ourMissionCard"
            >
              <Card.Img variant="top" src={workshop} />
              <Card.Body style={{ color: "white" }}>
                <Card.Title>Certified Workshops</Card.Title>
                <Card.Text>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </Card.Text>
              </Card.Body>
            </Card>
          </div> 
          {/* </motion.div> */}
        </CardDeck>
        </div>   

        </div>
        </div>
        <div className="testimonials-section">
        <div className='testimonials-C  dark-container shadow'>
            <h1 className="testimonials-h heading"
            >TESTIMONIALS</h1>
            <Testimonials />
        </div>
        </div>
        
  
        </div>
        </div>

       
  );
};

export default AboutPage;
