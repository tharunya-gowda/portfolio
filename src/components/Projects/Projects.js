import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import OtherProjectCard from "./OtherProjectCards";
import Particle from "../Particle";
import deetox from "../../Assets/Projects/deetox.png";
import healify from "../../Assets/Projects/healify.png";
import blockerX from "../../Assets/Projects/blockerX.png";
import blockerxLite from "../../Assets/Projects/blockerxLite.png";
import zenze from "../../Assets/Projects/zenze.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={3} className="project-card">
            <OtherProjectCard
              title="Generic approach toplant leaf disease classification and verification"
              description="Revolutionizing plant disease detection with VGG19, Inception V3, and Inception ResNet v2 models, achieving an impressive 93% accuracy. Our comprehensive approach combines physical plant analysis and crop disease data for robust classification and verification."
              ghLink="https://github.com/tharunya-gowda/PlantDiseaseMLProject"              
            />
          </Col>
          <Col md={3} className="project-card">
            <OtherProjectCard
              title="SoS-IT"
              description="A multi domain ecommerce mobile application where the user can act as both buyer and 
              delivery agent, developed using kotlin."
              ghLink="https://github.com/tharunya-gowda/SoS-IT"              
            />
          </Col>
          <Col md={3} className="project-card">
            <OtherProjectCard
              title="Pill'O'Clock"
              description="A android mobile application where the user can set remainders to take their medicine on time and also track thier stock, developed using kotlin."
              ghLink="https://github.com/tharunya-gowda/SoS-IT"              
            />
          </Col>
          <Col md={3} className="project-card">
            <OtherProjectCard
              title="Portfolio"
              description="A ReactJS application where I showcse my skillset and projects I have worked on, developed using ReactJS, HTML, CSS."
              ghLink="https://github.com/tharunya-gowda.github.io"              
            />
          </Col>
          <Col md={3} className="project-card">
            <OtherProjectCard
              title="Cine-ster(Movie Database Management System)"
              description="A web application for the purpose of online booking and viewing available movie tickets 
              from nearby theatres developed using HTML, CSS, JavaScript, MySQL and PHP"
              ghLink="https://github.com/tharunya-gowda/Movie-Database-Management-System"              
            />
          </Col>
          <Col md={3} className="project-card">
            <OtherProjectCard
              title="Blood Bank Management System"
              description="A user friendly attractive website which will contain the details of a blood bank.The user 
              can look into the availablity of blood,add or remove donors and recepients,manage the 
              blood stock, developed using HTML,CSS,PHP"           
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
