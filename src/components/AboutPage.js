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

    <div className="ourMission-section" data-aos="fade-up" data-aos-easing="linear" data-aos-duration="800">
      <div className="ourMission-content shadow">
        <h1 className="heading">OUR MISSION</h1>
        <p className="ourMission-content-p">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
        libero mauris, iaculis quis ultrices quis,
        vehicula in lacus. Donec ac placerat sem, ac blandit tortor. Nam et
        sem non lorem consectetur elementum.
        Sed placerat pellentesque ex ut dictum. Pellentesque posuere
        accumsan felis et dapibus.
        </p>
        <div className="card-Deck d-none d-md-block">
          <CardDeck>
            <div data-aos="fade-right" data-aos-easing="linear" data-aos-duration="1500">
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
            <div className="px-5 mx-1" data-aos="fade-in" data-aos-easing="linear" data-aos-duration="1500">
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
            <div data-aos="fade-left" data-aos-easing="linear" data-aos-duration="1500">
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
