import React, {Component} from 'react'
import {AppContainer} from './src/navegacao/Navigation'
import {View, ActivityIndicator} from 'react-native'
import {Provider} from 'react-redux'
import {createStore, applyMiddleware} from 'redux'
import reducers from './src/reducers'
import firebase from '@firebase/app'
import ReduxThunk from 'redux-thunk'
import NavigationService from './src/navegacao/NavigationService'
import Login from './src/navegacao/Login'
import {
  API_KEY,
  AUTH_DOMAIN,
  DATABASE_URL,
  PROJECT_ID,
  STORAGE_BUCKET,
  MESSAGING_SENDER_ID
} from './firebaseConfig'

export default class App extends Component {
  constructor() {
    super()
    this.state = {
      loading: true,
      authenticated: false,
    }
  }
  componentWillMount(){
    const config = {
      apiKey: API_KEY,
      authDomain: AUTH_DOMAIN,
      databaseURL: DATABASE_URL,
      projectId: PROJECT_ID,
      storageBucket: STORAGE_BUCKET,
      messagingSenderId: MESSAGING_SENDER_ID
    }
    if (!firebase.apps.length) {
      firebase.initializeApp(config)
    }
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.setState({ loading: false, authenticated: true })
      } else {
        this.setState({ loading: false, authenticated: false })
      }
    })
  }
  render() {
    if (this.state.loading){
      return (
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
          <ActivityIndicator size='large' color='#28a745' />
        </View>
        
      )
    }  
    if (!this.state.authenticated) {
      return (
        <Login />
      )
    }
    return (
      <Provider store={createStore(reducers, applyMiddleware(ReduxThunk))}>
        <AppContainer
          ref={navigatorRef => NavigationService.setTopLevelNavigator(navigatorRef)}
        />
      </Provider>
    )
  }
}