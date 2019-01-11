import React, {Component} from 'react';
import AppContainer from './src/navegacao/Navigation';
import {Provider} from 'react-redux'
import {createStore} from 'redux'
import reducers from './src/reducers'

export default class App extends Component {
  render() {
    return (
      <Provider store={createStore(reducers)}>
        <AppContainer/>
      </Provider>
    );
  }
}