import { withAuth0 } from '@auth0/auth0-react';
import React from 'react';

class About extends React.Component {
  render(){
    return(
      <h1>I am about</h1>
    );
  }
}

export default withAuth0(About);