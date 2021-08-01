import { useState, useEffect } from 'react';
import { Row , Container,Button } from 'react-bootstrap';
import WorkCardMap from './work/WorkCardMap';
import db from '../firebase/FirestoreConnection';

// import { motion } from 'framer-motion';

// const containerVariant = {
//   hidden: {
//     opacity: 0,
//     x: '100vw',
//   },
//   visible: {
//     opacity: 1,
//     x: 0,
//     transition: {
//       type: 'tween',
//       duration: 1,
//     }
//   },
//   exit: {
//     x: '-100vw',
//     transition: {
//       type: 'tween',
//       duration: 1,
//     }
//   }
// }

const WorkComponent = () => {

  const [currentWorkshops, setCurrentWorkshops] = useState([]);
  const [currentEvents, setCurrentEvents] = useState([]);
  const [currentCollabs, setCurrentCollabs] = useState([]);

  const [currentTab, setCurrentTab] = useState("Workshops");

  useEffect(() => {
    db.collection("workshopDetails").get().then((querySnapshot) => {
      querySnapshot.forEach(workshop => {
        let data = workshop.data();
        setCurrentWorkshops(currentWorkshops => [...currentWorkshops, data]);
      });
    });
    
    db.collection("eventDetails").get().then((querySnapshot) => {
      querySnapshot.forEach(event => {
        let data = event.data();
        setCurrentEvents(currentEvents => [...currentEvents, data]);
      });
    });
    
    db.collection("collabDetails").get().then((querySnapshot) => {
      querySnapshot.forEach(collab => {
        let data = collab.data();
        setCurrentCollabs(currentCollabs => [...currentCollabs, data]);
      });
    });
  }, []);
  
  return(
    // <motion.div
    // variants={containerVariant} 
    //   initial="hidden" 
    //   animate="visible"
    //   exit="exit">
    <div>
      <Container fluid className="mt-4">
        <Row
          className='justify-content-center'
          data-aos="fade-up"
          data-aos-easing="linear"
          data-aos-duration="500"
        >
          <Button className={`ml-2 w-25 centerWorkBtn ${currentTab === "Workshops" ? null : " contact-btn"}`} onClick={() => setCurrentTab("Workshops")}>
            Workshops
          </Button>
          <Button className={`ml-2 w-25 centerWorkBtn ${currentTab === "Events" ? null : " contact-btn"}`} onClick={() => setCurrentTab("Events")}>
            Events
          </Button>
          <Button className={`ml-2 w-25 centerWorkBtn ${currentTab === "Collabs" ? null : " contact-btn"}`} onClick={() => setCurrentTab("Collabs")}>
            Collabs
          </Button>
        </Row>
        <Row>
          {currentTab === "Workshops" && <WorkCardMap infoArray={currentWorkshops} />}
          {currentTab === "Events" && <WorkCardMap infoArray={currentEvents} />}
          {currentTab === "Collabs" && <WorkCardMap infoArray={currentCollabs} />}
        </Row>
      </Container>
      {/* </motion.div> */}
    </div>
  );
}
export default WorkComponent;
