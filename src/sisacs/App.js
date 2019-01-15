import React, {Component} from 'react';
import AppContainer from './src/navegacao/Navigation';
import {Provider} from 'react-redux'
import {createStore, applyMiddleware} from 'redux'
import reducers from './src/reducers'
import firebase from '@firebase/app'
import ReduxThunk from 'redux-thunk'
import NavigationService from './src/navegacao/NavigationService';

export default class App extends Component {
  componentWillMount(){
    let config = {
      apiKey: "AIzaSyAYnCZO2kPYfQa7A29_BoPPQuRvZFgR1Cc",
      authDomain: "sisacs-tcc.firebaseapp.com",
      databaseURL: "https://sisacs-tcc.firebaseio.com",
      projectId: "sisacs-tcc",
      storageBucket: "sisacs-tcc.appspot.com",
      messagingSenderId: "549791658870"
    };
    firebase.initializeApp(config);
  }
  render() {
    return (
      <Provider store={createStore(reducers, {}, applyMiddleware(ReduxThunk))}>
        <AppContainer
          ref={navigatorRef => {
            NavigationService.setTopLevelNavigator(navigatorRef);
          }}
        />
      </Provider>
    );
  }
}