import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Amplify from 'aws-amplify'
import config from './aws-exports'
Amplify.configure(config)

/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */



 import PanicButton from './components/PanicButton';
 
 class App extends React.Component {
   render() {
     return (
       <PanicButton/>
     );
   }
 }
 
 export default App;