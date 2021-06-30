import React from 'react';
import { Jumbotron, Carousel } from 'react-bootstrap';
import './LandingJumbo.css';

class LandingJumbo extends React.Component {
  render() {
    return (
      <>
        <Carousel fade indicators="false">
          {/* Will map carousel.item to show data */}
          <Carousel.Item className="carouselItem">
            <img
              className="d-block w-65"
              src="/images/jumboLanding/brewery.jpg"
              alt='thing'
            />
            <Carousel.Caption>
              <h3>Beer enthusiast?</h3>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-65"
              src="/images/jumboLanding/football.jpg"
              alt='thing'
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-65"
              src="/images/jumboLanding/cityscape.jpg"
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
      </>
    );
  }

}
export default LandingJumbo;
