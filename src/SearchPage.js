import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { withAuth0 } from '@auth0/auth0-react';

import {Card, Form, Button} from 'react-bootstrap';

class SearchPage extends React.Component {


  render() {
    return (
      <>
        <Card style={{ width: '18rem', marginBottom: '10px' }} text="white" bg="dark">
          <Card.Body>
          <Form onSubmit={this.props.onSubmit}>
                <Form.Group controlId="location">
                  <Form.Label>Search by Location</Form.Label>
                  <Form.Control type="string" placeholder="Enter Location Here!" />
                </Form.Group>
              <Button variant="primary" type="submit">Find Stuff</Button>
              </Form>
          </Card.Body>
        </Card>
      </>
    );
  }
}
export default withAuth0(SearchPage);
