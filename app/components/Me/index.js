import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Dimensions,
  ListView,
} from 'react-native';
import {connect} from 'react-redux'
import {Actions, Scene, Switch, ActionConst, Modal} from 'react-native-router-flux'

export default class Me extends Component{

  constructor(props){

    super(props)

  }

  render(){
    return (
      <View style={styles.container}>
        <Text>This is page of me.</Text>
        <Text onPress={() => this.onPressBack()}>Press me to back.</Text>
      </View>

    )
  }

  onPressBack(){
    return (
      Actions.HOME({type:'reset'})
    );
  }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  }
});