import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';

class Footer extends React.Component {
  render() {
    return(
      <Navbar collapseOnSelect expand="lg" bg="blue" variant="light">
        <Navbar.Brand>&copy; </Navbar.Brand>
        <Link to="/about" style={{ align : 'center'}}>About</Link>
      </Navbar>
    );
  }
}

export default Footer;
