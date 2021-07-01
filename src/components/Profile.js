import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { withAuth0 } from '@auth0/auth0-react';
import './Profile.css';
import SavedBreweries from './SavedBreweries.js';
import SavedEvents from './SavedEvents.js';

import {Card, Jumbotron} from 'react-bootstrap';


class Profile extends React.Component {


  render() {
    return (
      <>
        <Card 
          className="user-profile"
          text="white" 
          bg="dark"
        >
          <Card.Body>
            <Card.Title>Username: {this.props.auth0.user.nickname}</Card.Title>
            <Card.Img 
              className="profile-image"
              variant="top" 
              src={this.props.auth0.user.picture} 
            />
            <Card.Text>Email address: {this.props.auth0.user.email}</Card.Text>
          </Card.Body>
        </Card>
        <Jumbotron>
          <SavedBreweries/>
          <SavedEvents/>
        </Jumbotron>
      </>
    )
  }
}
export default withAuth0(Profile)