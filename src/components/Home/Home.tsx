import React from 'react'
import {Container, Row, Col} from 'react-bootstrap'
import { AiFillGithub } from 'react-icons/ai'
import { FaLinkedinIn } from 'react-icons/fa'
import homeLogo from '../../Assets/homeLogo.png'
import About from '../About/About'
import Particle from '../Particle'
import Projects from '../Projects/Projects'

import Resume from '../Resume/Resume'
import Type from './Type'

function Home() {
  return (
    <section>
      <Container fluid className="home-section" id="home">
        <Particle />
        <Container className="home-content">
          <Row>
            <Col md={7} className="home-header">
              <h1 style={{paddingBottom: 15}} className="heading">
                Hi There!{' '}
                <span className="wave" role="img" aria-labelledby="wave">
                  👋🏻
                </span>
              </h1>

              <h1 className="heading-name">
                I'M
                <strong className="main-name"> Mohamed Berte</strong>
              </h1>

              <div style={{padding: 50, textAlign: 'left'}}>
                <Type />
              </div>
            </Col>

            <Col md={5} style={{paddingBottom: 20}}>
              <img src={homeLogo} alt="home pic" className="img-fluid" />
            </Col>
          </Row>
        </Container>
      </Container>
      {/* <Home2 /> */}


      <section id="about"><About/></section>

      <section id="project"><Projects/></section>

      <section id="resume">
  <Resume />
</section>
    
<Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <p>
              Feel free to <span className="purple">connect </span>with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/Mohberte"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>

              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/Mohberte/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
            </ul>
          </Col>
        
    </section>
  )
}

export default Home
