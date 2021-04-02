/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import BottomNavigation from './Navigation/BottomNavigation';
import { Provider } from 'react-redux';
import Store from './Store/configureStore';

export default class App extends React.Component {
  render() {
    return (
      <Provider store={Store}>
        <NavigationContainer>
          <BottomNavigation/>
        </NavigationContainer>
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
