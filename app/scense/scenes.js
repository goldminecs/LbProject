import React, {Component} from 'react'
import {Actions, Scene, Switch, ActionConst, Modal} from 'react-native-router-flux'
import Home from '../components/Home'
import Me from '../components/Me'


export const scenes = Actions.create(
   <Scene key="root" component={Modal} >
     <Scene key="HOME" component={Home} initial={true}/>
     <Scene key="ME" component={Me} />
   </Scene>
)

