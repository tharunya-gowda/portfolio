import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/pic.png";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
                I am an energetic <span className="purple">Associate Software Developer</span> with a solid year of experience, actively engaged in  <span className="purple">crafting dynamic solutions</span> using <span className="purple"> Angular TypeScript, Python Django, and Grafana.</span> With a passion for technology and a commitment to innovation, I continuously seek opportunities to apply my diverse expertise in creating impactful software solutions. 

              <br />
              <br />Proficient in front-end technologies—HTML, CSS, and JavaScript—I build intuitive and engaging user interfaces. My hands-on academic projects have endowed me with fundamental skills in Android app development, enhancing my versatility.
              <br />
              <br />
              Whenever possible, I also apply my passion for developing products
              with <b className="purple">Kotlin</b>,
              <i>
                <b className="purple">
                  {" "}
                  Modern Android Libraries and Frameworks, and Web Development.
                </b>
              </i>
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <p>
              Feel free to <span className="purple">connect </span>with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/tharunya-gowda"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/tharunya-l-690146209/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
