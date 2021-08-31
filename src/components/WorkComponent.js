import { useState, useEffect } from 'react';
import { Row, Col, Container, Button } from 'react-bootstrap';
import WorkCardMap from './work/WorkCardMap';
import db from '../firebase/FirestoreConnection';
import magazine_poster_2021 from "../assets/magazine_poster.JPG"
import magazine_poster_2020 from "../assets/csi2020magz.jpg"
import magazine_poster_2019 from "../assets/csi2019magz.jpg"

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
const Magazine = ({link,img,title,content}) => {
  return(
    
          <div className="magazine-workshop" style={{width:'unset'}}>
                    <div className="card">
                      <div className="face face1">
                        <div className="content">
                          <h3>Redux - {title}</h3>
                          <p className="mb-0">{content}</p>
                          <a href={link} target="_blank" rel="noreferrer">View our magazine</a>
                        </div>
                      </div>
                      <div className="face face2">
                        <img alt="magazine's poster" src={img}/>
                      </div>
                    </div>
          </div>
    
  )
}
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
        // console.log(currentWorkshops);
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
          <Button className={`ml-2 centerWorkBtn ${currentTab === "Workshops" ? null : " contact-btn"}`} style={{width:'20%'}} onClick={() => setCurrentTab("Workshops")}>
            Workshops
          </Button>
          <Button className={`ml-2 centerWorkBtn ${currentTab === "Events" ? null : " contact-btn"}`} style={{width:'20%'}} onClick={() => setCurrentTab("Events")}>
            Events
          </Button>
          <Button className={`ml-2 centerWorkBtn ${currentTab === "Collabs" ? null : " contact-btn"}`} style={{width:'20%'}} onClick={() => setCurrentTab("Collabs")}>
            Collabs
          </Button>
          <Button className={`ml-2 centerWorkBtn ${currentTab === "Magazines" ? null : " contact-btn"}`} style={{width:'20%'}} onClick={() => setCurrentTab("Magazines")}>
            Magazines
          </Button>
        </Row>
        <Row>
          {currentTab === "Workshops" && <WorkCardMap infoArray={currentWorkshops} />}
          {currentTab === "Events" && <WorkCardMap infoArray={currentEvents} />}
          {currentTab === "Collabs" && <WorkCardMap infoArray={currentCollabs} />}
          {currentTab === "Magazines" && 
          <>
            <Col lg={{span: 3, offset: 1}} md={{span:12}} className="">
              <Magazine link="https://redux-magazines.vercel.app/" img={magazine_poster_2021} title="Tomorrowland" content="An insight into a vastly developed technological world with some of our bright minds highlighting their point of views in ways like never before." />
            </Col>
            <Col lg={{span: 3}} md={{span:12}} className="ml-lg-5 pl-lg-5">
              <Magazine link="https://redux-magazines.vercel.app/redux2020.html" img={magazine_poster_2020} title="Mumbai" content="A delightful look at our develpoing technological era filled with new found interests and innovations topped up with the theme of our beloved city." />
            </Col>
            <Col lg={{span: 3}} md={{span:12}} className="ml-lg-5 pl-lg-5">
              <Magazine link="https://redux-magazines.vercel.app/redux2019.html" img={magazine_poster_2019} title="Cynosure" content="Providing a very unique insight at the first incarnation of various types of technological boons we've all been relishing today. Also displaying the evolution of many technical wonders from their first invention." />
            </Col>
          </>}
        </Row>
      </Container>
      {/* </motion.div> */}
    </div>
  );
}
export default WorkComponent;
