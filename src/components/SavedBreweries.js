import { withAuth0 } from '@auth0/auth0-react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Accordion from 'react-bootstrap/Accordion';

import React from 'react';

class Breweries extends React.Component {

  render() {

    return (
      <>

        {this.props.breweries ?
          <Accordion>
            <Card>
              <Card.Header>
                <Accordion.Toggle as={Button} variant="link" eventKey="0">
                  <h1>Local Breweries</h1>
                </Accordion.Toggle>
              </Card.Header>
              <Accordion.Collapse eventKey="0">
                <Card.Body>
                {this.props.breweries.map(brewery => {
                  return (
                    <Card.Footer>
                      <Card.Text>{brewery.name}</Card.Text>
                      <Card.Text>Address: {brewery.street}</Card.Text>
                      <Card.Text>Website: {brewery.website_url}</Card.Text>
                      <Card.Text>Phone: {brewery.phone}</Card.Text>
                      <Button onClick={() => this.props.onClick(brewery)}>Add to favorites</Button>
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

export default withAuth0(Breweries);