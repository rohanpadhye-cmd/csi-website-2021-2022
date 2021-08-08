import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import ContactForm from './contact/ContactForm';
import ContactMapLarge from './contact/ContactMapLarge';
import ContactMapSmall from './contact/ContactMapSmall';
import ContactCarouselLarge from './contact/ContactCarouselLarge';
import ContactCarouselSmall from './contact/ContactCarouselSmall';
import test from '../assets/test.png';
// import { motion } from 'framer-motion';

// const containerVariant = {
//     hidden: {
//         opacity: 0,
//         x: '100vw',
//     },
//     visible: {
//         opacity: 1,
//         x: 0,
//         transition: {
//             type: 'tween',
//             duration: 1,
//         }
//     },
//     exit: {
//         x: '-100vw',
//         transition: {
//             type: 'tween',
//             duration: 1,
//         }
//     }
// }

const ContactComponent = () => {
    return (
        <>
            {/* <motion.div
                variants={containerVariant} 
                initial="hidden" 
                animate="visible"
                exit="exit"
            > */}
            <div>
                <Container className='mb-5 mt-4'>
                    <div data-aos="zoom-out" data-aos-duration="1000">
                        <Row className="d-none d-md-flex">
                            <h1 className="heading mx-auto mb-md-5 pb-md-4 mt-md-3">Let Your Curiosity Take Flight ✈️</h1>
                        </Row>
                        <Row className="d-md-none">
                            <h2 className="mx-auto mt-2 contact-h1">Let Your Curiosity</h2>
                        </Row>
                        <Row className="d-md-none">
                            <h2 className="mx-auto mb-4 contact-h1">Take Flight ✈️</h2>
                        </Row>
                    </div>
                    <Row>
                        <Col xs={{span: 12}} md={{span: 5}} data-aos="fade-right" data-aos-duration="1000">
                            <Card className="contact-form-card">
                                <Card.Header>
                                    <Row><h3 className="mx-auto">Have a Query? 📝</h3></Row>
                                </Card.Header>
                                <Card.Body className="p-4">
                                    <ContactForm />
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col className='mt-5 mt-md-0 mb-md-5' xs={{span: 12}} md={{span: 6,offset: 1}} data-aos="fade-left" data-aos-duration="1000">
                            <Container>
                                <Row>
                                    <h3 className="mx-auto">Locate Us 🗺️</h3>
                                </Row>
                            </Container>
                            <hr className="mb-4 mt-2" />
                            <ContactMapLarge />
                            <ContactMapSmall />
                        </Col>
                    </Row>
                </Container>
                {/* <Container fluid>
                    <Row className="accent-row">
                        <Col className="insta-embed-content">
                            <h2 className="mt-4 mb-5 insta-embed-title">Have an Instagram Account?! 🤳</h2>
                            <p className="insta-embed-subtitle d-none d-md-block">
                                <span className="insta-embed-code-1">if &#40; answer == True &#41; {"{"}</span> <br />
                                <span className="insta-embed-code-2">followCsiVesit&#40; &#41;;</span>
                                <br />
                                <span className="insta-embed-code-3">{"}"}</span>
                                <br />
                                <span className="insta-embed-code-4">else {"{"}</span>
                                <br />
                                <span className="insta-embed-code-5">createInstaAccount&#40; &#41;;</span>
                                <br />
                                <span className="insta-embed-code-6">followCsiVesit&#40; &#41;;</span>
                                <br />
                                <span className="insta-embed-code-7">{"}"}</span>
                            </p>
                            <p className="insta-embed-lead d-block d-md-none">Make sure you follow us there too!</p>
                            <Button className="insta-embed-button contact-btn" variant="success" href="https://www.instagram.com/csi_vesit/?hl=en">
                                Visit Our Handle 📸
                            </Button>
                        </Col>
                        <Col>
                            <img src={test} alt="CSI Instagram Embed" href="https://www.instagram.com/csi_vesit/?hl=en" className="insta-embed-image" />
                        </Col>
                    </Row>
                </Container> */}
                <div className="px-md-5 pt-md-3">
                    <div className="about-content shadow">
                        <div className="about-text">
                            <h1 className="heading insta-embed-title ml-md-4">Our Instagram Handle?! 🤳</h1>
                            <p className="about-p content-p insta-embed-codes d-none d-md-block">
                                <span className="insta-embed-code-1">if&nbsp; &#40; youHaveAccount == True &#41; {"{"}</span> <br />
                                <span className="insta-embed-code-2">followCsiVesit&#40; &#41;;</span>
                                <br />
                                <span className="insta-embed-code-3">{"}"}</span>
                                <br />
                                <span className="insta-embed-code-4">else {"{"}</span>
                                <br />
                                <span className="insta-embed-code-5">createInstaAccount&#40; &#41;;</span>
                                <br />
                                <span className="insta-embed-code-6">followCsiVesit&#40; &#41;;</span>
                                <br />
                                <span className="insta-embed-code-7">{"}"}</span>
                            </p>
                            <p className="d-block d-md-none insta-embed-sub">Make sure to follow us there too!</p>
                            <Button className="insta-embed-button contact-btn" variant="success" href="https://www.instagram.com/csi_vesit/?hl=en">
                                Visit Our Handle 📸
                            </Button>
                        </div>
                        <img src={test} alt="" className='about-img insta-embed' />
                    </div>
                </div>
                <ContactCarouselLarge />
                <ContactCarouselSmall />
            </div>
            {/* </motion.div> */}
        </>
    );
}

export default ContactComponent;