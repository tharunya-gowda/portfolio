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
        <br></br>
        <h1 className="project-heading">
          <strong className="purple">iOS </strong> Projects
        </h1>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={3} className="project-card">
            <ProjectCard
              imgPath={blockerX}
              title="BlockerX"
              description="A powerful iOS app that provides advanced porn blocking using VPN technology. In this project I majorly worked on SwiftUI, VPNTunnel, Restful APIs, Handling IAP and Subscriptions."
              appLink="https://apps.apple.com/us/app/blockerx-porn-blocker-ad-block/id1522854086"
            />
          </Col>

          <Col md={3} className="project-card">
            <ProjectCard
              imgPath={zenze}
              title="Zenze"
              description="Zenze is an app that will help users to keep distractive apps away and limit phone time. The app is built using SwiftUI, UIKit, and leveraging Apple's Screentime APIs (Family Controls, Managed Settings, Device Activity)"
              appLink="https://apps.apple.com/us/app/zenze-limit-phone-time/id6447419790"
            />
          </Col>

          <Col md={3} className="project-card">
            <ProjectCard
              imgPath={blockerxLite}
              title="BlockerX Lite"
              description="BlockerX Lite is an app that will help users to keep exlicit content away and block apps and websites time. The app is built using SwiftUI, UIKit, and leveraging Apple's Screentime APIs (Family Controls, Managed Settings, Device Activity)"
              appLink="https://apps.apple.com/us/app/blockerx-lite-block-apps/id6462085247"
            />
          </Col>

          <Col md={3} className="project-card">
            <ProjectCard
              imgPath={healify}
              title="Healify"
              description="Healify is a powerful iOS app created to assist individuals who want to stop drinking alcohol built using SwiftUI, UIKit. Healify has all the features you need to achieve your goals. If you need to stop drinking, the app provides a range of tools to help you with your drinking cessation journey.
              "
              appLink="https://apps.apple.com/us/app/healify-drinking-cessation-app/id1641046254"              
            />
          </Col>
        </Row>
        <br></br>
        <h1 className="project-heading">
          <strong className="purple">Other </strong> Projects
        </h1>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={3} className="project-card">
            <OtherProjectCard
              title="Whoof"
              description="A ML-powered mobile app focused on predicting abnormalities in the dog's vitals and 
              health condition with the help of IoT sensors, and to interact with the food feeder to feed 
              the dog."
              ghLink="https://github.com/suchithnayaka/Whoof"              
            />
          </Col>
          <Col md={3} className="project-card">
            <OtherProjectCard
              title="SoS-IT"
              description="A multi domain ecommerce mobile application where the user can act as both buyer and 
              delivery agent, developed using kotlin."
              ghLink="https://github.com/suchithnayaka/SoS-IT"              
            />
          </Col>
          <Col md={3} className="project-card">
            <OtherProjectCard
              title="Pill'O'Clock"
              description="A android mobile application where the user can set remainders to take their medicine on time and also track thier stock, developed using kotlin."
              ghLink="https://github.com/suchithnayaka/SoS-IT"              
            />
          </Col>
          <Col md={3} className="project-card">
            <OtherProjectCard
              title="Portfolio"
              description="A ReactJS application where I showcse my skillset and projects I have worked on, developed using ReactJS, HTML, CSS."
              ghLink="https://github.com/suchithnayaka/suchithnayaka.github.io"              
            />
          </Col>
          <Col md={3} className="project-card">
            <OtherProjectCard
              title="Cine-ster(Movie Database Management System)"
              description="A web application for the purpose of online booking and viewing available movie tickets 
              from nearby theatres developed using HTML, CSS, JavaScript, MySQL and PHP"
              ghLink="https://github.com/suchithnayaka/Movie-Database-Management-System"              
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
