import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { 
  StyleSheet, 
  Text, 
  View,
  Button
} from 'react-native';
import {useHistory} from 'react-router-dom';
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
 import Contact from './src/components/AddContact';
 import Routes from './src/Routes';

 class App extends React.Component {
   
   render() {
     return (
       <>
        <Routes />
       </>
     );
   }
 }
 
 export default withAuthenticator(App);