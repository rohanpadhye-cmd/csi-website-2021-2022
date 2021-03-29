import { Container, Row, Col, Card} from 'react-bootstrap';
import ContactForm from './contact/ContactForm';
import ContactMapLarge from './contact/ContactMapLarge';
import ContactMapSmall from './contact/ContactMapSmall';
import ContactCarouselLarge from './contact/ContactCarouselLarge';
import ContactCarouselSmall from './contact/ContactCarouselSmall';
import { motion } from 'framer-motion';

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
        }
    }
}

const ContactComponent = () => {
    return (
        <>
            <motion.div
                variants={containerVariant} 
                initial="hidden" 
                animate="visible"
                exit="exit"
            >
                <Container className='mb-5'>
                    <Row className="d-none d-md-flex">
                        <h1 className="mx-auto mb-md-5 mt-md-1">Let Your Curiosity Take Flight ✈️</h1>
                    </Row>
                    <Row className="d-md-none">
                        <h1 className="mx-auto mt-2 contact-h1">Let Your Curiosity</h1>
                    </Row>
                    <Row className="d-md-none">
                        <h1 className="mx-auto mb-4 contact-h1">Take Flight ✈️</h1>
                    </Row>
                    <Row>
                        <Col xs={{span: 12}} md={{span: 5}}>
                            <Card className="contact-form-card">
                                <Card.Header>
                                    <Row><h3 className="mx-auto">Have a Query? 📝</h3></Row>
                                </Card.Header>
                                <Card.Body className="p-4">
                                    <ContactForm />
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col className='mt-5 mt-md-0 mb-md-5' xs={{span: 12}} md={{span: 6,offset: 1}}>
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
                <ContactCarouselLarge />
                <ContactCarouselSmall />
            </motion.div>
        </>
    );
}

export default ContactComponent;