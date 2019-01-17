import React, {Component} from 'react';
import {AppContainerLogin, AppContainerHome} from './src/navegacao/Navigation';
import {Provider} from 'react-redux'
import {createStore, applyMiddleware} from 'redux'
import reducers from './src/reducers'
import firebase from '@firebase/app'
import ReduxThunk from 'redux-thunk'
import NavigationService from './src/navegacao/NavigationService';

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      loading: true,
      authenticated: false,
    };
  }
  componentWillMount(){
    let config = {
      apiKey: "AIzaSyAYnCZO2kPYfQa7A29_BoPPQuRvZFgR1Cc",
      authDomain: "sisacs-tcc.firebaseapp.com",
      databaseURL: "https://sisacs-tcc.firebaseio.com",
      projectId: "sisacs-tcc",
      storageBucket: "sisacs-tcc.appspot.com",
      messagingSenderId: "549791658870"
    };
    if (!firebase.apps.length) {
      firebase.initializeApp(config);
    }
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.setState({ loading: false, authenticated: true });
      } else {
        this.setState({ loading: false, authenticated: false });
      }
    });
  }
  render() {
    if (this.state.loading)  return null
    if (!this.state.authenticated) {
        return (
          <Provider store={createStore(reducers, {}, applyMiddleware(ReduxThunk))}>
            <AppContainerLogin
              ref={(navigatorRef) => {
                NavigationService.setTopLevelNavigator(navigatorRef);
              }}
            />
          </Provider>
        );
    }
    return (
      <Provider store={createStore(reducers, {}, applyMiddleware(ReduxThunk))}>
        <AppContainerHome
          ref={navigatorRef => {
            NavigationService.setTopLevelNavigator(navigatorRef);
          }}
        />
      </Provider>
    );
  }
}