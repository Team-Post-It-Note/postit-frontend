import React from 'react';
import { Carousel, Jumbotron } from 'react-bootstrap';
import '../css/LandingJumbo.css';

class LandingJumbo extends React.Component {
  render() {
    return (
      <>
        <Jumbotron>
          <div className="intro">
            <h2>New in town?</h2>
            <h2>Looking for a local brew?</h2>
            <h2>Or someplace to watch the game?</h2>
            <h2>Let us tell you</h2>
            <h2>Where 2 Go Now</h2>
          </div>
          <Carousel 
            fade indicators="false"
            interval="4000"
            className="carousel"
          >
            {/* Will map carousel.item to show data */}
            <Carousel.Item className="carouselItem">
              <img
                className="d-block w-65"
                src="/images/jumboLanding/brewery.jpg"
                alt='thing'
              />
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
                src="/images/jumboLanding/bakery.jpg"
                alt='thing'
              />
            </Carousel.Item>
          </Carousel>
        </Jumbotron>
      </>
    );
  }

}
export default LandingJumbo;
