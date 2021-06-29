import axios from 'axios';
import Breweries from './Breweries.js';
import Events from './Events';
import { Jumbotron } from 'react-bootstrap';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { withAuth0 } from '@auth0/auth0-react';

import {Card, Form, Button} from 'react-bootstrap';

const server = process.env.REACT_APP_SERVER || 3001;

class SearchPage extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      breweries: []
    }
  }

  brewerySearch = async (e) => {
    let breweryQuery = await axios.get(`${server}/breweriesapi?city=${e.target.location.value}`);
    console.log(breweryQuery);
    const brewery = breweryQuery;
    console.log(brewery.data);

    this.setState({
      breweries: brewery.data
    })
  }

  handleSubmit = async(e) => {
    e.preventDefault();
    try {
      this.brewerySearch(e);
    } catch (err) {
      console.log(err);
    }
  }
  
  render() {
    return (
      <>
        <Card style={{ width: '18rem', marginBottom: '10px' }} text="white" bg="dark">
          <Card.Body>
          <Form onSubmit={this.handleSubmit}>
                <Form.Group controlId="location">
                  <Form.Label>Search by Location</Form.Label>
                  <Form.Control type="string" placeholder="Enter Location Here!" />
                </Form.Group>
              <Button variant="primary" type="submit">Find Stuff</Button>
              </Form>
          </Card.Body>
        </Card>
        <Jumbotron>
          <Breweries
            breweries = {this.state.breweries}
          />
          <Events 

          />
        </Jumbotron>
      </>
    );
  }
}
export default withAuth0(SearchPage);
