import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
} from 'react-native';



export default class Message extends Component {
  constructor(props) {
    super(props);
  }


  render() {

    return (
      <View style={styles.container}>
        <View style={styles.pic}>
          <Text>{this.props.pic}</Text>
        </View>
        <View style={styles.msg}>
          <Text>{this.props.title}</Text>
          <Text>{this.props.msg}</Text>
        </View>
        <View style={styles.time}>
          <Text>{this.props.time}</Text>
        </View>
      </View>
    );
  }
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    //width:150,
    //height:150,
    flexDirection:'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderWidth:1,
    borderColor:'#F1F1F1',
  },
  pic: {
    flex:1,
  },
  msg: {
    flex:5,
  },
  time: {
    flex:1,
  },
});