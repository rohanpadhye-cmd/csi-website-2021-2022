import { useState } from 'react';
import { Container, Row, Modal, Button, Form} from 'react-bootstrap';
import IconBar from '../icons/IconBar';

// Handle for Firestore
import db from '../../firebase/FirestoreConnection';

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
                                <IconBar />
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
            db.collection("contactForm").add({ name, role, studentClass, email, body, date: new Date() })
            .then((docRef) => {
                    console.log("Student Success");
                    setShow(true); // Displaying Success Modal
                }).catch((error) => {
                    console.error("Error adding document: ", error);
                });
        } else if (role === 'Faculty') {
            console.log("Faculty Success");
            db.collection("contactForm").add({ name, role, facultyDpt, email, body, date: new Date() })
            .then((docRef) => {
                setShow(true); // Displaying Success Modal
            }).catch((error) => {
                console.error("Error adding document: ", error);
            });
        } else {
            console.log("Visitor Success");
            db.collection("contactForm").add({ name, role, email, body, date: new Date() })
                .then((docRef) => {
                    setShow(true); // Displaying Success Modal
                }).catch((error) => {
                    console.error("Error adding document: ", error);
                });
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

export default ContactForm;