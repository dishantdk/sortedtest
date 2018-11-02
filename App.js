/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from "react";
import { Platform, StyleSheet, Text, View } from "react-native";
import {
  StackNavigator,
} from 'react-navigation';
import Home from './src/components/Home/Home';
import Profile from './src/components/Profile/profile';


const AppSatck = StackNavigator({
  Home: { screen: Home, path: 'home'},
    
  Profile: { screen: Profile, path: 'profile' },
  },
);

const App = () => (
  <AppSatck />
);

export default App;