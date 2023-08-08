import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Particle from '../Particle';
import Resumecontent from './ResumeContent';
import pdf from '../../Assets/Mohamed_Berte_Resume.pdf';
import { AiOutlineDownload } from 'react-icons/ai';
import ExperienceData from './ExperienceData';
import EducationData from './EducationData';
import CertificationData from './CertificationData';




const achievements = [
  {
    title: 'Top 40 of IngineousHunt contest winner',
    content: 'Received a 16GB pen drive.',
  },
  {
    title: '2nd rank in college elocution competition',
  },
];

function Resume() {
  return (
    <Container fluid className="resume-section">
      <Particle />
      <Container>
        <Row style={{ justifyContent: 'center', position: 'relative' }}>
          <Button variant="primary" href={pdf} target="_blank">
            <AiOutlineDownload />
            &nbsp;Download CV
          </Button>
        </Row>
        <Row className="resume">
          <Col md={6} className="resume-left">
            <h3 className="resume-title">Experience</h3>
            {ExperienceData.map((experience, index) => (
              <Resumecontent
                key={index}
                title={experience.title}
                date={experience.date}
                content={experience.content}
              />
            ))}
            <h3 className="resume-title">Certification</h3>
            {CertificationData.map((activity, index) => (
              <Resumecontent
                key={index}
                title={activity.title}
                date={activity.date}
                content={activity.content}
              />
            ))}
          </Col>
          <Col md={6} className="resume-right">
            <h3 className="resume-title">Education</h3>
            {EducationData.map((edu, index) => (
              <Resumecontent
                key={index}
                title={edu.title}
                date={edu.date}
                content={edu.content}
              />
            ))}

           
          </Col>
        </Row>
        <Row style={{ justifyContent: 'center', position: 'relative' }}>
          <Button variant="primary" href={pdf} target="_blank">
            <AiOutlineDownload />
            &nbsp;Download CV
          </Button>
        </Row>
      </Container>
    </Container>
  );
}

export default Resume;
