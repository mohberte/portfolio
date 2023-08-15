import {Container, Row, Col} from 'react-bootstrap'
import ProjectCard from './ProjectCards'
import Particle from '../Particle'
import MovieHub from '../../Assets/Projects/MovieHub.png'
import EcommerceStore from '../../Assets/Projects/EcommerceStore.png'
import OttawaExplorer from '../../Assets/Projects/OttawaExplorer.png'


function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Projects </strong>
        </h1>
        <p style={{color: 'white'}}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{justifyContent: 'center', paddingBottom: '10px'}}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={EcommerceStore}
              isBlog={false}
              title="Nextjs Ecommerce"
              description="A fully responsive ecommerce website with nextJs. It features a sanity backend that stores the data. The payment is processed via a stripe integration"
              link="https://github.com/mohberte/Stripe-ecommerce"
              liveLink="https://stripe-ecommerce-omega.vercel.app/"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={MovieHub}
              isBlog={false}
              title="Rest Api MovieHub"
              description="Fully responsive with dark mode built using React, Chakra Ui. Makes rest calls to the TMDb API using zustand.  "
              link="https://github.com/mohberte/MovieHub"
              liveLink="https://movie-app-seven-swart.vercel.app/"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={OttawaExplorer}
              isBlog={false}
              title="OttawaExplorer"
              description="A landing page for a tourism company features the modern tailwind css best pratices and animation libraries"
              link="https://github.com/mohberte/OttawaExplorer"
              liveLink="https://ottawa.vercel.app/"
            />
          </Col>
        </Row>
        
      </Container>
    </Container>
  )
}

export default Projects
