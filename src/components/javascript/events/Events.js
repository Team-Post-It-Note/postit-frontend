import { withAuth0 } from '@auth0/auth0-react';
import '../../css/Events.css'
import React from 'react';
import {Accordion, Card, Button} from 'react-bootstrap';

class Events extends React.Component {
  render() {
    return (
      <>
      {this.props.events ?
          <Accordion>
          <Card
            classname="eventCard"
          >
            <Card.Header
              id="eventHeader"
            >
              <Accordion.Toggle as={Button} variant="link" eventKey="0">
                <h1>Local Events</h1>
              </Accordion.Toggle>
            </Card.Header>
            <Accordion.Collapse eventKey="0">
              <Card.Body>
              {this.props.events.map(event => {
                return (
                  <Card.Footer>
                    <Card.Text>{event.name}</Card.Text>
                    <Card.Text>Venue: {event.venue}</Card.Text>
                    <Card.Text>Start Date: {event.startDate}</Card.Text>
                    <Card.Text>Start Time: {event.startTime}</Card.Text>
                    <Card.Text><a href={event.url}>Click to View Website</a></Card.Text>
                    <Button onClick={() => this.props.onClick(event)}>Add to favorites</Button>
                  </Card.Footer>
                )
              })}
              </Card.Body>
            </Accordion.Collapse>
          </Card>
        </Accordion>
        : ''}
        </>
    )
  }
}

export default withAuth0(Events);