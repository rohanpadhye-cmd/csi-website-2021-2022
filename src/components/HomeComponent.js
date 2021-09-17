import { Container, Card, Button, Col, Row } from "react-bootstrap";
import { useState } from "react";
import VES from "../assets/back-img1.jpeg";
import CLG from "../assets/Jumbotron/clg.JPG"
import { Parallax } from "react-parallax";
import magazine_poster from "../assets/magazine_poster.JPG";
import poster from "../assets/poster.jpeg";
import { motion } from "framer-motion";
import Counter from "./Counter";
import "../assets/HomePage/HomeStyle.css";
import { OurTeam } from "./home/OurTeam";
// const containerVariant = {
//   hidden: {
//     opacity: 0,
//     x: '100vw',
//   },
//   visible: {
//     opacity: 1,
//     x: 0,
//     transition: {
//       type: 'tween',
//       duration: 1,
//     }
//   },
//   exit: {
//     x: '-100vw',
//     transition: {
//       type: 'tween',
//       duration: 1,
//     }
//   }
// }

const HomeComponent = () => {
  // const [showMembershipModal, setModal] = useState(false);
  // const [membershipTaken,setMembership]=useState(false);  //Handle the case when user will press the submit button in Membership form
  // const handleSubmit = () => {
  //   setMembership(true);
  // }
  // const handleClose = () =>
  // {
  //   setModal(false);
  //   setMembership(false);
  // }
  // const handleShow = () => setModal(true);

  // const [showWorkshopModal, setShowWorkshopModal] = useState(false);
  // const [isWorkshopSubmitted,setIsWorkshopSubmitted]=useState(false);
  // const [isCSIMember,setIsCSIMember]=useState('Yes');
  const [buttonText] = useState("Workshop");

  // const handleWorkshopSubmit = () => setIsWorkshopSubmitted(true);

  // const handleWorkshopClose = () => {
  //   setShowWorkshopModal(false);
  //   setIsWorkshopSubmitted(false);
  //   setIsCSIMember('Yes');
  // };

  // const handleshowWorkshopModal = () => setShowWorkshopModal(true);

  // const CSIMemberDropdown = (e) =>  setIsCSIMember(e.target.value);

  return (
    //       <motion.div className="home"
    //   variants={containerVariant}
    //   initial="hidden"
    //   animate="visible"
    //   exit="exit"
    // >
    <div>
      <Container
        fluid
        className="m-0 p-0"
        data-aos="fade-in"
        data-aos-duration="2000"
      >
        <Parallax bgImage={CLG} strength={500}>
          <div className="title-container">
            <motion.h1
              drag
              dragConstraints={{ left: 0, top: 0, right: 0, bottom: 0 }}
              dragElastic={0.7}
              dragTransition={{ bounceStiffness: 600, bounceDamping: 10 }}
              className="csi-vesit"
            >
              CSI-VESIT
            </motion.h1>
          </div>
        </Parallax>
      </Container>

      <Container fluid className="mt-5">
        <Row>
          <OurTeam />
        </Row>
      </Container>

      <Counter />

      <Container fluid className="mt-5">
        {/* Styled Card 2 Begins */}

        <div className="upcomingEvent-sec">
          <h1 data-aos="zoom-in" data-aos-duration="9000" className="heading ec-h1" >
            Upcoming Event
          </h1>
          <div className="upcomingEventContent about-content">
            <img src={poster} alt="" className />
            <div className="mx-auto mt-3 px-3 px-md-5 upcoming-event">
              <h3>About Event</h3>
              <p style={{ textAlign: "justify" }}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
              <h5 style={{ textAlign: "left" }}>
                <strong>
                  Date:22/07/2021
                  <br />
                  <br />
                  Time:11 am to 1 pm
                </strong>
              </h5>
            </div>
          </div>

          <div
            className="registration-buttons"
            data-aos="fade-down"
            data-aos-duration="6000"
          >
            <Row style={{ textAlign: "center" }}>
              <Col md={6} xs={12}>
                <a
                  target="_blank"
                  href="https://forms.gle/XcSa8k2d1zZyMwkZ7"
                  rel="noreferrer"
                >
                  <Button className="registration-button" size="lg">
                    Membership Form
                  </Button>
                </a>
              </Col>
              <Col md={6} xs={12}>
                <a
                  target="_blank"
                  href="https://forms.gle/2Y9Dc9QdEj7xMTGG9"
                  rel="noreferrer"
                >
                  <Button className="registration-button" size="lg">
                    Register for {buttonText}
                  </Button>
                </a>
              </Col>
            </Row>
          </div>
        </div>
        {/* Styled Card 2 Ends */}

        {/* Styled Card 3 Begins */}

      <div className="ourMag-Sec">

        <h1
          data-aos="zoom-in"
          data-aos-duration="6000"
          className="heading mt-5 ec-h1"
        >
          Our Magazine
        </h1>
          <Row className="m-0" style={{ padding: "0 5%" }}>
            <Col lg={5} md={12}>
            <div
              className="magazine"
              style={{ width: "0px" }}
              data-aos="fade-down"
              data-aos-duration="6000"
            >

              {/* CARD  */}
              <div className="card">
                <div className="face face1">
                  <div className="content">
                    <h3>Redux - Tomorrowland</h3>
                    <p className="mb-0">
                      An insight into a vastly developed technological world
                      with some of our bright minds highlighting their point of
                      views in ways like never before.{" "}
                    </p>
                    <a
                      href="https://redux-magazines.vercel.app/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      View our magazine
                    </a>
                  </div>
                </div>
                <div className="face face2">
                  <img alt="magazine's poster" src={magazine_poster} />
                </div>
              </div>
            </div>
          </Col>
          <Col
            lg={7}
            md={12}
            style={{ textAlign: "left", fontSize: "1.5rem", margin: "auto 0" }}
          >
            <div className="magazine-text">
              How would it be to refine one's proficiency and live through the
              CSI-VESIT events held?
              <br />
              That would be pretty epic, right?
              <br />
              <br />
              Well, this is entirely possible, thanks to our annual magazine
              REDUX. For us REDUX is our goal of diversifying knowledge, present
              it innovatively. REDUX includes glimpse events and workshops held
              throughout the year, brilliant and intellectual articles and about
              our CSI council.
              <br />
              <br />
              Sound good? Let’s get to it.
            </div>
          </Col>
        </Row>
        </div>

        {/* Styled Card 3 Ends */}
      </Container>
    </div>
  );
};

export default HomeComponent;
