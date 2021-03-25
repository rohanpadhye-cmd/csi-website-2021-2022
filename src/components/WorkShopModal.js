import {Modal,Row , Col,Carousel} from 'react-bootstrap';

const WorkShopModal=(props)=>{
    
    return(
        <Modal className='mx-0' size='xl' aria-labelledby="contained-modal-title-vcenter" centered show={props.show} onHide={props.handleClose}>
        <Row size="lg" >
          <Col lg={6}>
          <Carousel fade indicators={false}>
                <Carousel.Item interval={1000}>
                  <img src={props.img} alt="event-img" width='100%'/>
                </Carousel.Item>
                <Carousel.Item interval={1000}>
                  <img src={props.img1} alt="event-img" width='100%'/>
                </Carousel.Item>
                <Carousel.Item interval={1000}>
                <img src={props.img} alt="event-img" width='100%'/>
                </Carousel.Item>
              </Carousel>
            
          </Col>

          <Col>
            <Modal.Footer  >
            <h1>{props.desc}</h1>
            </Modal.Footer>

          </Col>
          

        </Row>
        
        
        
      </Modal> 
    )
}
export default WorkShopModal;

//{name,desc,img,handleClose,show}

//<Modal.Body className='px-0 py-0'><img src={props.img} width='100%'/></Modal.Body>