import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import LandingJumbo from './LandingJumbo.js';
import Loading from './Loading.js';
import About from './About.js';
import LoginButton from './LoginButton.js';
import Header from './Header.js';
import Footer from './Footer.js';
import SearchPage from './SearchPage.js';
import Profile from './Profile.js';
import { withAuth0 } from '@auth0/auth0-react';

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
            {isAuthenticated ? '' : <LoginButton/>}
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
