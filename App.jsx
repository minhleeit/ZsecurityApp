import React from 'react';
import Amplify from 'aws-amplify'
import config from './aws-exports'
import { Auth } from 'aws-amplify';

Amplify.configure(config)

import { withAuthenticator } from 'aws-amplify-react-native'

/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

 import Routes from './src/Routes';
 
 async function updateUser() {
  const user = await Auth.currentAuthenticatedUser();
  console.log(user);
}

 class App extends React.Component {
   
   render() {
     return (
       
       <Routes/>
     );
   }
 }
 
 export default withAuthenticator(App);