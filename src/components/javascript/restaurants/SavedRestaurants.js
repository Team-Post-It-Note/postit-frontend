import { withAuth0 } from '@auth0/auth0-react';
import React from 'react';
import {Accordion, Card, Button} from 'react-bootstrap';
import axios from 'axios';
import '../../css/SavedRestaurants.css';
const server = process.env.REACT_APP_SERVER || `http://localhost:3001`;

class Events extends React.Component {
  constructor (props){
    super(props);
    this.state = {
      restArray:[]
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
    let restArray = await axios.get(`${server}/rests`, config);
    console.log(restArray.data);
    this.setState({ restArray: restArray.data })
  }
  deleteRest = async (id) => {
    let config = await this.getConfig();
    let response = await axios.delete(`${server}/rests/${id}`, config);
    console.log(response);
    let updatedArray = this.state.restArray.filter(rest => rest._id !== id);
    this.setState({ restArray: updatedArray });
  }


  render() {
    return (
      <>
      
          <Accordion>
          <Card
            className="savedRestCard"
          >
            <Card.Header
              id="savedRestHeader"
            >
              <Accordion.Toggle as={Button} variant="link" eventKey="0">
                <h1>Your Saved Restaurants</h1>
              </Accordion.Toggle>
            </Card.Header>
            <Accordion.Collapse eventKey="0">
              <Card.Body>
              {this.state.restArray.map(rest => {
                return (
                  <Card.Footer>
                    <Card.Text>{rest.name}</Card.Text>
                    <Card.Text>Venue: {rest.venue}</Card.Text>
                    <Card.Text>Start Date: {rest.startDate}</Card.Text>
                    <Card.Text>Start Time: {rest.startTime}</Card.Text>
                    <Button variant="danger" onClick={() => this.deleteRest(rest._id)}>Remove</Button>
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