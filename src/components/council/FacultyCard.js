// import "./councilCard.css";
import "./councilCard.css";
import { Col } from "react-bootstrap";
import { FaEnvelope } from 'react-icons/fa';
import temp from "./Pratik_Vartak-rm-bg.png";
const FacultyCard = (props) => {
  return (
    <Col md={4} sm={6} xs={12} className="mb-5">
        <div class="card">
          <div class="card-image">
            <img src={temp} alt="Council-img" />
            {/* <img src={props.imageUrl} alt="Council-img" /> */}
            <div class="social-icons">
              <ul>
              <li><a href="https://twitter.com/atuljustano"><FaEnvelope /></a>
              </li>
              </ul>
            </div>
          </div>
          <div class="details">
              <h4>{props.name}</h4>
              <span class="job-title">{props.role}</span>
          </div>
          {/* <div class="details">
              <h2>{props.name}
                  <br />
                  <span class="job-title">{props.role}</span>
              </h2>
          </div> */}
        </div>
    </Col>
    // <Col md={4} xs={6} className="mb-5">
    //   <div class="img-wrapper" style={{backgroundColor:`${bgcol}` }}>
    //     <img src={temp} alt="Council-img" />
    //     <h2>{name}</h2>
    //     <ul>
    //       <li><a href="https://www.instagram.com/atulkprajapati2000/"><FaInstagram /></a></li>
    //       <li><a href="https://github.com/atuljustano"><FaGithub /></a></li>
    //       <li><a href="https://twitter.com/atuljustano"><FaLinkedinIn /></a></li>
    //       <li><a href="https://twitter.com/atuljustano"><FaEnvelope /></a></li>
    //     </ul>
    //   </div>
    // </Col>
  );
}

export default FacultyCard; 