import {CardDeck, Card, Container, Carousel} from 'react-bootstrap'
import knowledge from '../assets/Knowledge.jpg';
import skill from '../assets/Skill.jpg';
import workshop from '../assets/Workshop.jpg';
import dummy from '../assets/dummy.png'

const AboutComponent = () => {
    return (
        <div>
            <Container>
            <div className="about-mission text-center">
                <h2 style={{paddingBottom: "25px", textDecoration: "underline", fontWeight: "bold"}}>Our Mission</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus libero mauris, iaculis quis ultrices quis,<br />
                vehicula in lacus. Donec ac placerat sem, ac blandit tortor. Nam et sem non lorem consectetur elementum. <br />
                Sed placerat pellentesque ex ut dictum. Pellentesque posuere accumsan felis et dapibus.</p>
            </div>
                <CardDeck>
                    <Card style={{backgroundColor: "darkslategrey", margin: "40px"}}>
                        <Card.Img variant="top" src={knowledge} />
                        <Card.Body>
                        <Card.Title>Knowledge</Card.Title>
                        <Card.Text>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        </Card.Text>
                        </Card.Body>
                    </Card>
                    <Card style={{backgroundColor: "darkslategrey", margin: "40px"}}>
                        <Card.Img variant="top" src={skill} />
                        <Card.Body>
                        <Card.Title>Technical Skills</Card.Title>
                        <Card.Text>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        </Card.Text>
                        </Card.Body>
                    </Card>
                    <Card style={{backgroundColor: "darkslategrey", margin: "40px"}}>
                        <Card.Img variant="top" src={workshop} />
                        <Card.Body>
                        <Card.Title>Certified Workshops</Card.Title>
                        <Card.Text>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        </Card.Text>
                        </Card.Body>
                    </Card>
                </CardDeck>
            <div className="about-mission text-center">
            <h2 style={{paddingTop: "70px", paddingBottom: "25px", textDecoration: "underline", fontWeight: "bold"}}>What is CSI?</h2>
            <ul style={{ justifyContent: "center"}}>
                <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent vel ex porttitor, auctor dolor eu,</li>
                <li>volutpat magna. Aliquam fermentum pulvinar enim sit amet pretium. Curabitur ut lectus sed tortor elementum</li>
                <li>sodales. Pellentesque porttitor faucibus libero, nec lobortis sem finibus et. Sed congue ipsum ut tempor</li>
                <li>consequat. Cras facilisis ultricies risus, et tincidunt diam tempor tempus. Suspendisse ut ante orci.</li>
                <li>Vivamus aliquet, libero non viverra sodales, urna nisi auctor est, at pulvinar arcu ex eu enim. Quisque</li>
                <li>id libero bibendum, hendrerit nulla sit amet, lacinia neque.</li>
            </ul>
            </div>
            <div className="about-testimonials text-center" style={{paddingBottom: "35px"}}>
            <h2 style={{paddingTop: "70px", paddingBottom: "25px", textDecoration: "underline", fontWeight: "bold"}}>Testimonials</h2>
            <Carousel indicators={false} style={{height: "250px", weight: "60%"}}>
                <Carousel.Item style={{paddingTop: "50px"}}>
                    <h4 style={{paddingBottom: "10px"}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit.Nulla vitae elit libero, a pharetra augue mollis interdum.</h4>
                    <img src={dummy} alt="dummy"/>
                    <p>Blah blah name - div</p>
                </Carousel.Item>
                
                <Carousel.Item style={{paddingTop: "50px"}}>
                    <h4 style={{paddingBottom: "10px"}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit.Nulla vitae elit libero, a pharetra augue mollis interdum.</h4>
                    <img src={dummy} alt="dummy"/>
                    <p>Blah blah name - div</p>
                </Carousel.Item>

                <Carousel.Item style={{paddingTop: "50px"}}>
                    <h4 style={{paddingBottom: "10px"}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit.Nulla vitae elit libero, a pharetra augue mollis interdum.</h4>
                    <img src={dummy} alt="dummy"/>
                    <p>Blah blah name - div</p>
                </Carousel.Item>

                <Carousel.Item style={{paddingTop: "50px"}}>
                    <h4 style={{paddingTop: "30px", paddingBottom: "10px"}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit.Nulla vitae elit libero, a pharetra augue mollis interdum.</h4>
                    <img src={dummy} alt="dummy"/>
                    <p>Blah blah name - div</p>
                </Carousel.Item>

            </Carousel>
            </div>
            </Container>
        </div>
    );
}
 
export default AboutComponent;