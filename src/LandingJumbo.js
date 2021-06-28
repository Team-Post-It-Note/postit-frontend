import React from 'react';
import { Jumbotron, Carousel } from 'react-bootstrap';

class LandingJumbo extends React.Component {
  render() {
    return (

      <Jumbotron>
        <Carousel>
          {/* Will map carousel.item to show data */}
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={`https://via.placeholder.com/800x400/000000/FFFFFF/?text=placeholder`}
              alt='thing'
            />
            <Carousel.Caption>
              <p>Place holding text.  unique name/location here</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={`https://via.placeholder.com/800x400/000000/FFFFFF/?text=placeholder`}
              alt='thing'
            />
            <Carousel.Caption>
              <p>Place holding text.  unique name/location here</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={`https://via.placeholder.com/800x400/000000/FFFFFF/?text=placeholder`}
              alt='thing'
            />
            <Carousel.Caption>
              <p>Place holding text.  unique name/location here</p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </Jumbotron>
    );
  }

}
export default LandingJumbo;
