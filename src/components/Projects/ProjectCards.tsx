import React from 'react'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import {BiLinkExternal} from 'react-icons/bi'

function ProjectCards(props: { imgPath: string | undefined; title: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | null | undefined; description: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | null | undefined; liveLink: string | undefined; link: string | undefined; isBlog: any }) {
  return (
    <Card className="project-card-view">
      <Card.Img variant="top" src={props.imgPath} alt="card-img" />
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Card.Text style={{textAlign: 'justify'}}>
          {props.description}
        </Card.Text>
        <div
          style={{
            display: 'flex',
            justifyContent: props.liveLink ? 'space-between' : 'center',
          }}
        >
          <Button variant="primary" href={props.link} target="_blank">
            <BiLinkExternal /> &nbsp;
            {props.isBlog ? 'View Blog' : 'View Project'}
          </Button>
          {props.liveLink && (
            <Button variant="primary" href={props.liveLink} target="_blank">
              <BiLinkExternal /> &nbsp; Live
            </Button>
          )}
        </div>
      </Card.Body>
    </Card>
  )
}
export default ProjectCards
