import React from "react";
import { Col, Row } from "react-bootstrap";
import { CgCPlusPlus } from "react-icons/cg";
import {
  DiSwift,
  DiReact,
  DiNodejs,
  DiMongodb,
  DiPython,
  DiGit,
  DiJava,
  DiAndroid,
  DiMysql,
  DiUikit,
  DiHtml5,
  DiPhp,
  DiCss3,
  DiJavascript
} from "react-icons/di";
import {
  SiIos,
  SiFirebase,
  SiKotlin,
  SiCocoapods,
  SiMacos
} from "react-icons/si";

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <DiSwift />
        <p>Swift</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiUikit />
        <p>UIKit</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiCocoapods />
        <p>Cocoapods</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiKotlin />
        <p>Kotlin</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiAndroid />
        <p>Android</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiGit />
        <p>Git</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiFirebase />
        <p>Firebase</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiPython/>
        <p>Python</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiJava />
        <p>Java</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiMysql />
        <p>MySQL</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiMongodb />
        <p>MongoDB</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiPhp />
        <p>PHP</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiJavascript />
        <p>Javascript</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiHtml5 />
        <p>HTML</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiCss3/>
        <p>CSS</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiNodejs />
        <p>Node.js</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiReact />
        <p>React</p>
      </Col>
    </Row>
  );
}

export default Techstack;
