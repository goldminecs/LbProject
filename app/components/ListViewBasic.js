import React, { Component } from 'react';
import { StyleSheet, ListView, Text, View } from 'react-native';

import Message from './Message';

export  default class ListViewBasics extends Component {
  // 初始化模拟数据
  constructor(props) {
    super(props);
    let row1 = {
      pic: 'aaa',
      title: 'aaa',
      msg: 'aaa',
      time: '20:45',
    };

    let row2 = {
      pic: 'bbb',
      title: 'bbb',
      msg: 'bbb',
      time: '20:45',
    };

    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    this.state = {
      dataSource: ds.cloneWithRows([
        row1, row2
      ])
    };
  }


  render() {
    return (
      <View style={{flex: 1, paddingTop: 22}}>
        <ListView
          dataSource={this.state.dataSource}
          renderRow={(rowData) => this._renderRow(rowData)}
        />
      </View>
    );
  }

   _renderRow(rowData) {
    return (
      <Message pic={rowData.pic} title={rowData.title} msg={rowData.msg} time={rowData.time} ></Message>

    );
  }

}
