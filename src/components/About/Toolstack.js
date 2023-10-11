import React from "react";
import { Col, Row } from "react-bootstrap";
import { DiJira } from "react-icons/di";
import {
  SiXcode,
  SiPostman,
  SiIos,
  SiMacos,
  SiMicrosoftteams,
  SiVisualstudio,
  SiAndroidstudio,
  SiAdobexd,
  SiAdobeillustrator,
  SiFigma,
  SiConfluence,
} from "react-icons/si";

function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tools-icons">
        <SiVisualstudio/>
        <p>Visual Studio</p>
      </Col>
      <Col xs={4} md={2} className="tools-icons">
        <DiJira />
        <p>Jira</p>
      </Col>
      <Col xs={4} md={2} className="tools-icons">
        <SiConfluence />
        <p>Confluence</p>
      </Col>
      <Col xs={4} md={2} className="tools-icons">
        <SiPostman />
        <p>Postman</p>
      </Col>
      <Col xs={4} md={2} className="tools-icons">
        <SiMicrosoftteams />
        <p>Microsoft Teams</p>
      </Col>
      <Col xs={4} md={2} className="tools-icons">
        <SiAndroidstudio/>
        <p>Android Studio</p>
      </Col>
      <Col xs={4} md={2} className="tools-icons">
        <SiFigma/>
        <p>Figma</p>
      </Col>
    </Row>
  );
}

export default Toolstack;
