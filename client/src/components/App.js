import React, { Component } from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';

import { auth, createUserProfile } from '../config/firebase';

import './App.css';
import AuthenticationPage from './pages/AuthenticationPage';
import HomePage from './pages/HomePage';
import ShopPage from './pages/ShopPage';
import HeaderContainer from '../containers/HeaderContainer';
import CheckoutPageContainer from '../containers/CheckoutPageContainer';

class App extends Component {
  unsubscribeFromAuth = null;

  componentDidMount() {
    const { setCurrentUser } = this.props;

    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const userRef = await createUserProfile(userAuth);

        userRef.onSnapshot(snapshot => {
          setCurrentUser({
            id: snapshot.id,
            ...snapshot.data()
          });
        });
      } else {
        setCurrentUser(userAuth);
      }
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <BrowserRouter>
        <HeaderContainer />
        <div>
          <Switch>
            <Route path="/" exact component={HomePage} />
            <Route path="/shop" component={ShopPage} />
            <Route
              path="/authentication"
              exact
              render={() =>
                this.props.currentUser ? (
                  <Redirect to="/" />
                ) : (
                  <AuthenticationPage />
                )
              }
            />
            <Route path="/checkout" exact component={CheckoutPageContainer} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
