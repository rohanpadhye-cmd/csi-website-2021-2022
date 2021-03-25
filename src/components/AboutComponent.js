import {CardDeck, Card, Container, Carousel} from 'react-bootstrap'
import knowledge from '../assets/Knowledge.jpg';
import skill from '../assets/Skill.jpg';
import workshop from '../assets/Workshop.jpg';
import dummy from '../assets/dummy.png'
import { motion } from 'framer-motion'

const containerVariant = {
    hidden: {
      opacity: 0,
      x: '100vw',
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        type: 'tween',
        duration: 1,
      }
    },
    exit: {
      x: '-100vw',
      transition: {
        type: 'tween',
        duration: 1,
        when:"beforeChildren"
      }
    }
  }

const AboutComponent = () => {
    return (
        <motion.div 
            variants={containerVariant} 
            initial="hidden" 
            animate="visible"
            exit="exit"
        >
            <Container>
            <div className="about-mission text-center">
            <motion.h2 
                initial={{y: "100vw"}}
                animate={{y: 0}}
                transition={{duration: 2}}
            style={{paddingTop: "10px", paddingBottom: "25px", textDecoration: "underline", fontWeight: "bold"}}>What is CSI?</motion.h2>
            
            <motion.ul
            initial={{y: "100vw"}}
            animate={{y: 0}}
            transition={{duration: 2}}
            style={{ textAlign: "left", paddingLeft: "17%" }}>
                <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent vel ex porttitor, auctor dolor eu,</li>
                <li>volutpat magna. Aliquam fermentum pulvinar enim sit amet pretium. Curabitur ut lectus sed tortor elementum</li>
                <li>sodales. Pellentesque porttitor faucibus libero, nec lobortis sem finibus et. Sed congue ipsum ut tempor</li>
                <li>consequat. Cras facilisis ultricies risus, et tincidunt diam tempor tempus. Suspendisse ut ante </li>
            </motion.ul>
            </div>
            <motion.div
            initial={{y: "100vw"}}
            animate={{y: 0}}
            transition={{duration: 2, delay: 0.5}}
             className="about-mission text-center">
                <h2 style={{paddingBottom: "25px", marginTop: "55px", textDecoration: "underline", fontWeight: "bold"}}>Our Mission</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus libero mauris, iaculis quis ultrices quis,<br />
                vehicula in lacus. Donec ac placerat sem, ac blandit tortor. Nam et sem non lorem consectetur elementum. <br />
                Sed placerat pellentesque ex ut dictum. Pellentesque posuere accumsan felis et dapibus.</p>
            </motion.div>
                
                <CardDeck>
                <motion.div
                    initial={{x: "100vw"}}
                    animate={{x: 0}}
                    transition={{duration: 2, delay: 1.5}}>
                    <Card style={{backgroundColor: "darkslategrey", margin: "40px", textAlign: 'center', width: '290px', height: '310px', float: 'left'}}>
                        <Card.Img variant="top" src={knowledge}/>
                        <Card.Body style={{color: "white"}}>
                        <Card.Title>Knowledge</Card.Title>
                        <Card.Text>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        </Card.Text>
                        </Card.Body>
                    </Card>
                    </motion.div>
                    <motion.div
                        initial={{x: "100vw"}}
                        animate={{x: 0}}
                        transition={{duration: 2, delay: 1.7}}>
                    <Card style={{backgroundColor: "darkslategrey", margin: "40px", textAlign: 'center', width: '290px', height: '310px', float: 'left'}}>
                        <Card.Img variant="top" src={skill} />
                        <Card.Body style={{color: "white"}}>
                        <Card.Title>Technical Skills</Card.Title>
                        <Card.Text>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        </Card.Text>
                        </Card.Body>
                    </Card>
                    </motion.div>
                    <motion.div
                        initial={{x: "100vw"}}
                        animate={{x: 0}}
                        transition={{duration: 2, delay: 2}}>
                    <Card style={{backgroundColor: "darkslategrey", margin: "40px", textAlign: 'center', width: '290px', height: '310px', float: 'left'}}>
                        <Card.Img variant="top" src={workshop} />
                        <Card.Body style={{color: "white"}}>
                        <Card.Title>Certified Workshops</Card.Title>
                        <Card.Text>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        </Card.Text>
                        </Card.Body>
                    </Card>
                    </motion.div>
                </CardDeck>
            <motion.div 
            initial={{x: "-100vw"}}
            animate={{x: 0}}
            transition={{duration: 2, delay: 5}}
            className="about-testimonials text-center" style={{paddingBottom: "35px"}}>
            <h2 style={{paddingTop: "70px", paddingBottom: "25px", textDecoration: "underline", fontWeight: "bold"}}>Testimonials</h2>
            <Carousel indicators={false} style={{height: "250px", weight: "60%"}}>
                <Carousel.Item style={{paddingTop: "50px"}}>
                    <p style={{paddingBottom: "10px"}}>1.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    <img src={dummy} alt="dummy"/>
                    <p>Blah blah name - div</p>
                </Carousel.Item>
                
                <Carousel.Item style={{paddingTop: "50px"}}>
                    <p style={{paddingBottom: "10px"}}>2.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    <img src={dummy} alt="dummy"/>
                    <p>Blah blah name - div</p>
                </Carousel.Item>

                <Carousel.Item style={{paddingTop: "50px"}}>
                    <p style={{paddingBottom: "10px"}}>3.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    <img src={dummy} alt="dummy"/>
                    <p>Blah blah name - div</p>
                </Carousel.Item>

                <Carousel.Item style={{paddingTop: "50px"}}>
                    <p style={{paddingBottom: "10px"}}>4.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    <img src={dummy} alt="dummy"/>
                    <p>Blah blah name - div</p>
                </Carousel.Item>

            </Carousel>
            </motion.div>
            </Container>
        </motion.div>
    );
}
 
export default AboutComponent;