import axios from 'axios';
import Breweries from './breweries/Breweries.js';
import Events from './events/Events';
import { Jumbotron } from 'react-bootstrap';
import React from 'react';
// since you have that import in index.js, it's not needed anywhere else
import { withAuth0 } from '@auth0/auth0-react';

import {Card, Form, Button} from 'react-bootstrap';
import Restaurants from './restaurants/Restaurants.js';

const server = process.env.REACT_APP_SERVER || `http://localhost:3001`;

class SearchPage extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      breweries: [],
      events: [],
      rests: []
      // I don't think you're using any of these in your code.
    }
  }


// ----------Search Handlers to Server-------------
  brewerySearch = async (e) => {
    let breweryQuery = await axios.get(`${server}/breweriesapi?city=${e.target.location.value}`);
    console.log(breweryQuery);
    const brewery = breweryQuery;
    console.log(brewery.data);

    this.setState({
      breweries: brewery.data,
      
    })
  }
  eventSearch = async (e) => {
    let eventQuery = await axios.get(`${server}/ticketsapi?city=${e.target.location.value}&date=${e.target.date.value}`);
    console.log(eventQuery);
    const event = eventQuery.data.sort(function(a,b){
      return a.startDate > b.startDate ? 1 : -1
    });
    console.log(event);

    this.setState({
      events: event,
    })
  }
  restSearch = async (e) => {
    let restQuery = await axios.get(`${server}/restsapi?location=${e.target.location.value}`);
    console.log(restQuery);
    const rest = restQuery.data.sort(function(a,b){
      return a.rating < b.rating ? 1 : -1
    });
    // const rest = restQuery;
    console.log(rest);

    this.setState({
      rests: rest,
      
    })
  }

  handleSubmit = async(e) => {
    e.preventDefault();
    try {
      this.brewerySearch(e);
      this.eventSearch(e);
      this.restSearch(e);
    } catch (err) {
      console.log(err);
    }
  }
// ------------Config Header for CRUD -------------

  getConfig = async () => {
    const { getIdTokenClaims } = this.props.auth0;
    let tokenClaims = await getIdTokenClaims();
    const jwt = tokenClaims.__raw;

    const config = {
      headers: { "Authorization": `Bearer ${jwt}` }
    };
    return config;
  }

  // ----------------Add Happens Here--------------

  // this can be simplified to a single function that takes in the URL as a param as well
  postThing = async (thing, url) => {
    let config = await this.getConfig();
    await axios.post(`${server}${url}`, thing, config);
    // no need to save the response data if we're not doing anything with it
  }

  // -------------Render Stuff/ Pass Props----------
  
  render() {
    return (
      <>
        <Card style={{ width: '26.2rem', marginBottom: '10px' }} text="white" bg="dark">
          <Card.Body>
          <Form onSubmit={this.handleSubmit}>
                <Form.Group controlId="location">
                  <Form.Label>Search by Location</Form.Label>
                  <Form.Control type="string" placeholder="Enter Location Here!" />
                </Form.Group>
                <Form.Group controlId="date">
                <Form.Label>Select Date</Form.Label>
                  <Form.Control type="date" name="date" />
                </Form.Group>
              <Button variant="primary" type="submit">Find Stuff</Button>
              </Form>
          </Card.Body>
        </Card>
        {this.state.events[1] ?

        <Jumbotron>
          <Breweries onClick={this.postThing}
            breweries = {this.state.breweries}
            newBreweries = {this.state.newBreweries}
          />
          <Events onClick={this.postThing}
            events = {this.state.events}
          />
          <Restaurants onClick={this.postThing}
            rests = {this.state.rests}/>
        </Jumbotron>
        : ''}
      </>
    );
  }
}
export default withAuth0(SearchPage);
