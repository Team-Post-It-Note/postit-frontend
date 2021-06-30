import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import LogoutButton from './LogoutButton.js';
import { withAuth0 } from '@auth0/auth0-react';
import './Header.css';

class Header extends React.Component {
  render() {
    return(
      <Navbar collapseOnSelect expand="lg" className="navBar" variant="dark" >
        <Navbar.Brand><h1>Where To Go Now</h1></Navbar.Brand>
        <Link to="/">Search</Link>
        {this.props.auth0.isAuthenticated?<Link to="/profile">Profile</Link>:''}
        {this.props.auth0.isAuthenticated
          ? <LogoutButton />
          : ''
        }
      </Navbar>
    );
  }
}

export default withAuth0(Header);
