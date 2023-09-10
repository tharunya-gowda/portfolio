import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Suchith R N </span>
            from <span className="purple"> Bangalore, India.</span>
            <br /> I am an <strong className="purple">iOS Developer</strong> with <strong className="purple">2 years</strong> of experience, currently employed at <strong className="purple">Atmana Innovations</strong>
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Reading Novels
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>
        </blockquote> 
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
