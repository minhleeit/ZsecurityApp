import React from 'react';
import {Router, Scene} from 'react-native-router-flux';
import Contact from './components/Contact';
import PanicButton from './components/PanicButton';
import App from '../App';

const Routes = () => (
    <Router>
        <Scene key='root'>
            <Scene key='panicButton' component={PanicButton} title='We Got You' initial={true}/>
            <Scene key='contact' component={Contact} title='Contact'/>
        </Scene>
    </Router>
)

export default Routes;