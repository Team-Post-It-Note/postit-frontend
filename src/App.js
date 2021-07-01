import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import LandingJumbo from './components/javascript/LandingJumbo.js';
import Loading from './components/javascript/Loading.js';
import About from './components/javascript/about/About.js';
import Header from './components/javascript/header-footer/Header.js';
import Footer from './components/javascript/header-footer/Footer.js';
import SearchPage from './components/javascript/SearchPage.js';
import Profile from './components/javascript/Profile.js';
import { withAuth0 } from '@auth0/auth0-react';
import './App.css';

class App extends React.Component {
  render() {
    const { user, isAuthenticated, isLoading } = this.props.auth0;
    console.log(user, isLoading);
    return (
      <>
        <Router>
          <Loading>
            <Header class="header"/>
            {isAuthenticated ? '' : <LandingJumbo />}
            <Switch>
              <Route exact path="/">
                {isAuthenticated ? <SearchPage /> : ''}
              </Route >
              <Route exact path="/profile">
                <Profile />
              </Route>
              <Route exact path="/about">
                <About />
              </Route>

            </Switch>
            <Footer />
          </Loading>
        </Router>



      </>
    );
  }
}

export default withAuth0(App);
