import { CardDeck, Card, Container } from "react-bootstrap";
import knowledge from "../assets/Knowledge.jpg";
import skill from "../assets/Skill.jpg";
import workshop from "../assets/Workshop.jpg";
import Testimonials from "./Testimonials";
import '../assets/App.css'

// const containerVariant = {
//   hidden: {
//     opacity: 0,
//     x: "100vw",
//   },
//   visible: {
//     opacity: 1,
//     x: 0,
//     transition: {
//       type: "tween",
//       duration: 1,
//     },
//   },
//   exit: {
//     x: "-100vw",
//     transition: {
//       type: "tween",
//       duration: 1,
//       when: "beforeChildren",
//     },
//   },
// };

const AboutComponent = () => {
  return (
    // <motion.div
    //   variants={containerVariant}
    //   initial="hidden"
    //   animate="visible"
    //   exit="exit"
      
    // >
    <div className=''>
      <Container className="mt-4">
        <div className="about-mission text-center" data-aos="fade-left" data-aos-duration="1000">
            
          {/* <motion.h2
            initial={{ y: "100vw" }}
            animate={{ y: 0 }}
            transition={{ duration: 2 }}
            style={{
              paddingTop: "10px",
              paddingBottom: "25px",
              textDecoration: "underline",
              fontWeight: "bold",
            }}
          > */}
            <h2 style={{
              paddingTop: "10px",
              paddingBottom: "25px",
              textDecoration: "underline",
              fontWeight: "bold",
            }}>
            ABOUT CSI
          </h2>
          {/* </motion.h2> */}

          {/* <motion.p
            initial={{ y: "100vw" }}
            animate={{ y: 0 }}
            transition={{ duration: 2 }}
            style={{ textAlign: "center" }}
            
          > */}
          <p className="aboutCSI">
            Computer Society of India was established in the year 1965 is today
            the largest IT professionals society in India. Keeping in mind the
            interest of IT professionals & computer users, CSI works towards,
            making the profession an area of choice among all sections of the
            society. The basic purpose of CSI is to promote IT as a profession.
            To fulfil this objective, CSI regularly organizes conferences,
            conventions, lectures and gives various awards.
            </p>
        </div>
        {/* <motion.div
          initial={{ y: "100vw" }}
          animate={{ y: 0 }}
          transition={{ duration: 2, delay: 0.5 }}
          className="about-mission text-center"
        > */}
        <div className="about-mission" data-aos="fade-right" data-aos-duration="1000">
          <h2
            style={{
              paddingBottom: "25px",
              marginTop: "55px",
              textDecoration: "underline",
              fontWeight: "bold",
            }}
          >
            OUR MISSION
          </h2>
          <p className="aboutCSI">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
            libero mauris, iaculis quis ultrices quis,
            
            vehicula in lacus. Donec ac placerat sem, ac blandit tortor. Nam et
            sem non lorem consectetur elementum.
            Sed placerat pellentesque ex ut dictum. Pellentesque posuere
            accumsan felis et dapibus.
          </p>
        </div>
        {/* </motion.div> */}
            
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
                margin: "40px",
                textAlign: "center",
                width: "290px",
                height: "310px",
                float: "left",
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
                margin: "40px",
                textAlign: "center",
                width: "290px",
                height: "310px",
                float: "left",
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
                margin: "40px",
                textAlign: "center",
                width: "290px",
                height: "310px",
                float: "left",
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
        {/* <motion.div
          initial={{ x: "-100vw" }}
          animate={{ x: 0 }}
          transition={{ duration: 2, delay: 5 }}
          className="about-mission text-center"
          style={{ paddingBottom: "35px" }}
        > */}
        <div className="about-mission text-center" data-aos="zoom-in" data-aos-easing="ease-in" data-aos-duration="1500">
          <h2
            style={{
              paddingTop: "70px",
              paddingBottom: "25px",
              textDecoration: "underline",
              fontWeight: "bold",
            }}

          >
            TESTIMONIALS
          </h2>
          <Testimonials className="testimonials"/>          
        </div>
        {/* </motion.div> */}
      </Container>
    {/* </motion.div> */}
      </div>
  );
};

export default AboutComponent;
