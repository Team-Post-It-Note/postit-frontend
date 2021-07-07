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
            <h2 id="landingLogo">Where 2 Go Now</h2>
          </div>
          <Carousel 
            fade indicators="false"
            interval="4000"
            className="carousel"
          >
            {/* Will map carousel.item to show data */}
            {/* let's make this actually a map! */}
            { ['brewery', 'football', 'cityscape', 'bakery'].map(place => (
              <Carousel.Item className="carouselItem">
              <img
                className="d-block w-65"
                src={`/images/jumboLanding/${place}.jpg`}
                alt={place}
              />
            </Carousel.Item>
            ))}
          </Carousel>
        </Jumbotron>
      </>
    );
  }

}
export default LandingJumbo;
