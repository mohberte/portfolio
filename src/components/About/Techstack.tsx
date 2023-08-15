import { Col, Row } from 'react-bootstrap';
import {
  DiJavascript1,
  DiReact,
  DiNodejs,
  DiGit,
  DiJava} from 'react-icons/di';
import {
  SiFirebase,
  SiTypescript,
  SiAmazonaws,
  SiSpring,
  SiSpringboot,
  SiSpringsecurity,
  SiMysql,
} from 'react-icons/si';

const techIcons = [
  DiJava,
  DiJavascript1,
  DiReact,
  SiSpring,
  SiMysql,
  SiTypescript,
  SiAmazonaws,
  DiGit,
];

function Techstack() {
  return (
    <Row style={{ justifyContent: 'center', paddingBottom: '50px' }}>
      {techIcons.map((Icon, index) => (
        <Col key={index} xs={4} md={2} className="tech-icons">
          <Icon />
        </Col>
      ))}
    </Row>
  );
}

export default Techstack;
