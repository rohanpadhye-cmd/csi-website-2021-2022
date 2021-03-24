import { Row , Col , Card , Container } from 'react-bootstrap';
import WorkShopModal from './WorkShopModal'
import {useState} from 'react';
import ws1 from '../assets/Ws/Ws1.jpeg';
import ws2 from '../assets/Ws/Ws2.jpeg';
import ws3 from '../assets/Ws/Ws3.jpeg';
import ws4 from '../assets/Ws/Ws4.jpeg';
const WSInfo =[
  {img:ws1 ,name:"WS1",desc:'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' },
  {img:ws2 ,name:"WS2",desc:'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' },
  {img:ws3 ,name:"WS3",desc:'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' },
  {img:ws4 ,name:"WS4",desc:'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' }
  
];
const CardMap=()=>WSInfo.map((info,idx)=>{
  return(
    <WsCards name={info.name} img={info.img} desc={info.desc} key={idx} />
  )
}
)
const WsCards=({name,img,desc})=>{
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return(
    <>
    <WorkShopModal 
      name={name} 
      img={img}
      desc={desc}
      show={show}
      handleClose={handleClose}
      />
      <Col xs={12} sm={6}>
      <Card className='mt-2' onClick={handleShow} style={{backgroundColor: "#add8e6"}}>
      <Card.Img src={img} />
      </Card>
      </Col>
    </>
  )
}

const WorkComponent=()=>{
    return(
      <>
      <h1>Workshops and Events</h1>
      <Container>
        <Row>
          <CardMap/>
        </Row>
      </Container>
      </>  
    )
}
export default WorkComponent;