import Accordion from 'react-bootstrap/Accordion';
import axios from 'axios';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import React from 'react';
import '../../css/SavedBreweries.css';
import { withAuth0 } from '@auth0/auth0-react';

const server = process.env.REACT_APP_SERVER || `http://localhost:3001`;

class Breweries extends React.Component {
  constructor (props){
    super(props);
    this.state = {
      breweryArray:[]
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
    let breweryArray = await axios.get(`${server}/breweries`, config);
    console.log(breweryArray.data);
    this.setState({ breweryArray: breweryArray.data })
  }

  deleteBrewery = async (id) => {
    let config = await this.getConfig();
    let response = await axios.delete(`${server}/breweries/${id}`, config);
    console.log(response);
    let updatedArray = this.state.breweryArray.filter(brewery => brewery._id !== id);
    this.setState({ breweryArray: updatedArray });
    console.log(this.state.breweryArray)
  }

  render() {

    return (
      <>
          <Accordion>
            <Card
              className="savedBreweryCard"
            >
              <Card.Header
                id="savedBreweryHeader"
              >
                <Accordion.Toggle 
                  as={Button} 
                  variant="link" 
                  eventKey="0"
                >
                  <h1>Your Saved Breweries</h1>
                </Accordion.Toggle>
              </Card.Header>
              <Accordion.Collapse eventKey="0">
                <Card.Body>
                {this.state.breweryArray.map(brewery => {
                  return (
                    <Card.Footer>
                      <Card.Text>{brewery.name}</Card.Text>
                      <Card.Text>Address: {brewery.street}</Card.Text>
                      <Card.Text>Website: {brewery.website_url}</Card.Text>
                      <Card.Text>Phone: {brewery.phone}</Card.Text>
                      <Button variant="light" onClick={() => this.deleteBrewery(brewery._id)}>Remove</Button>
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

export default withAuth0(Breweries);
