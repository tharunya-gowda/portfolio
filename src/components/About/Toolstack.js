import React from "react";
import { Col, Row } from "react-bootstrap";
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
} from "react-icons/si";

function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tools-icons">
        <SiMacos />
        <p>Mac OS</p>
      </Col>
      <Col xs={4} md={2} className="tools-icons">
        <SiIos />
        <p>iOS</p>
      </Col>
      <Col xs={4} md={2} className="tools-icons">
        <SiXcode />
        <p>XCode</p>
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
        <SiVisualstudio/>
        <p>Visual Studio</p>
      </Col>
      <Col xs={4} md={2} className="tools-icons">
        <SiAndroidstudio/>
        <p>Android Studio</p>
      </Col>
      <Col xs={4} md={2} className="tools-icons">
        <SiAdobexd/>
        <p>Adobe XD</p>
      </Col>
      <Col xs={4} md={2} className="tools-icons">
        <SiAdobeillustrator/>
        <p>Adobe Illustrator</p>
      </Col>
      <Col xs={4} md={2} className="tools-icons">
        <SiFigma/>
        <p>Figma</p>
      </Col>
    </Row>
  );
}

export default Toolstack;
