import { withAuth0 } from '@auth0/auth0-react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Jumbotron from 'react-bootstrap/Jumbotron';

import React from 'react';

class Breweries extends React.Component {

  render() {
    
    return(
      <>
        
        {this.props.breweries ?
        <Jumbotron>
          <h1>Local Breweries</h1>
        {this.props.breweries.map(brewery => {
          return (
          <Card>
            <Card.Text>{brewery.name}</Card.Text>
            <Card.Text>Address: {brewery.street}</Card.Text>
            <Card.Text>Website: {brewery.website_url}</Card.Text>
            <Card.Text>Phone: {brewery.phone}</Card.Text>
            <Button>Add to favorites</Button>
          </Card>
        )})} </Jumbotron>: ''}
      </>
    )
  }
}

export default withAuth0(Breweries);