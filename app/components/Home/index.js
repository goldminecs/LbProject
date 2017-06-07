import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Dimensions,
  ListView,
} from 'react-native'
import {Actions, Scene, Switch, ActionConst, Modal} from 'react-native-router-flux'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import {fetchTitle} from '../../action/homeAction'
import  ListViewBasic  from './ListViewBasic'


class Home extends Component {
  constructor(props){
    super(props);
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <View style={{flex:4}}><Text style={{textAlign:'left',marginLeft:5, color:'white'}}>微信</Text></View>
          <View style={{flex:1}}><Text style={{textAlign:'center', color:'white'}}>Search</Text></View>
          <View style={{flex:1}}><Text style={{textAlign:'center', color:'white'}}>Add</Text></View>
        </View>
        <View style={styles.content}>
          <ListViewBasic/>
          <Text>{this.props.title}</Text>
        </View>
        <View style={styles.toolbar}>

          <View onclick style={styles.btn}><Text style={{textAlign:'center', color:'#555555'}}>微信</Text></View>
          <View style={styles.btn}><Text style={{textAlign:'center', color:'#555555'}}>通讯录</Text></View>
          <View style={styles.btn}><Text style={{textAlign:'center', color:'#555555'}}>发现</Text></View>
          <View style={styles.btn}><Text onPress={()=>this.onPressMe()} style={{textAlign:'center', color:'#555555'}}>我</Text></View>
        </View>
      </View>
    );
  }

  onPressMe(){
    console.log("Press me.");
    this.props.fetchTitle({type: 10});
    return (
      Actions.ME({type: 'reset'})
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    title: state.HOME.title,
  }
}

const mapDispatchToProps = (dispatch) => bindActionCreators({
  fetchTitle,
}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Home)


const WIDTH = Dimensions.get('window').width;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  header: {
    height:50,
    width:WIDTH,
    backgroundColor:'#555555',
    flexDirection:'row',
    justifyContent: 'center',
    alignItems: 'center',

  },
  content: {
    flex:1,
    width:WIDTH,
    borderWidth:1,
    borderColor:'#000000',
    backgroundColor:'grey',

  },
  toolbar: {
    height:60,
    width: WIDTH,
    flexDirection:'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor:'#F7F7F7',
    borderWidth:1,
    borderColor:'#F1F1F1',
  },
  btn: {
    flex:1,

  },

});

