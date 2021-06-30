import { withAuth0 } from '@auth0/auth0-react';
import DeveloperProfiles from './DeveloperProfiles.js';
import { Jumbotron } from 'react-bootstrap';
import React from 'react';

class About extends React.Component {

  render() {
    return(
      <>
        <Jumbotron>
          <h1>Meet the Team!</h1>
          <DeveloperProfiles

          />
        </Jumbotron>
      </>
    )
  }
}

export default withAuth0(About);