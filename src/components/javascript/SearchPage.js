import axios from 'axios';
import Breweries from './breweries/Breweries.js';
import Events from './events/Events';
import { Jumbotron } from 'react-bootstrap';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { withAuth0 } from '@auth0/auth0-react';

import {Card, Form, Button} from 'react-bootstrap';
import Restaurants from './restaurants/Restaurants.js';

const server =process.env.REACT_APP_SERVER || `http://localhost:3001`;

class SearchPage extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      breweries: [],
      events: [],
      rests: [],
      newEvents: [],
      newBreweries:[],
      newRests: [],
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
      return a.rating > b.rating ? 1 : -1
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


  addEvents = async (event) => {

    let config = await this.getConfig();
    const responseData = await axios.post(`${server}/tickets`, event, config);
    let addedEvent = this.state.newEvents
    addedEvent.push(responseData.data);
    this.setState({ newEvents: addedEvent});
    console.log(this.state.newEvents);
  };
  addBreweries = async (brewery) => {
    let config = await this.getConfig();
    const responseData = await axios.post(`${server}/breweries`, brewery, config);
    let addedBrewery = this.state.newBreweries
    addedBrewery.push(responseData.data);
    this.setState({ newBreweries: addedBrewery});
    console.log(this.state.newBreweries);
  };
  addRests = async (rest) => {

    let config = await this.getConfig();
    const responseData = await axios.post(`${server}/rests`, rest, config);
    let addedRest = this.state.newRests
    addedRest.push(responseData.data);
    console.log(responseData.data);
    this.setState({ newRests: addedRest});
    console.log(this.state.newRests);
  };



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
          <Breweries onClick={this.addBreweries}
            breweries = {this.state.breweries}
          />
          <Events onClick={this.addEvents}
            events = {this.state.events}
          />
          <Restaurants onClick={this.addRests}
            rests = {this.state.rests}/>
        </Jumbotron>
        : ''}
      </>
    );
  }
}
export default withAuth0(SearchPage);
