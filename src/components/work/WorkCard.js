import { useState } from "react";
import { Col, Card } from 'react-bootstrap';
import WorkInfoModal from './WorkInfoModal';

const WorkCard = ({ name, images, date, time, trend, venue, upcoming, desc }) => {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            <WorkInfoModal 
                name={name}
                images={images}
                date={date}
                time={time}
                trend={trend}
                venue={venue}
                upcoming={upcoming}
                desc={desc}
                show={show}
                handleClose={handleClose}
            />
            <Col md={4} xs={12} sm={6}>
                <Card className='mt-4 mb-1' onClick={handleShow} style={{ backgroundColor: "#add8e6" }}>
                    <Card.Img src={images[0]} />
                </Card>
            </Col>
        </>
    );
}
 
export default WorkCard;