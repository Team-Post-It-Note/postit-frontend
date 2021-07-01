import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import LoginButton from './LoginButton.js';
import LogoutButton from './LogoutButton.js';
import { withAuth0 } from '@auth0/auth0-react';
import './Header.css';

class Header extends React.Component {
  render() {
    return(
      <Navbar collapseOnSelect expand="lg" id="navHeader" variant="dark" >
        <Navbar.Brand><h1 id="app-logo">Where 2 Go Now</h1></Navbar.Brand>
        {this.props.auth0.isAuthenticated
          ? <LogoutButton />
          : <LoginButton />
        }
        <Link to="/" className="headerLinks">Search</Link>
        {this.props.auth0.isAuthenticated?<Link to="/profile" className="headerLinks">Profile</Link>:''}
      </Navbar>
    );
  }
}

export default withAuth0(Header);
