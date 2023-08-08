import React from 'react'
import {Container, Row, Col} from 'react-bootstrap'
import ProjectCard from './ProjectCards'
import Particle from '../Particle'
import MovieHub from '../../Assets/Projects/MovieHub.png'

import eCom from '../../Assets/Projects/E-com.png'
import jsomBlog from '../../Assets/Projects/jsomBlog.png'
import taskify from '../../Assets/Projects/Taskify.png'
import aF from '../../Assets/Projects/artisteeF.png'
import aA from '../../Assets/Projects/artisteeA.png'
import easyCode from '../../Assets/Projects/easy-code.png'

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{color: 'white'}}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{justifyContent: 'center', paddingBottom: '10px'}}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={MovieHub}
              isBlog={false}
              title="MovieHub"
              description="A hub that recommends movies to watch"
              link="https://github.com/mohberte/MovieHub"
              liveLink="https://movie-app-seven-swart.vercel.app/"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  )
}

export default Projects
