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
              title="Healify"
              description="Healify is a powerful iOS app created to assist individuals who want to stop drinking alcohol built using SwiftUI, UIKit. Healify has all the features you need to achieve your goals. If you need to stop drinking, the app provides a range of tools to help you with your drinking cessation journey.
              "
              appLink="https://apps.apple.com/us/app/healify-drinking-cessation-app/id1641046254"              
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
