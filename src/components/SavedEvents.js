import { withAuth0 } from '@auth0/auth0-react';
import React from 'react';
import {Accordion, Card, Button} from 'react-bootstrap';
import axios from 'axios';
const server =`http://localhost:3001` || process.env.REACT_APP_SERVER;

class Events extends React.Component {
  constructor (props){
    super(props);
    this.state = {
      eventArray:[]
    };
  };
  

  getConfig = async () => {
    const { getIdTokenClaims } = this.props.auth0;
    let tokenClaims = await getIdTokenClaims();
    const jwt = tokenClaims.__raw;

    const config = {
      headers: { "Authorization": `Bearer ${jwt}` }
    };
    return config;
  }

  async componentDidMount() {
    let config = await this.getConfig();
    let eventArray = await axios.get(`${server}/tickets`, config);
    console.log(eventArray.data);
    this.setState({ eventArray: eventArray.data })
  }
  deleteEvent = async (id) => {
    let config = await this.getConfig();
    let response = await axios.delete(`${server}/tickets/${id}`, config);
    console.log(response);
    let updatedArray = this.state.eventArray.filter(event => event._id !== id);
    this.setState({ eventArray: updatedArray });
  }


  render() {
    return (
      <>
      
          <Accordion>
          <Card>
            <Card.Header>
              <Accordion.Toggle as={Button} variant="link" eventKey="0">
                <h1>Your Saved Events</h1>
              </Accordion.Toggle>
            </Card.Header>
            <Accordion.Collapse eventKey="0">
              <Card.Body>
              {this.state.eventArray.map(event => {
                return (
                  <Card.Footer>
                    <Card.Text>{event.name}</Card.Text>
                    <Card.Text>Venue: {event.venue}</Card.Text>
                    <Card.Text>Start Date: {event.startDate}</Card.Text>
                    <Card.Text>Start Time: {event.startTime}</Card.Text>
                    <Button variant="danger" onClick={() => this.deleteEvent(event._id)}>Remove</Button>
                  </Card.Footer>
                )
              })}
              </Card.Body>
            </Accordion.Collapse>
          </Card>
        </Accordion>
        
        </>
    )
  }
}

export default withAuth0(Events);