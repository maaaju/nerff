import React, { Component } from 'react'
import { Provider } from 'react-redux'
import { applyMiddleware, createStore } from 'redux'
import logger from 'redux-logger'
import { Platform, AppRegistry } from 'react-native'
import itemApp from './src/reducers'
import TutorListContainer from './src/containers/tutor_list_container'

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
})

const store = createStore(itemApp, applyMiddleware(logger))

export default class TutorList extends Component<{}> {
  render() {
    return (
      <Provider store={store}>
        <TutorListContainer />
      </Provider>
    )
  }
}

AppRegistry.registerComponent('ReduxExample', () => ReduxExample)
