import { Row , Col , Card , Container,ButtonGroup,Button } from 'react-bootstrap';
import WorkShopModal from './WorkShopModal'
import {useState} from 'react';
import ws1 from '../assets/Ws/ws1.jpeg';
import ws1a from '../assets/Ws/ws1a.jpeg';
import ws2 from '../assets/Ws/ws2.jpeg';
import ws3 from '../assets/Ws/Ws3.jpeg';
import ws4 from '../assets/Ws/Ws4.jpeg';
import e1 from '../assets/Ws/e1.jpeg';
import e2 from '../assets/Ws/e2.jpeg';
import cl1 from '../assets/Ws/cl1.jpeg';
import { motion } from 'framer-motion';

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


//This array has workshop info 
const WSInfo =[
  {img:ws1,img1:ws1a,name:"WS1",desc:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum' },
  {img:ws2,img1:ws2,name:"WS2",desc:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum'},
  {img:ws3,img1:ws2 ,name:"WS3",desc:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum' },
  {img:ws4,img1:ws2 ,name:"WS4",desc:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum' } 
];

//This array has event info
const eventInfo =[
  {img:e1,img1:ws2,name:"E1",desc:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum'},
  {img:e2,img1:ws2,name:"E2",desc:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum'}
];


const collabInfo =[
  {img:cl1,img1:ws2,name:"CL1",desc:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum' }
];



//This function maps the workshop cards and renders them
const WsCardMap=()=>WSInfo.map((info,idx)=>{
  return(
    <WorkCards name={info.name} img={info.img} img1={info.img1} desc={info.desc} key={idx} />
  )
}
)

//This function maps event card and renders them
const EventCardMap=()=>eventInfo.map((info,idx)=>{
  return(
    <WorkCards name={info.name} img={info.img} img1={info.img1} desc={info.desc} key={idx} />
  )
}
)

//This function maps event card and renders them
const CollabCardMap=()=>collabInfo.map((info,idx)=>{
  return(
    <WorkCards name={info.name} img={info.img} img1={info.img1} desc={info.desc} key={idx} />
  )
}
)




const WorkCards=({name,img,img1,desc})=>{
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return(
    <>
    <WorkShopModal 
      name={name} 
      img={img}
      img1={img1}
      desc={desc}
      show={show}
      handleClose={handleClose}
      />
      <Col md={4} xs={12} sm={6}>
      <Card className='mt-3 mb-2' onClick={handleShow} style={{backgroundColor: "#add8e6"}}>
      <Card.Img src={img} />
      </Card>
      </Col>
    </>
  )
}









const WorkComponent=()=>{

//These are the states for displaying different pages viz.ws,event,collabs;
  const [showWsPage,setShowWsPage]=useState(true);
  const [showEventPage,setShowEventPage]=useState(false);
  const [showCollabPage,setShowCollabPage]=useState(false);

  //This are the buttons
function Buttons(){
  return (
  <div className="centerWorkBtn " >
      <ButtonGroup aria-label="Basic example" >
          <Button variant="secondary" id="1"  onClick={whichCouncil}>Workshops</Button>
          <Button variant="secondary" id ="2" onClick={whichCouncil}>Events</Button>
          <Button variant="secondary" id="3"  onClick={whichCouncil}>Collabs</Button>
      </ButtonGroup>
  </div>
  )

}


//This function returns images of respective memberCards

const whichCouncil = (e) =>{
  const id=e.target.id;

  //e.preventDefault();
  if(id === "1")
  {
    
    setShowWsPage(true);
      //other two 
      setShowEventPage(false);
      setShowCollabPage(false);
  }
  else if (id === "2")
  {
    setShowEventPage(true);
      //other two
      setShowWsPage(false);
      setShowCollabPage(false);
  }
  else if(id === "3")
  {
      setShowCollabPage(true);
      //other two
      setShowWsPage(false);
      setShowEventPage(false);

  }


}

  



//This is rendered
    return(
      <motion.div
      variants={containerVariant} 
        initial="hidden" 
        animate="visible"
        exit="exit">
      <Container >
      <Buttons/>
        <Row>
        {showWsPage ?  <WsCardMap/> : null }
        {showEventPage ?  <EventCardMap/> : null }
        {showCollabPage ?  <CollabCardMap/> : null }
        </Row>
      </Container>
      </motion.div>
    )
}
export default WorkComponent;