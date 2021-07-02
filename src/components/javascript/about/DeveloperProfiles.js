import { withAuth0 } from '@auth0/auth0-react';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import '../../css/DeveloperProfiles.css';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import React from 'react';

class DeveloperProfiles extends React.Component {
  
  render(){
    return(
      <>
        <Container>
          <Row>
            <Col xs={8} md={4}>
              {<Card
                bg="dark"
                className="profile-cards"
              >
                <Card.Img variant="top" src="/images/profilepics/miriamSilva.jpg"/>
                <Card.Body>
                  <Card.Title>Miriam Silva</Card.Title>
                  <Card.Subtitle className="mb-2 text-muted"></Card.Subtitle>
                  <Card.Text>
                    Software Developer  with an affinity for writing code, reading and taking pictures of her cats
                  </Card.Text>
                  <Card.Link href="http://linkedin.com/in/mirmsilva">LinkedIn</Card.Link>
                  <Card.Link href="https://github.com/mirmsilva">Github</Card.Link>
                </Card.Body>
              </Card>}
            </Col>
            <Col xs={8} md={4}>
              {<Card
                bg="dark"
                className="profile-cards"
              >
                <Card.Img variant="top" src="/images/profilepics/patrickLaurion.jpeg"/>
                <Card.Body class="profile-cards">
                  <Card.Title>Patrick Laurion</Card.Title>
                  <Card.Subtitle className="mb-2 text-muted"></Card.Subtitle>
                  <Card.Text>
                    Trucker turned Software Developer US Navy Veteran and Proud Father Recently Developed taste for Learning 
                  </Card.Text>
                  <Card.Link href="https://www.linkedin.com/in/patricklaurion1989/">LinkedIn</Card.Link>
                  <Card.Link href="https://github.com/plaurion1989">Github</Card.Link>
                </Card.Body>
              </Card>}
            </Col>
            <Col xs={8} md={4}>
              {<Card
                bg="dark"
                className="profile-cards"
              >
                <Card.Img variant="top" src="/images/profilepics/joshuaHaddock.jpg"/>
                <Card.Body class="profile-cards">
                  <Card.Title>Joshua Haddock</Card.Title>
                  <Card.Subtitle className="mb-2 text-muted"></Card.Subtitle>
                  <Card.Text>
                    Developer | Writer | Video game enthusiast. Former hospitality professional with an English BA and passion for creating.
                  </Card.Text>
                  <Card.Link href="https://www.linkedin.com/in/joshuahaddock/">LinkedIn</Card.Link>
                  <Card.Link href="https://github.com/joshhaddock88">Github</Card.Link>
                </Card.Body>
              </Card>}
            </Col>
          </Row>
        </Container>
      </>
    );
  }
}

export default withAuth0(DeveloperProfiles);