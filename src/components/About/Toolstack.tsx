import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  SiLinux,
  SiVisualstudiocode,
  SiPostman,
  SiSpringboot,
  SiSpringsecurity
} from "react-icons/si";
import { IoLogoVercel } from "react-icons/io5";

const toolIcons = [
  SiLinux,
  SiVisualstudiocode,
  IoLogoVercel,
  SiPostman,
  SiSpringboot,
  SiSpringsecurity
];

function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      {toolIcons.map((Icon, index) => (
        <Col key={index} xs={4} md={2} className="tech-icons">
          <Icon />
        </Col>
      ))}
    </Row>
  );
}

export default Toolstack;
