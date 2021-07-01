import { withAuth0 } from '@auth0/auth0-react';
import React from 'react';
import {Accordion, Card, Button} from 'react-bootstrap';

class Restaurants extends React.Component {
  render() {
    return (
      <>
      {this.props.rests ?
          <Accordion>
          <Card>
            <Card.Header>
              <Accordion.Toggle as={Button} variant="link" eventKey="0">
                <h1>Local Restaurants</h1>
              </Accordion.Toggle>
            </Card.Header>
            <Accordion.Collapse eventKey="0">
              <Card.Body>
              {this.props.rests.map(rest => {
                return (
                  <Card.Footer>
                    <Card.Text>{rest.name}</Card.Text>
                    <Card.Text>Address: {rest.location}</Card.Text>
                    <Card.Text>Rating: {rest.rating}</Card.Text>
                    <Card.Text>URL: {rest.url}</Card.Text>
                    <Card.Text>Phone: {rest.phone}</Card.Text>
                    <Button onClick={() => this.props.onClick(rest)}>Add to favorites</Button>
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

export default withAuth0(Restaurants);