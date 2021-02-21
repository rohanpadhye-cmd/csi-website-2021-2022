import { useState } from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';

const ContactForm = () => {
    
    const [name, setName] = useState(''); // Name
    const [role, setRole] = useState('Visitor'); // Role
    const [studentClass, setStudentClass] = useState(''); // Student Class
    const [facultyDpt, setfacultyDpt] = useState(''); // Faculty Department
    const [email, setEmail] = useState(''); // Email ID
    const [body, setBody] = useState(''); // Text Body

    const encode = (data) => {
        return Object.keys(data)
            .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
            .join("&");
    }
    
    const submission = { name, role, studentClass, facultyDpt, email, body };
    
    const handleSubmit = (e) => {
        
        fetch("/", {
            method: "POST",
            headers: { "Content-Type": "application/x-www-form-urlencoded" },
            body: encode({ "form-name": "contact", submission })
        })
        .then(() => alert("Success!"))
        .catch(error => alert(error));

        console.log(submission);
        e.preventDefault();
    }

    return (
        <Form onSubmit={handleSubmit} name="contact" method="POST">
            
            <input type="hidden" name="form-name" value="contact" />
            
            <Form.Group controlId="name">
                <Form.Label>Name</Form.Label>
                <Form.Control type="text" name="name" placeholder="Your Name" value={name} onChange={(e) => setName(e.target.value)} />
            </Form.Group>

            <Form.Group controlId="role" className="mt-4">
                <Form.Label>Role</Form.Label>
                <Form.Control as="select" name="role" value={role} onChange={(e) => setRole(e.target.value)}>
                    <option>Visitor</option>
                    <option>Student</option>
                    <option>Faculty</option>
                </Form.Control>
            </Form.Group>

            {
                role === 'Student' ? (
                    <Form.Group controlId="studentClass" className="mt-4">
                        <Form.Label>Class</Form.Label>
                        <Form.Control type="text" name="studentClass" placeholder="Your Class" value={studentClass} onChange={(e) => setStudentClass(e.target.value)} />
                    </Form.Group>
                ) : (<div />)
            }

            {
                role === 'Faculty' ? (
                    <Form.Group controlId="facultyDpt" className="mt-4">
                        <Form.Label>Department</Form.Label>
                        <Form.Control as="select" name="facultyDpt" value={facultyDpt} onChange={(e) => setfacultyDpt(e.target.value)}>
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
                <Form.Control type="email" name="email" placeholder="Your Email" value={email} onChange={(e) => setEmail(e.target.value)} />
            </Form.Group>

            <Form.Group controlId="body" className="mt-4">
                <Form.Label>How can we help you?</Form.Label>
                <Form.Control as="textarea" rows={4} name="body" placeholder="Your Text Here" value={body} onChange={(e) => setBody(e.target.value)} />
            </Form.Group>
            
            <Button className="contact-btn mt-2" variant="success" type="submit">
                Submit
            </Button>
        </Form>
    );
}

const ContactComponent = () => {
    return (
        <Container>
            <Row>
            <Col md={{span:4}}> {/*Google Map Embed */}
            <h1>Address</h1>
            <div className="mapouter">
                <div className="gmap_canvas">
                    <iframe width={500} height={350} id="gmap_canvas" src="https://maps.google.com/maps?q=Vivekanand%20Education%20Society's&t=k&z=13&ie=UTF8&iwloc=&output=embed" frameBorder={0} scrolling="no" marginHeight={0} marginWidth={0} />
                    <a href="https://soap2day-to.com">soap2day</a>
                    <br />
                    <style dangerouslySetInnerHTML={{__html: ".mapouter{position:relative;text-align:right;height:350px;width:500px;}" }} />
                    <a href="https://www.embedgooglemap.net">google html code</a>
                    <style dangerouslySetInnerHTML={{__html: ".gmap_canvas {overflow:hidden;background:none!important;height:350px;width:500px;}" }} />
                </div>
            </div>
            <br/>
            <p className='college-addr my-auto'>
                Vivekanand Education Society's Institute of Technology,
                Collector's Colony, Chembur, Mumbai-74
                Email address: csi.vesit@ves.ac.in 
                Jatin Bhagchandani: +919619447077 
                2017.jatin.bhagchandani@ves.ac.in 
                (Chairperson)</p>
            </Col>
                <Col sm lg={{span: 5, offset: 3}}>            
                    <ContactForm />
                </Col>
            </Row>
        </Container>
    );
}
 
export default ContactComponent;