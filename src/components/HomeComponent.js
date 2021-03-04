import { Jumbotron, Container, Card, Button, Col, Row} from 'react-bootstrap';
import groupImg from "../group-img.jpg";
import poster from "../poster.jpeg";
const HomeComponent = () => {
  
  var grpImgBack = {
    backgroundImage: "url(" + { groupImg } + ")"
  }

    return (
    <div className="home">

        <Jumbotron fluid>
          <Container className="jumbotron">
            <h1 className="csi-vesit">CSI VESIT</h1>
          </Container>
        </Jumbotron>

        <Container fluid="xs">
        <Card className="council-pic-info">
          <Row>
            <Col lg={5}>
              <Card.Img src={groupImg}/>
            </Col>
            <Col lg={5}>
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up the bulk of
                  the card's content.
                </Card.Text>
              </Card.Body>
            </Col>
          </Row>
        </Card>
        </Container>
    
        <Row className="counter">
          <Col lg={4} sm={4} xs={4} className="counter-item">
            <div>45+</div>
            <h3>Workshops</h3>
          </Col>
          <Col lg={4} sm={4} xs={4} className="counter-item">
            <div>40+</div>
            <h3>Council</h3>
          </Col>
          <Col lg={4} sm={4} xs={4} className="counter-item">
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