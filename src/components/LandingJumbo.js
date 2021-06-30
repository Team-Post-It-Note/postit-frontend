import React from 'react';
import { Jumbotron, Carousel } from 'react-bootstrap';
import './LandingJumbo.css';

class LandingJumbo extends React.Component {
  render() {
    return (

      <Jumbotron>
        <Carousel>
          {/* Will map carousel.item to show data */}
          <Carousel.Item className="carouselItem">
            <img
              className="d-block w-65"
              src="/images/jumboLanding/chanan-greenblatt-wNQ4lFafIfI-unsplash.jpg"
              alt='thing'
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-65"
              src="/images/jumboLanding/preston-goff-8lUrRQ8CflI-unsplash.jpg"
              alt='thing'
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-65"
              src="/images/jumboLanding/rana-sawalha-W_-6PWGbYaU-unsplash (1).jpg"
              alt='thing'
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-65"
              src="/images/jumboLanding/sacha-verheij-5bwgW8_9OPs-unsplash.jpg"
              alt='thing'
            />
          </Carousel.Item>
        </Carousel>
        <h2>Traveling? New To The City? Looking For Something New?</h2>
        <h4>Let us help you plan your day!</h4>
      </Jumbotron>
    );
  }

}
export default LandingJumbo;
