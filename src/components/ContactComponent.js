import { Container, Row, Col, Modal, Button, Form , Card ,Carousel} from 'react-bootstrap';
import { useState } from 'react';
// import db from './FirestoreConnection';

const ContactForm = () => {

    // State Management for form fields
    const [name, setName] = useState('');
    const [role, setRole] = useState('Visitor');
    const [studentClass, setStudentClass] = useState('');
    const [facultyDpt, setfacultyDpt] = useState('IT');
    const [email, setEmail] = useState('');
    const [body, setBody] = useState('');

    // State for Success Modal
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);

    // Success Modal to be displayed whenever form submission is successful
    const SuccessModal = () => {
        return (
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Thanks, {name}! 🥳</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    We will be contacting you shortly! 🤟 <br /><br />
                    Meanwhile, do follow us here for updates regarding our workshops and events!
                </Modal.Body>
                <Modal.Footer>
                    <Container fluid>
                        <Row>
                            <div className="mx-auto">
                                <a href="https://www.facebook.com/groups/csivesitchapter/" className="mr-1"><svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="icon icon-tabler icon-tabler-brand-facebook"
                                    width="40"
                                    height="40"
                                    viewBox="0 0 24 24"
                                    strokeWidth="1.5"
                                    stroke="#363537"
                                    fill="#add8e6"
                                    strokeLinecap="round"
                                    strokeLinejoin="round">
                                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                    <path d="M7 10v4h3v7h4v-7h3l1 -4h-4v-2a1 1 0 0 1 1 -1h3v-4h-3a5 5 0 0 0 -5 5v2h-3" />
                                </svg></a>
                                <a href="https://www.instagram.com/csi_vesit/?hl=en"><svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="icon icon-tabler icon-tabler-brand-instagram"
                                    width="40"
                                    height="40"
                                    viewBox="0 0 24 24"
                                    strokeWidth="1.5"
                                    stroke="#363537"
                                    fill="#add8e6"
                                    strokeLinecap="round"
                                    strokeLinejoin="round">
                                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                    <rect x="4" y="4" width="16" height="16" rx="4" />
                                    <circle cx="12" cy="12" r="3" />
                                    <line x1="16.5" y1="7.5" x2="16.5" y2="7.501" />
                                </svg></a>
                                <a href="https://twitter.com/csi_vesit?lang=en" className="mx-2"><svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="icon icon-tabler icon-tabler-brand-twitter"
                                    width="40"
                                    height="40"
                                    viewBox="0 0 24 24"
                                    strokeWidth="1.5"
                                    stroke="#363537"
                                    fill="#add8e6"
                                    strokeLinecap="round"
                                    strokeLinejoin="round">
                                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                    <path d="M22 4.01c-1 .49 -1.98 .689 -3 .99c-1.121 -1.265 -2.783 -1.335 -4.38 -.737s-2.643 2.06 -2.62 3.737v1c-3.245 .083 -6.135 -1.395 -8 -4c0 0 -4.182 7.433 4 11c-1.872 1.247 -3.739 2.088 -6 2c3.308 1.803 6.913 2.423 10.034 1.517c3.58 -1.04 6.522 -3.723 7.651 -7.742a13.84 13.84 0 0 0 .497 -3.753c-.002 -.249 1.51 -2.772 1.818 -4.013z" />
                                </svg></a>
                                <a href="https://www.youtube.com/channel/UCyRTcK0pQjDL5yn3JGitWew"><svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="icon icon-tabler icon-tabler-brand-youtube"
                                    width="40"
                                    height="40"
                                    viewBox="0 0 24 24"
                                    strokeWidth="1.5"
                                    stroke="#363537"
                                    fill="#add8e6"
                                    strokeLinecap="round"
                                    strokeLinejoin="round">
                                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                    <rect x="3" y="5" width="18" height="14" rx="4" />
                                    <path d="M10 9l5 3l-5 3z" />
                                </svg></a>
                                <a href="mailto:csi.vesit@ves.ac.in" className="mx-2"><svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="icon icon-tabler icon-tabler-mail-forward"
                                    width="40"
                                    height="40"
                                    viewBox="0 0 24 24"
                                    strokeWidth="1.5"
                                    stroke="#363537"
                                    fill="#add8e6"
                                    strokeLinecap="round"
                                    strokeLinejoin="round">
                                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                    <path d="M12 18h-7a2 2 0 0 1 -2 -2v-10a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v7.5" />
                                    <path d="M3 6l9 6l9 -6" />
                                    <path d="M15 18h6" />
                                    <path d="M18 15l3 3l-3 3" />
                                </svg></a>
                            </div>
                        </Row>
                    </Container>
                </Modal.Footer>
            </Modal>
        );
    }

    const handleSubmit = (e) => {
        e.preventDefault(); // Prevents Refreshing the Form
        
        // Populating Firestore using Appropriate Fields
        if (studentClass) {
            console.log("Student Success!");
            // db.collection("contactForm").add({ name, role, studentClass, email, body, date: new Date() })
            //     .then((docRef) => {
            //         setShow(true); // Displaying Success Modal
            //     }).catch((error) => {
            //         console.error("Error adding document: ", error);
            //     });
        } else if (role === 'Faculty') {
            console.log("Faculty Success!");
            // db.collection("contactForm").add({ name, role, facultyDpt, email, body, date: new Date() })
            //     .then((docRef) => {
            //         setShow(true); // Displaying Success Modal
            //     }).catch((error) => {
            //         console.error("Error adding document: ", error);
            //     });
        } else {
            console.log("Visitor Success!");
            // db.collection("contactForm").add({ name, role, email, body, date: new Date() })
            //     .then((docRef) => {
            //         setShow(true); // Displaying Success Modal
            //     }).catch((error) => {
            //         console.error("Error adding document: ", error);
            //     });
        }
    }

    return (
        <>
            <SuccessModal />
            <Form onSubmit={handleSubmit}>

                <Form.Group controlId="name">
                    <Form.Label>Name</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Your Name"
                        required
                        value={name}
                        onChange={(e) => setName(e.target.value)} />
                </Form.Group>

                <Form.Group controlId="role" className="mt-4">
                    <Form.Label>Role</Form.Label>
                    <Form.Control
                        as="select"
                        required
                        value={role}
                        onChange={(e) => setRole(e.target.value)}>
                        <option>Visitor</option>
                        <option>Student</option>
                        <option>Faculty</option>
                    </Form.Control>
                </Form.Group>

                {
                    role === 'Student' ? (
                        <Form.Group controlId="studentClass" className="mt-4">
                            <Form.Label>Class</Form.Label>
                            <Form.Control
                                type="text"
                                name="studentClass"
                                placeholder="Your Class"
                                required
                                value={studentClass}
                                onChange={(e) => setStudentClass(e.target.value)} />
                        </Form.Group>
                    ) : (<div />)
                }

                {
                    role === 'Faculty' ? (
                        <Form.Group controlId="facultyDpt" className="mt-4">
                            <Form.Label>Department</Form.Label>
                            <Form.Control
                            as="select"
                            name="facultyDpt"
                            value={facultyDpt}
                            onChange={(e) => setfacultyDpt(e.target.value)}>
                                <option>IT</option>
                                <option>CMPN</option>
                                <option>EXTC</option>
                                <option>ETRX</option>
                                <option>INST</option>
                                <option>Humanities &amp; Applied Sciences</option>
                                <option>AI &amp; Data Science</option>
                                <option>MCA | ME</option>
                            </Form.Control>
                        </Form.Group>
                    ) : (<div />)
                }

                <Form.Group controlId="email" className="mt-4">
                    <Form.Label>Email</Form.Label>
                    <Form.Control
                        type="email"
                        placeholder="Your Email"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)} />
                </Form.Group>

                <Form.Group controlId="body" className="mt-4">
                    <Form.Label>How can we help you?</Form.Label>
                    <Form.Control
                        as="textarea"
                        rows={4}
                        type="email"
                        placeholder="Your Text Here"
                        required
                        value={body}
                        onChange={(e) => setBody(e.target.value)} />
                </Form.Group>

                <Container className="mt-4">
                    <Row>
                        <Button className="contact-btn mx-auto" variant="success" type="submit">
                            Submit
                        </Button>
                    </Row>
                </Container>

            </Form>
        </>
    );
}

const ContactComponent = () => {
    return (
        <>
            <Container>
                <Row>
                    <h1 className="mx-auto mb-5 mt-1">Let Your Curiosity Take Flight ✈️</h1>    
                </Row>
            </Container>
            <Container>
                <Row className='mb-5'>
                    <Col sm={{span: 12}} md={{span: 5}}>
                            <Container>
                                <Row>
                                    <h3 className="mx-auto">Have a Query? 📝</h3>
                                </Row>
                            </Container>
                            <hr />
                        <ContactForm />
                    </Col>
                    <Col className='mb-0 mb-md-5' sm={{span: 12}} md={{span: 6,offset: 1}}>
                        <Container>
                            <Row>
                                <h3 className="mx-auto">Locate Us 🗺️</h3>
                            </Row>
                        </Container>
                        <hr className="mb-4" />
                        <Card className='mt-md-2' border='info' style={{width:'100%',height:'75%'}}>
                            <Card.Body className='px-0 py-0'>
                                <iframe 
                                title='map'
                                width="100%" 
                                height="100%" 
                                id="gmap_canvas" 
                                src="https://maps.google.com/maps?q=vivekanand%20education%20socie&t=&z=13&ie=UTF8&iwloc=&output=embed" 
                                frameBorder="0" 
                                scrolling="no" 
                                marginHeight="0" 
                                marginWidth="0"/>
                            </Card.Body>
                        </Card>
                        <Container fluid className='ml-md-3 mt-md-4'>
                            <Row>
                                <Col md={{span: 4}}>
                                    <svg xmlns="http://www.w3.org/2000/svg"
                                        className="icon icon-tabler icon-tabler-map-2"
                                        width="40"
                                        height="40"
                                        viewBox="0 0 24 24"
                                        strokeWidth="2"
                                        stroke="#363537"
                                        fill="#add8e6"
                                        strokeLinecap="round"
                                        strokeLinejoin="round">
                                        <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                                        <polyline points="10.5 4.75 9 4 3 7 3 20 9 17 15 20 21 17 21 15"></polyline>
                                        <line x1="9" y1="4" x2="9" y2="17"></line>
                                        <line x1="15" y1="15" x2="15" y2="20"></line>
                                        <path d="M18 13l-3.5 -5a4 4 0 1 1 7 0l-3.5 5"></path>
                                        <line x1="18" y1="6" x2="18" y2="6.01"></line>
                                    </svg>
                                    <div className='contact-text mt-md-2'>
                                        Vivekanand Education Society's Institute of Technology,
                                        Collector's Colony, Chembur, Mumbai-74
                                    </div>
                                </Col>
                                <Col>
                                    <svg 
                                    xmlns="http://www.w3.org/2000/svg" 
                                    className="icon icon-tabler icon-tabler-mail" 
                                    width="40" 
                                    height="40" 
                                    viewBox="0 0 24 24" 
                                    strokeWidth="2" 
                                    stroke="#363537" 
                                    fill="#add8e6" 
                                    strokeLinecap="round" 
                                    strokeLinejoin="round">
                                    <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                                    <rect x="3" y="5" width="18" height="14" rx="2"></rect>
                                    <polyline points="3 7 12 13 21 7"></polyline>
                                    </svg>
                                    <div className='contact-text mt-md-2'>
                                        csi.vesit@ves.ac.in
                                        2017.jatin.bhagchandani@ves.ac.in
                                    </div> 
                                </Col>
                                <Col>
                                    <svg 
                                    xmlns="http://www.w3.org/2000/svg" 
                                    className="icon icon-tabler icon-tabler-phone-call" 
                                    width="40" 
                                    height="40" 
                                    viewBox="0 0 24 24" 
                                    strokeWidth="2" 
                                    stroke="#363537" 
                                    fill="#add8e6" 
                                    strokeLinecap="round" 
                                    strokeLinejoin="round">
                                    <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                                    <path d="M5 4h4l2 5l-2.5 1.5a11 11 0 0 0 5 5l1.5 -2.5l5 2v4a2 2 0 0 1 -2 2a16 16 0 0 1 -15 -15a2 2 0 0 1 2 -2"></path>
                                    <path d="M15 7a2 2 0 0 1 2 2"></path>
                                    <path d="M15 3a6 6 0 0 1 6 6"></path>
                                    </svg>
                                    <div className='contact-text mt-md-2'>
                                        Jatin Bhagchandani:
                                        +919619447077
                                        (Chairperson)
                                    </div>
                                </Col>
                            </Row>
                        </Container>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Carousel
                            indicators={false}
                            fade={true}
                            interval={4000}
                            style={{ textAlign: 'center', height: '100px', width:'100%'}}
                            className="mt-5 mb-4" >
                            <Carousel.Item>
                                <h3 className='contact-list-header'>For Queries:</h3>
                                <ul className='contact-list'>
                                    <li>Jatin Bhagchandani (Chairperson): +919619447077</li>
                                    <li>Apoorva Sudheesh (Sr.Secretary): +918358802335</li>
                                    <li>Fayzaan Qureshi (Co-Chairperson): +919819186523</li>
                                </ul>   
                            </Carousel.Item>
                            <Carousel.Item>
                                <h3 className='contact-list-header'>For Memberships:</h3>
                                <ul className='contact-list'>
                                    <li>Yash Diwan (Treasurer): +919834571848</li>
                                    <li>Saloni Ingle (Jr.Treasurer): +91 9370550921</li>
                                </ul>
                            </Carousel.Item>
                            <Carousel.Item>
                                <h3 className='contact-list-header'>For Technical Help:</h3>
                                <ul className='contact-list'>
                                    <li>Anish Chhabria (Executive Committee): +91 9619287840</li>
                                    <li>Saurav Telge (Operations-Secretary): +91 9821505562</li>
                                </ul>
                            </Carousel.Item>
                            <Carousel.Item>
                                <h3 className='contact-list-header'>For any other assistance:</h3>
                                <ul className='contact-list'>
                                    <li>Shreya Shah (Managing Secretary): +91 9359729644</li>
                                    <li>Pooja Prasad (Public Relations Head): +91 8657206488</li>  
                                </ul>
                            </Carousel.Item>
                        </Carousel>
                    </Col>
                </Row>
            </Container>
        </>
    );
}
 
export default ContactComponent;