import React from "react";
import CouncilCard from "../components/council/CouncilCard"
import FacultyCard from "../components/council/FacultyCard"
import { Container, Row, Carousel, Button } from "react-bootstrap";
import "../components/council/councilCard.css"

const facultyDetails = [
    {
      imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQMKi6B7dQxVyrN_qgvVWCX96omLGEtmUXK0A&usqp=CAU",
      role: "Sr.Web Officer",
      name: "Pratik Vartak",
    },
    {
      imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQMKi6B7dQxVyrN_qgvVWCX96omLGEtmUXK0A&usqp=CAU",
      role: "Sr.Web Officer",
      name: "Sarah Jhonson",
    },
  ];
 
const top3MemberDetails = [
    {
      imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQMKi6B7dQxVyrN_qgvVWCX96omLGEtmUXK0A&usqp=CAU",
      role: "Sr.Web Officer",
      name: "POM",
    },
    {
      imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQMKi6B7dQxVyrN_qgvVWCX96omLGEtmUXK0A&usqp=CAU",
      role: "Sr.Web Officer",
      name: "POM",
    },
    {
      imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQMKi6B7dQxVyrN_qgvVWCX96omLGEtmUXK0A&usqp=CAU",
      role: "Sr.Web Officer",
      name: "POM",
    }, 
  ]; 
const beMemberDetails = [
    {
      imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQMKi6B7dQxVyrN_qgvVWCX96omLGEtmUXK0A&usqp=CAU",
      role: "Sr.Web Officer",
      name: "POM",
    },
    {
      imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQMKi6B7dQxVyrN_qgvVWCX96omLGEtmUXK0A&usqp=CAU",
      role: "Sr.Web Officer",
      name: "POM",
    },
    {
      imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQMKi6B7dQxVyrN_qgvVWCX96omLGEtmUXK0A&usqp=CAU",
      role: "Sr.Web Officer",
      name: "POM",
    },
    {
      imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQMKi6B7dQxVyrN_qgvVWCX96omLGEtmUXK0A&usqp=CAU",
      role: "Sr.Web Officer",
      name: "POM",
    },
    {
      imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQMKi6B7dQxVyrN_qgvVWCX96omLGEtmUXK0A&usqp=CAU",
      role: "Sr.Web Officer",
      name: "POM",
    },
    {
      imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQMKi6B7dQxVyrN_qgvVWCX96omLGEtmUXK0A&usqp=CAU",
      role: "Sr.Web Officer",
      name: "POM",
    },
    {
      imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQMKi6B7dQxVyrN_qgvVWCX96omLGEtmUXK0A&usqp=CAU",
      role: "Sr.Web Officer",
      name: "POM",
    },
  ];
  
const top5MemberDetails = [
    {
      imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQMKi6B7dQxVyrN_qgvVWCX96omLGEtmUXK0A&usqp=CAU",
      role: " Officer",
      name: "top5",
    },
    {
      imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQMKi6B7dQxVyrN_qgvVWCX96omLGEtmUXK0A&usqp=CAU",
      role: " Officer",
      name: "top5",
    },
    {
      imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQMKi6B7dQxVyrN_qgvVWCX96omLGEtmUXK0A&usqp=CAU",
      role: " Officer",
      name: "top5",
    },
    {
      imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQMKi6B7dQxVyrN_qgvVWCX96omLGEtmUXK0A&usqp=CAU",
      role: " Officer",
      name: "top5",
    },
    {
      imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQMKi6B7dQxVyrN_qgvVWCX96omLGEtmUXK0A&usqp=CAU",
      role: " Officer",
      name: "top5",
    },
  ];
const teMemberDetails = [
    {
      imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQMKi6B7dQxVyrN_qgvVWCX96omLGEtmUXK0A&usqp=CAU",
      role: " Officer",
      name: "XOM",
    },
    {
      imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQMKi6B7dQxVyrN_qgvVWCX96omLGEtmUXK0A&usqp=CAU",
      role: " Officer",
      name: "XOM",
    },
    {
      imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQMKi6B7dQxVyrN_qgvVWCX96omLGEtmUXK0A&usqp=CAU",
      role: " Officer",
      name: "XOM",
    },
    {
      imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQMKi6B7dQxVyrN_qgvVWCX96omLGEtmUXK0A&usqp=CAU",
      role: " Officer",
      name: "XOM",
    },
    {
      imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQMKi6B7dQxVyrN_qgvVWCX96omLGEtmUXK0A&usqp=CAU",
      role: " Officer",
      name: "XOM",
    },
    {
      imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQMKi6B7dQxVyrN_qgvVWCX96omLGEtmUXK0A&usqp=CAU",
      role: " Officer",
      name: "XOM",
    },
    {
      imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQMKi6B7dQxVyrN_qgvVWCX96omLGEtmUXK0A&usqp=CAU",
      role: " Officer",
      name: "XOM",
    },
    {
      imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQMKi6B7dQxVyrN_qgvVWCX96omLGEtmUXK0A&usqp=CAU",
      role: " Officer",
      name: "XOM",
    },
    {
      imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQMKi6B7dQxVyrN_qgvVWCX96omLGEtmUXK0A&usqp=CAU",
      role: " Officer",
      name: "XOM",
    },
    {
      imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQMKi6B7dQxVyrN_qgvVWCX96omLGEtmUXK0A&usqp=CAU",
      role: " Officer",
      name: "XOM",
    },
  ];

const seMemberDetails = [
    {
      imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQMKi6B7dQxVyrN_qgvVWCX96omLGEtmUXK0A&usqp=CAU",
      role: "Sr.Web Officer",
      name: "KOM",
    },
    {
      imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQMKi6B7dQxVyrN_qgvVWCX96omLGEtmUXK0A&usqp=CAU",
      role: "Sr.Web Officer",
      name: "KOM",
    },
    {
      imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQMKi6B7dQxVyrN_qgvVWCX96omLGEtmUXK0A&usqp=CAU",
      role: "Sr.Web Officer",
      name: "KOM",
    },
    {
      imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQMKi6B7dQxVyrN_qgvVWCX96omLGEtmUXK0A&usqp=CAU",
      role: "Sr.Web Officer",
      name: "KOM",
    },
    {
      imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQMKi6B7dQxVyrN_qgvVWCX96omLGEtmUXK0A&usqp=CAU",
      role: "Sr.Web Officer",
      name: "KOM",
    },
    {
      imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQMKi6B7dQxVyrN_qgvVWCX96omLGEtmUXK0A&usqp=CAU",
      role: "Sr.Web Officer",
      name: "KOM",
    },
    {
      imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQMKi6B7dQxVyrN_qgvVWCX96omLGEtmUXK0A&usqp=CAU",
      role: "Sr.Web Officer",
      name: "KOM",
    },
    {
      imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQMKi6B7dQxVyrN_qgvVWCX96omLGEtmUXK0A&usqp=CAU",
      role: "Sr.Web Officer",
      name: "KOM",
    },
    {
      imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQMKi6B7dQxVyrN_qgvVWCX96omLGEtmUXK0A&usqp=CAU",
      role: "Sr.Web Officer",
      name: "KOM",
    },
    {
      imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQMKi6B7dQxVyrN_qgvVWCX96omLGEtmUXK0A&usqp=CAU",
      role: "Sr.Web Officer",
      name: "KOM",
    },
  ];

  let facultyCards = facultyDetails.map((info, index) => {
      return (
          <FacultyCard 
          imageUrl={info.imageUrl}
              role={info.role}
              name={info.name}
              key={index}
              />
              )
  });

  let top3MemberCards = top3MemberDetails.map((info, index) => {
    return (
        <CouncilCard
            imageUrl={info.imageUrl}
            name={info.name}
            role={info.role}
            key={index}
        />
    )
  });
  let beMemberCards = beMemberDetails.map((info, index) => {
      return (
          <CouncilCard
              imageUrl={info.imageUrl}
              name={info.name}
              role={info.role}
              key={index}
          />
      )
  });

  let top5MemberCards = top5MemberDetails.map((info, index) => {
      return (
          <CouncilCard
              imageUrl={info.imageUrl}
              name={info.name}
              role={info.role}
              key={index}
          />
      )
  });
  let teMemberCards = teMemberDetails.map((info, index) => {
      return (
          <CouncilCard
              imageUrl={info.imageUrl}
              name={info.name}
              role={info.role}
              key={index}
          />
      )
  });

  let seMemberCards = seMemberDetails.map((info, index) => {
      return (
          <CouncilCard
              imageUrl={info.imageUrl}
              name={info.name}
              role={info.role}
              key={index}
          />
      )
  });

  const Faculty = () => {
      return (
        <p>
          <h1 className="mb-5" data-aos="fade-down" data-aos-easing="linear" data-aos-duration="500">Faculty Members</h1>
          <div class="map-team-cards faculty-card">
          {facultyCards}
          </div>
        </p>
      );
  }

  const BEYearCouncil = () => {
    return (
      <>
        <div>  
            <h1 className="mb-4" style={{alignText:"center"}}>TOP 3</h1>
            <div className="map-team-cards">
            {top3MemberCards}
            </div>
        </div>
        <div>  
            <h1 className="mb-4" style={{alignText:"center"}}>BE Council Members</h1>
            <div className="map-team-cards">
            {beMemberCards}
            </div>
        </div>
      </>
      );
  }

  const TEYearCouncil = () => {
    return (
        <>
        <div>  
            <h1 className="mb-4" style={{alignText:"center"}}>TOP 5</h1>
            <div className="map-team-cards">
            {top5MemberCards}
            </div>
        </div>
        <div>  
            <h1 className="mb-4" style={{alignText:"center"}}>TE Council Members</h1>
            <div className="map-team-cards">
            {teMemberCards}
            </div>
        </div>
        </>
      );
  }

  const SEYearCouncil = () => {
    return (
        <div>  
            <h1 className="mb-4" style={{alignText:"center"}}>SE Council Members</h1>
            <div className="map-team-cards">
            {seMemberCards}
            </div>
        </div>
      );
  }

const CouncilComponent = () => {
  const [index, setIndex] = React.useState(0);
  const handleSelect = (selectedIndex, e) => {setIndex(selectedIndex); };

  return (
    <Container>
      <Carousel
        style={{ marginTop:"50px" }}
        data-aos="fade-up" data-aos-easing="linear" data-aos-duration="1000"
        indicators={false}
        controls={false}
      >
        <Faculty />
      </Carousel>

      <Row className="justify-content-center" style={{marginBottom:"50px"}} data-aos="fade-up" data-aos-easing="linear" data-aos-duration="500">
        <Button
          className={`ml-2 w-25  ${index === 0 ? "contact-btn " : null} `}
          onClick={() => setIndex(0)}
        >BE Council
        </Button>
        <Button
          className={`ml-2 w-25  ${index === 1 ? "contact-btn " : null} `}
          onClick={() => setIndex(1)}
        >TE Council
        </Button>
        <Button
          className={`ml-2 w-25  ${index === 2 ? "contact-btn " : null} `}
          onClick={() => setIndex(2)}
        >SE Council
        </Button>
      </Row>

      <Carousel
        activeIndex={index}
        onSelect={handleSelect}
        interval={2000}
        indicators={false}
        controls={false}
      >
        <Carousel.Item>
          <BEYearCouncil />
        </Carousel.Item>
        <Carousel.Item>
          <TEYearCouncil />
        </Carousel.Item>
        <Carousel.Item>
          <SEYearCouncil />
        </Carousel.Item>
      </Carousel>
    </Container>
  );
};

 
export default CouncilComponent;
