import {Modal,Row , Col,Carousel,ListGroup} from 'react-bootstrap';

const WorkShopModal=(props)=>{
    
    return(
        <Modal className='mx-0' size='xl' aria-labelledby="contained-modal-title-vcenter" centered show={props.show} onHide={props.handleClose} >
          <Modal.Header closeButton>
          <Modal.Title>{props.name}</Modal.Title>
        </Modal.Header>
        <Row size="lg" className='mx-0'>
          <Col md={12} xl={8} className='px-0'>
          <Carousel fade indicators={false}>
                <Carousel.Item interval={3000}>
                  <img src={props.img} alt="event-img" width='100%'/>
                </Carousel.Item>
                <Carousel.Item interval={3000}>
                  <img src={props.img1} alt="event-img" width='100%'/>
                </Carousel.Item>
                <Carousel.Item interval={3000}>
                <img src={props.img} alt="event-img" width='100%'/>
                </Carousel.Item>
              </Carousel>
            
          </Col>

          <Col className='px-0' >
            <ListGroup variant="flush">
              <ListGroup.Item><svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-calendar-event" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                              <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                              <rect x="4" y="5" width="16" height="16" rx="2"></rect>
                              <line x1="16" y1="3" x2="16" y2="7"></line>
                              <line x1="8" y1="3" x2="8" y2="7"></line>
                              <line x1="4" y1="11" x2="20" y2="11"></line>
                              <rect x="8" y="15" width="2" height="2"></rect>
                              </svg><strong> Conducted on:</strong>{props.conductedOn}</ListGroup.Item>
              <ListGroup.Item><svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-users" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                              <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                              <circle cx="9" cy="7" r="4"></circle>
                              <path d="M3 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2"></path>
                              <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                              <path d="M21 21v-2a4 4 0 0 0 -3 -3.85"></path>
                              </svg><strong> Conducted by:</strong>{props.conductedBy}</ListGroup.Item>
              <ListGroup.Item><svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-news" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                              <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                              <path d="M16 6h3a1 1 0 0 1 1 1v11a2 2 0 0 1 -4 0v-13a1 1 0 0 0 -1 -1h-10a1 1 0 0 0 -1 1v12a3 3 0 0 0 3 3h11"></path>
                              <line x1="8" y1="8" x2="12" y2="8"></line>
                              <line x1="8" y1="12" x2="12" y2="12"></line>
                              <line x1="8" y1="16" x2="12" y2="16"></line>
                              </svg><strong> Description:</strong> {props.desc}</ListGroup.Item>
            </ListGroup>
          </Col>
          

        </Row>
        
        
        
      </Modal> 
    )
}
export default WorkShopModal;

//{name,desc,img,handleClose,show}

//<Modal.Body className='px-0 py-0'><img src={props.img} width='100%'/></Modal.Body>
