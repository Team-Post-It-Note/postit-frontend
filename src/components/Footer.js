import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import './Footer.css';

class Footer extends React.Component {
  render() {
    return(
      <Navbar collapseOnSelect expand="lg" variant="light">
        <Navbar.Brand>&copy; </Navbar.Brand>
        <Link to="/about" style={{ align : 'center'}}>About</Link>
      </Navbar>
    );
  }
}

export default Footer;
