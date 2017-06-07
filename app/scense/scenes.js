import React, {Component} from 'react'
import {Actions, Scene, Switch, ActionConst, Modal} from 'react-native-router-flux'
import Home from '../components/Home'


export const scenes = Actions.create(
   <Scene key="root" component={Modal} >
     <Scene key="HOME" component={Home} initial={true}/>
   </Scene>
)

