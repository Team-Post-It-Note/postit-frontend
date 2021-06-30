import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { withAuth0 } from '@auth0/auth0-react';
import SavedBreweries from './SavedBreweries.js';
import SavedEvents from './SavedEvents.js';
import SavedRestaurants from './SavedRestaurants.js';

import {Card, Jumbotron} from 'react-bootstrap';


class Profile extends React.Component {


  render() {
    return (
      <>
        <Card style={{ width: '18rem', marginBottom: '10px' }} text="white" bg="dark">
          <Card.Body>
            <Card.Title>Username: {this.props.auth0.user.nickname}</Card.Title>
            <Card.Img variant="top" src={this.props.auth0.user.picture} />
            <Card.Text>Email address: {this.props.auth0.user.email}</Card.Text>
          </Card.Body>
        </Card>
        <Jumbotron>
          <SavedBreweries/>
          <SavedEvents/>
          <SavedRestaurants/>
        </Jumbotron>
      </>
    )
  }
}
export default withAuth0(Profile)