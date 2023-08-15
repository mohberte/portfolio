import { Container, Row, Col } from "react-bootstrap";
import Techstack from "./Techstack";
import Toolstack from "./Toolstack";

function About() {
  return (
    <Container fluid className="about-section">
      <Container>
        <Row style={{ justifyContent: "center", padding: "10px" }}>
          <Col md={8} className="home-about-description">
            <h1 style={{fontSize: '2.6em'}}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
              I have been programming for close to a decade
              <br />
              <br />I am proficient in languages like
              <i>
                <b className="purple"> HTML CSS, Javascript and Java. </b>
              </i>
              <br />
              <br />
              I like building new&nbsp;
              <i>
                <b className="purple">
                  Web applications{' '}
                </b>{' '}
                and deploying them to the <b className="purple">Cloud</b> 
              </i>
              <br />
              <br />
              My favorites languages for front end development are <b className="purple">HTML </b>,
              <b className="purple">
                
               CSS </b> and <b className="purple">  typescript
               <br /><br />
               </b> I combine that with
              <i>
                <b className="purple">
                  {' '}
                  Modern Javascript Library and Frameworks
                </b>
              </i>
              &nbsp; like
              <i>
                <b className="purple"> React.js</b> and <b className="purple"> Next.js </b>
                as well as <b className="purple">Tailwind CSS  </b> and <b className="purple"> 
               Chakra Ui</b> to create beautiful and fast websites
              </i>
            </p>
          </Col>
          
        </Row>
        <h1 className="project-heading">
          Professional <strong className="purple">Skillset </strong>
        </h1>

        <Techstack />

        <h1 className="project-heading">
          <strong className="purple">Tools</strong> I use
        </h1>
        <Toolstack />

        {/* <Github /> */}
      </Container>
    </Container>
  );
}

export default About;
