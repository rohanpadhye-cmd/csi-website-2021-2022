
import { Jumbotron, Container, Card, Button, Col, Row, Modal, Form} from 'react-bootstrap';
import { useState } from 'react';
import VES from "../assets/back-img1.jpeg";
import { Parallax, Background } from "react-parallax";
import groupImg from "../assets/group-img.jpg";
import poster from "../assets/poster.jpeg";
import { motion } from 'framer-motion';
import QR from "../assets/QR_code.jpg";

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


    
const HomeComponent = () => {


  const [showMembershipModal, setModal] = useState(false);
  const [membershipTaken,setMembership]=useState(false);  //Handle the case when user will press the submit button in Membership form
  const handleSubmit = () => {
    setMembership(true);
  }
  const handleClose = () => 
  {
    setModal(false);
    setMembership(false);
  }
  const handleShow = () => setModal(true);



  const [showWorkshopModal, setShowWorkshopModal] = useState(false);
  const [isWorkshopSubmitted,setIsWorkshopSubmitted]=useState(false);
  const [isCSIMember,setIsCSIMember]=useState('Yes');
   const [buttonText,setButtonText]=useState("Workshop");

  const handleWorkshopSubmit = () => setIsWorkshopSubmitted(true);

  const handleWorkshopClose = () => {
    setShowWorkshopModal(false);
    setIsWorkshopSubmitted(false);
    setIsCSIMember('Yes');
  };

  const handleshowWorkshopModal = () => setShowWorkshopModal(true);

  const CSIMemberDropdown = (e) =>  setIsCSIMember(e.target.value);

    return (
            <motion.div className="home" 
        variants={containerVariant} 
        initial="hidden" 
        animate="visible"
        exit="exit"
      >

        <Container fluid className="m-0">        
          <Parallax bgImage= {VES} strength={200}>
            <div style={{height: "425px"}}>
            <motion.h1 
                // initial={{scale: 1}}
                // animate={{scale: [1.3,1],
                //           color: ['#fff','#99ccff']}}
                // transition={{ yoyo: Infinity}}
                drag dragConstraints={{ left: -50, top: -50, right: 50, bottom: 50 }} dragElastic={0.7}
                dragTransition={{ bounceStiffness: 600, bounceDamping: 10 }}
                className="csi-vesit">CSI VESIT</motion.h1>
           </div>
             </Parallax>
        </Container>
    


        <Container fluid className="mt-5">
          <Row>
            <motion.div
             initial={{x: '-100vw'}}
             animate={{x: 0}}
             transition={{delay: 3, duration: 2}}
            >
            <Col md={6}>
              <Card className="council-pic-info" style={{float: "left"}}>
                <Card.Img src={groupImg}/>
              </Card>
            </Col>
            <div className="mx-auto mt-3 px-5" style={{float: "left"}}>
              <h3>Our Team!</h3>
              <p>Lorem Ipsum</p>
            </div>
            </motion.div>
          </Row>
        </Container>
    
        <Row className="counter">
          <Col lg={4} sm={4} className="counter-item">
            <div>45+</div>
            <h3>Workshops</h3>
          </Col>
          <Col lg={4} sm={4} className="counter-item">
            <div>40+</div>
            <h3>Council</h3>
          </Col>
          <Col lg={4} sm={4} className="counter-item">
            <div>30+</div>
            <h3>Years</h3>
          </Col>
        </Row>
        

        
        <Row className="registrations">
          <Col md={6} className="p-0">
            <Card.Img className="poster" src={poster}/>
          </Col>
          <Col md={6} style={{padding: "11% 0"}}>
            {/* <Card.Body> */}

              <div className="registration-buttons">
                <Col>
                  <Button className="registration-button" size="lg" onClick={handleShow}>Membership Form</Button>
                </Col>

                <Col>
                  <Button className="registration-button register-for-button"  size="lg" onClick={handleshowWorkshopModal}>Register for {buttonText}</Button>
                </Col>
                
                
              </div>
       
              <Modal
                size="lg"
                show={showWorkshopModal}
                onHide={handleWorkshopClose}            
              >
                {!isWorkshopSubmitted ? 
                  <>
                  <Modal.Header closeButton>
                    <Modal.Title>
                      CSI-VESIT PHP & LARAVEL WORKSHOP <br />
                     <p style={{fontSize:"15px"}}>CSI-VESIT presents PHP & LARAVEL workshop which will enable users to build robust and swift web applications having a speed improvement of about 700% as compared to other websites!<br />
                      <br />
                      Date : 20th and 21st February, 2021<br />
                      Time : 11am to 1pm<br />
                      Platform : Google Meet<br />
                      <br />
                      NOTE: This workshop is exclusively for CSI members.</p>
                    </Modal.Title>
                  </Modal.Header>

                    <Modal.Body>
                      <Form onSubmit={handleWorkshopSubmit}> 

                        <Form.Row>
                          <Form.Group as={Col} xs="6" controlId="FullName" md={{span:4}}>
                            <Form.Label><h5>Full Name</h5></Form.Label>
                            <Form.Control
                            type="text"
                            placeholder="Your Full Name"
                            required />
                          </Form.Group>
                        </Form.Row>

                        <Form.Row>
                          <Form.Group as={Col} xs="6" controlId="Class" md={{span:4}}>
                            <Form.Label><h5>Class</h5></Form.Label>
                            <Form.Control
                            type="text"
                            placeholder="Your Class"
                            required />
                          </Form.Group>

                          <Form.Group as={Col} xs="6" controlId="ContactNo" md={{span:4,offset:1}}>
                            <Form.Label><h5>Contact No.</h5></Form.Label>
                            <Form.Control
                            type="text"
                            placeholder="Your Contact No."
                            required />
                          </Form.Group>                          
                        </Form.Row>

                        <Form.Row >
                          <Form.Group as={Col} as={Row} xs="6" controlId="CSIMember">
                            <Form.Label className="ml-1" column lg="6" xs="6"><h5>CSI Member?</h5></Form.Label>
                            <Col xs="6">
                            <Form.Control as="select" defaultValue="Choose..." onChange={CSIMemberDropdown}>
                              <option>Yes</option>
                              <option>No</option>
                            </Form.Control>
                            </Col>
                          </Form.Group>
                        </Form.Row>

                        <hr></hr>

                        <Form.Row>
                          <Form.Group controlId="CSIMember">
                            <Button variant="primary" type="submit" >Submit</Button>
                            <Button className="ml-3" variant="secondary" onClick={handleWorkshopClose}>Close</Button>
                          </Form.Group>
                        </Form.Row>

                      </Form>
                    </Modal.Body>
                  </> : 
                  <>
                    <Modal.Header closeButton>
                      CSI-VESIT PHP & LARAVEL WORKSHOP 
                    </Modal.Header>

                    <Modal.Body>
                      {isCSIMember === 'Yes' ? <h5>You have successfully registered for the workshop.</h5> : <h5>Please fill the Membership form and then you can register for this workshop </h5>}
                      <hr></hr>
                      <Button variant="secondary" onClick={handleWorkshopClose}>Close</Button>
                    </Modal.Body> 
                  </>
                }
              </Modal>
            {/* </Card.Body> */}
          </Col>
        </Row>

        {/* Modal for Membership Form */}
        <Modal className="registration-modal" show={showMembershipModal} onHide={handleClose} animation={true} size="lg">
      { !membershipTaken? 
       <>
        <Modal.Header closeButton>
                <Modal.Title>
                          CSI-VESIT MEMBERSHIP FORM<br/>
                          <p style={{fontSize:"15px"}}>For any Queries ,CONTACT:<br/>
                          Fayzaan Qureshi ( Co-Chairperson) - 9819186523<br/>
                          Saloni Ingle (Jr. Treasurer) - 9370550921<br/>
                          Saurav Telge(Operations Secretary) - 9821505562
                          <br/><br/>
                          NOTE : There will not be a Resubmit options so Please fill the Form correctly
                          <br/><br/>
                          The name and photo associated with your Google account will be recorded when you upload files and submit this form.</p>
                </Modal.Title>
        </Modal.Header>
        <Modal.Body>
                    
            <Form onSubmit={handleSubmit}>
                  <Form.Row>
                     <Form.Group as={Col} xs="6" md={{span:4}}>
                         <Form.Label><h5>Email Address</h5></Form.Label>
                         <Form.Control 
                         type="email" 
                         placeholder="Enter Email Address" 
                         required/>
                      </Form.Group>

                      <Form.Group as={Col} xs="6" controlId="FirstName" md={{span:4,offset:1}}>
                            <Form.Label><h5>Full Name</h5></Form.Label>
                            <Form.Control
                            type="text"
                            placeholder="Your Full Name"
                            required />
                      </Form.Group>
                  </Form.Row>

                      <Form.Row>
                        <Form.Group as={Col} md="4" xs="6" md={{span:3}}>
                              <Form.Label className="form-label"><h5>Date Of Birth</h5></Form.Label>
                              <Form.Control type="date" name="dob" placeholder="Date Of Birth" required></Form.Control>
                        </Form.Group>
                       <Form.Group as={Col} md="4" xs="6" md={{span:3,offset:1}}>
                               <Form.Label className="form-label"><h5>Class</h5></Form.Label>
                               <Form.Control as="select" defaultValue="" required>
                                 <option>D6</option>
                                 <option>D7A</option>
                                 <option>D7B</option>
                                 <option>D7C</option>
                                 <option>D7A</option>
                                 <option>D8</option>
                                 <option>D9A</option>
                                 <option>D9B</option>
                                 <option>D10A</option>
                                 <option>D10B</option>
                                 <option>MCA</option>
                               </Form.Control>
                        </Form.Group>
                        <Form.Group as={Col} md="4" xs="6" md={{span:3,offset:1}}>
                          <Form.Label className="form-label"><h5>Gender</h5></Form.Label>
                          <Form.Control as="select" defaultValue="" required>
                            <option>Male</option>
                            <option>Female</option>
                            <option>Others</option>
                          </Form.Control>
                        </Form.Group>

                     
                        <Form.Group as={Col} md="4" xs="6" md={{span:3}}>  
                           <Form.Label className="form-label"><h5>Contact No</h5></Form.Label>
                            <Form.Control 
                            type="text" 
                            placeholder="Your Contact No." 
                            required/>
                        </Form.Group>

                        <Form.Group as={Col} md="4" xs="6" md={{span:3,offset:1}}>
                           <Form.Label className="form-label"><h5>Degree</h5></Form.Label>
                           <Form.Control as="select" 
                           defaultValue="" 
                           required>
                             <option>BE</option>
                             <option>MCA</option>
                           </Form.Control>
                        </Form.Group>

                       <Form.Group as={Col} md="4" xs="6" md={{span:3,offset:1}}>
                         <Form.Label className="form-label"><h5>Year</h5></Form.Label>
                         <Form.Control 
                         as="select" 
                         defaultValue="" 
                         required>
                           <option>SE</option>
                           <option>TE</option>
                           <option>FE</option>
                         </Form.Control>
                       </Form.Group>
                         
                    </Form.Row>
                      
                    <Form.Label className="form-label"><h5>Payment Method(To above mobile number only i.e 9370550921)</h5></Form.Label>   
                    <Form.Row>  
                      <Form.Group as={Col} xs="4">
                         
                         <Form.Control as="select" defaultValue="">
                         <option>Google Pay</option>
                         <option>Paytm</option>
                         <option>PhonePe</option>
                         <option>Other</option>
                         </Form.Control>
                         <Form.Text className="text-muted">
                         Write for csi membership_Name_class in what's this for of gpay
                         </Form.Text>
                         
                      </Form.Group>
                    </Form.Row>
                    

                      <Form.Group>
                         <Form.Label className="form-label"><h5>Use this QR code for PhonePe ,Patym or any other UPI Payment options</h5></Form.Label>
                         <Row>
                            <Col>
                            <img className="mx-auto" src={QR} style={{display:"block"}} alt="QR Code"/>
                            </Col>
                         </Row>
                      </Form.Group>  

                      <Form.Group>
                         <Form.File className="position-relative" required name="file" label="Screenshots/Receipt of Payment completed " feedbackTooltip/>
                      </Form.Group>
                      <hr/>
                      <Form.Row>
                          <Form.Group>
                            <Button variant="primary" type="submit">Submit</Button>
                            <Button className="ml-3" variant="secondary" onClick={handleClose}>Close</Button>
                          </Form.Group>
                      </Form.Row>

                </Form>
        </Modal.Body>
                  
                </>  :
                <>
                <Modal.Header closeButton>
                      CSI-VESIT MEMBERSHIP FORM
                </Modal.Header>
                <Modal.Body>
                      <h5>Thanks For Submitting Form</h5>
                      <hr/>
                      <Button variant="secondary" onClick={handleClose}>Close</Button>
                </Modal.Body>
                       
                    
                </> }
          </Modal> 
        
        
    </motion.div>
    );
}
 
export default HomeComponent;