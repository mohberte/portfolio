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
              <br />I am fluent in classics like
              <i>
                <b className="purple"> Java, Javascript and HTML Css. </b>
              </i>
              <br />
              <br />
              My areas of interest are building new &nbsp;
              <i>
                <b className="purple">
                  Web Technologies, Application developement{' '}
                </b>{' '}
                and also <b className="purple">Clouds</b> development and deployment
              </i>
              <br />
              <br />
              My favorites languages for front end development are <b className="purple">Node.js</b> and
              <i>
                <b className="purple">
                  {' '}
                  Modern Javascript Library and Frameworks
                </b>
              </i>
              &nbsp; like
              <i>
                <b className="purple"> React.js</b>
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
