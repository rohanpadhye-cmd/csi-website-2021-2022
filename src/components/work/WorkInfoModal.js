import { Modal, Row , Col, Carousel, ListGroup, Button } from 'react-bootstrap';

const WorkInfoModal = ({ name, images, date, time, trend, venue, upcoming, desc, show, handleClose }) => (
  <Modal className='mx-0' size='xl' aria-labelledby="contained-modal-title-vcenter" centered show={show} onHide={handleClose} >
    <Modal.Header closeButton>
    <Modal.Title>{name}</Modal.Title>
    </Modal.Header>
    <Row size="lg" className='mx-0'>
      <Col md={12} xl={8} className='px-0'>
        <Carousel indicators={false}>
          {
          images.map(img => {
            return(
              <Carousel.Item interval={3000} className="ws-modal-img">
                <img src={img} alt="event-img" />
              </Carousel.Item>
            )  
          })}
        </Carousel>
      </Col>
      <Col className='px-0' >
        <ListGroup variant="flush">
          <ListGroup.Item>
            <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-calendar-event" width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
            <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
            <rect x="4" y="5" width="16" height="16" rx="2"></rect>
            <line x1="16" y1="3" x2="16" y2="7"></line>
            <line x1="8" y1="3" x2="8" y2="7"></line>
            <line x1="4" y1="11" x2="20" y2="11"></line>
            <rect x="8" y="15" width="2" height="2"></rect>
            </svg><strong> Date:</strong> {date}
          </ListGroup.Item>
          <ListGroup.Item className="d-none d-md-block">
            <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-clock" width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
              <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
              <circle cx="12" cy="12" r="9" />
              <polyline points="12 7 12 12 15 15" />
            </svg><strong> Time:</strong> {time}
          </ListGroup.Item>
          <ListGroup.Item>
            <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-news" width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
            <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
            <path d="M16 6h3a1 1 0 0 1 1 1v11a2 2 0 0 1 -4 0v-13a1 1 0 0 0 -1 -1h-10a1 1 0 0 0 -1 1v12a3 3 0 0 0 3 3h11"></path>
            <line x1="8" y1="8" x2="12" y2="8"></line>
            <line x1="8" y1="12" x2="12" y2="12"></line>
            <line x1="8" y1="16" x2="12" y2="16"></line>
            </svg><strong> Description:</strong> {desc}
          </ListGroup.Item>
          <ListGroup.Item className="d-none d-md-block">
          <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-trending-up" width="24" height="24" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
            <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
            <polyline points="3 17 9 11 13 15 21 7" />
            <polyline points="14 7 21 7 21 14" />
          </svg><strong> {trend}</strong>
          </ListGroup.Item>
          <ListGroup.Item>
          <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-map-pin" width="24" height="24" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
            <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
            <circle cx="12" cy="11" r="3" />
            <path d="M17.657 16.657l-4.243 4.243a2 2 0 0 1 -2.827 0l-4.244 -4.243a8 8 0 1 1 11.314 0z" />
          </svg><strong> Venue:</strong> {venue}
          </ListGroup.Item>
          {upcoming && <ListGroup.Item>
            <Button>Register</Button>
          </ListGroup.Item>}
        </ListGroup>
      </Col>
    </Row>
  </Modal>
);

export default WorkInfoModal;
