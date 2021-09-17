import Testimonials from "./Testimonials";
import "../assets/AboutPage/AboutStyle.css";
import img1 from '../assets/AboutPage/vivekananda.png'
import { CardDeck, Card } from "react-bootstrap";
import knowledge from "../assets/Knowledge.jpg";
import skill from "../assets/Skill.jpg";
import workshop from "../assets/Workshop.jpg";

const AboutPage = () => (
<div className='aboutpage' data-aos="fade-down" data-aos-easing="linear" data-aos-duration="800">
  
  <div className="px-md-5 py-md-5 mx-3">

    
    <div className="about-section">
      <div className="about-content shadow">
        <div className="about-text">
        <h1 className="heading ml-3 ml-md-0">ABOUT CSI-VESIT</h1>
        <p className="about-p content-p">
          We believe there is a better way for competence development. A more valuable, less monotonous way,  exciting as well as beneficial to the students of our college. Our Council is an amalgamation of various people who collectively work to create, host events and competitions to test the mettle of the participants in various fields. From boosting technical knowledge through Hackathons, to checking management skills and general knowledge of our participants through events like Business Quiz and Cricomania! We conduct a galore of technical workshops for technologies including but not limited to - Git &amp; GitHub, Python, Android App Development, Machine Learning, PHP &amp; Laravel, etc - for the betterment of the students.
        </p>
        </div>
        <img src={img1} alt="" className='about-img'/>
      </div>
    </div>

    <div className="ourMission-section" data-aos="fade-up" data-aos-easing="linear" data-aos-duration="800">
      <div className="ourMission-content shadow">
        <h1 className="heading">OUR MISSION</h1>
        <p className="ourMission-content-p">
          Diversifying knowledge in technical and non-technical domains.<br />Building a brigther future with competent, innovative minds, isn't a distant goal anymore. <br />It's just the beginning at CSI - VESIT....
        </p>
        <div className="card-Deck d-none d-md-block">
          <CardDeck>
            <div data-aos="fade-right" data-aos-easing="linear" data-aos-duration="1500">
              <Card className="ourMissionCard" >
                <Card.Img variant="top" src={knowledge} />
                <Card.Body style={{ color: "white" }}>
                  <Card.Title>Enthralling Events</Card.Title>
                  <Card.Text>
                    Engage in exciting events, form connections, and even win prizes while your at it!
                  </Card.Text>
                </Card.Body>
              </Card>
            </div>
            <div className="px-5 mx-1" data-aos="fade-in" data-aos-easing="linear" data-aos-duration="1500">
              <Card className="ourMissionCard" >
                <Card.Img variant="top" src={skill} />
                <Card.Body style={{ color: "white" }}>
                  <Card.Title>Technical &amp; Soft Skills</Card.Title>
                  <Card.Text>
                    Enhancing essential skills for employability, as well as growth as an individual.
                  </Card.Text>
                </Card.Body>
              </Card>
            </div>
            <div data-aos="fade-left" data-aos-easing="linear" data-aos-duration="1500">
              <Card className="ourMissionCard">
                <Card.Img variant="top" src={workshop} />
                <Card.Body style={{ color: "white" }}>
                  <Card.Title>Certified Workshops</Card.Title>
                  <Card.Text>
                    Skilled facilitators. Modern workshops. Certificates. We've got them all!
                  </Card.Text>
                </Card.Body>
              </Card>
            </div>
          </CardDeck>
        </div>
        <div className="card-Deck d-block d-md-none">
          <CardDeck>
            <div className="px-5 mx-1" data-aos="fade-right">
              <Card className="ourMissionCard" >
                <Card.Img variant="top" src={knowledge} />
                <Card.Body style={{ color: "white" }}>
                  <Card.Title>Knowledge</Card.Title>
                  <Card.Text>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </Card.Text>
                </Card.Body>
              </Card>
            </div>
            <div className="px-5 mx-1" data-aos="fade-in">
              <Card className="ourMissionCard" >
                <Card.Img variant="top" src={skill} />
                <Card.Body style={{ color: "white" }}>
                  <Card.Title>Technical Skills</Card.Title>
                  <Card.Text>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </Card.Text>
                </Card.Body>
              </Card>
            </div>
            <div className="px-5 mx-1" data-aos="fade-left">
              <Card className="ourMissionCard">
                <Card.Img variant="top" src={workshop} />
                <Card.Body style={{ color: "white" }}>
                  <Card.Title>Certified Workshops</Card.Title>
                  <Card.Text>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </Card.Text>
                </Card.Body>
              </Card>
            </div>
          </CardDeck>
        </div>
      </div>
    </div>

    <div className="testimonials-section" data-aos="fade-up" data-aos-easing="linear" data-aos-duration="1000">
      <div className='testimonials-content  shadow'>
        <h1 className="heading">TESTIMONIALS</h1>
        <Testimonials className="testimonials" />
      </div>
    </div>
  </div>
</div>
);

export default AboutPage;
