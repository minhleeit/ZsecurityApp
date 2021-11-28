import React from 'react';
import {Router, Scene} from 'react-native-router-flux';
import AddContact from './components/AddContact';
import PanicButton from './components/PanicButton';
import App from '../App';
import Contact1 from './components/Contacts';

const Routes = () => (
    <Router>
        <Scene key='root'>
            <Scene key='panicButton' component={PanicButton} title='We Got You' initial={true}/>
            <Scene key='contact' component={AddContact} title='Add Contact'/>
        </Scene>
    </Router>
)

export default Routes;