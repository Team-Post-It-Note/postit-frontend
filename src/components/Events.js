import { withAuth0 } from '@auth0/auth0-react';
import React from 'react';

class Events extends React.Component {
  render() {
    return (
      <h1>We exist</h1>
    )
  }
}

export default withAuth0(Events);