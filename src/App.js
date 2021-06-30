import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import LandingJumbo from './components/LandingJumbo.js';
import Loading from './components/Loading.js';
import About from './components/About.js';
import Header from './components/Header.js';
import Footer from './components/Footer.js';
import SearchPage from './components/SearchPage.js';
import Profile from './components/Profile.js';
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
