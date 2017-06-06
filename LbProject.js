import React, { Component } from 'react';
import {
  Text,
  View,
} from 'react-native';
import {Provider, connect} from 'react-redux'
import {Router, Actions} from 'react-native-router-flux'
import {store} from './app/store/store';
import {scenes} from './app/scense/scenes'

const RouterWithRedux = connect()(Router)

export default class LbProject extends Component {
  render() {
    return (
      <Provider store={store}>
        <View style={{flex: 1}}>
          <RouterWithRedux scenes={scenes} store={store} />
        </View>
      </Provider>
    )
  }
}