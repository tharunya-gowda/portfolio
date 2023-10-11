import React from "react";
import { Col, Row } from "react-bootstrap";
import { CgCPlusPlus } from "react-icons/cg";
import {
  DiPython,
  DiGit,
  DiJava,
  DiAndroid,
  DiMysql,
  DiHtml5,
  DiCss3,
  DiJavascript,
  DiDocker,
  DiReact
} from "react-icons/di";
import {
  SiFirebase,
  SiKotlin,
  SiTypescript,
  SiDjango,
  SiGrafana,
  SiAngular
} from "react-icons/si";

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={2} md={2} className="tech-icons">
        <SiTypescript/>
        <p>Typescript</p>
      </Col>
      <Col xs={2} md={2} className="tech-icons">
        <SiDjango/>
        <p>Django</p>
      </Col>
      <Col xs={2} md={2} className="tech-icons">
        <SiGrafana/>
        <p>Grafana</p>
      </Col>
      <Col xs={2} md={2} className="tech-icons">
        <SiAngular/>
        <p>Shepherd</p>
      </Col>
      <Col xs={2} md={2} className="tech-icons">
        <DiPython/>
        <p>Python</p>
      </Col>
      <Col xs={2} md={2} className="tech-icons">
        <DiHtml5 />
        <p>HTML</p>
      </Col>
      <Col xs={2} md={2} className="tech-icons">
        <DiCss3/>
        <p>CSS</p>
      </Col>
      <Col xs={2} md={2} className="tech-icons">
        <DiJavascript />
        <p>Javascript</p>
      </Col>
      <Col xs={2} md={2} className="tech-icons">
        <DiReact />
        <p>ReactJS</p>
      </Col>
      <Col xs={2} md={2} className="tech-icons">
        <DiMysql />
        <p>MySQL</p>
      </Col>
      <Col xs={2} md={2} className="tech-icons">
        <DiGit />
        <p>Git</p>
      </Col>
      <Col xs={2} md={2} className="tech-icons">
        <DiJava />
        <p>Java</p>
      </Col>
      <Col xs={2} md={2} className="tech-icons">
        <SiKotlin />
        <p>Kotlin</p>
      </Col>
      <Col xs={2} md={2} className="tech-icons">
        <DiAndroid />
        <p>Android</p>
      </Col>
      <Col xs={2} md={2} className="tech-icons">
        <DiDocker />
        <p>Docker</p>
      </Col>
    </Row>
  );
}

export default Techstack;
