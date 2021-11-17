import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Amplify from 'aws-amplify'
import config from './aws-exports'

Amplify.configure(config)

import { withAuthenticator } from 'aws-amplify-react-native'

/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

 import PanicButton from './src/components/PanicButton';
 import Contact from './src/components/Contact';

 const Stack = createNativeStackNavigator();
 
 class App extends React.Component {
   render() {
     return (
       <>
        <PanicButton/>
        <Contact/>
       </>
     );
   }
 }
 
 export default withAuthenticator(App);