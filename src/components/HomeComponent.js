import { Jumbotron, Container, Card, Button, Col, Row} from 'react-bootstrap';
import VES from "../assets/back-img.jpeg";
import { Parallax, Background } from "react-parallax";
import groupImg from "../assets/group-img.jpg";
import poster from "../assets/poster.jpeg";


    
const HomeComponent = () => {
    return (
    <div className="home">

        <Container fluid className="m-0">
          <Jumbotron>
          <Parallax bgImage= {VES} strength={200}>
            <div style={{height: 400}}>
             <h1 className="csi-vesit">CSI VESIT</h1>
           </div>
             </Parallax>
          </Jumbotron>
        </Container>
    


        <Container fluid className="mt-5">
          <Row>
            <Col md={6}>
              <Card className="council-pic-info">
                <Card.Img src={groupImg} />
              </Card>
            </Col>
            <div className="mx-auto mt-3">
              <h3>Our Team!</h3>
              <p>Lorem Ipsum</p>
            </div>
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
          <Col lg={5}>
            <Card.Img className="poster" src={poster}/>
          </Col>
          <Col lg={5}>
            <Card.Body>
              <Button className="registration-buttons " variant="info" size="lg">Membership Form</Button>
              <Button className="registration-buttons " variant="info" size="lg">Register for workshop/events </Button>
            </Card.Body>
          </Col>
        </Row>
        
        
    </div>
    );
}
 
export default HomeComponent;