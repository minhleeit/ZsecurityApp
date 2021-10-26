import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
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