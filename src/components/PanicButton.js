import React, { Component, Fragment, useState } from "react";
import {
    SafeAreaView, 
    Text, 
    View, 
    StyleSheet, 
    Alert,
    TouchableOpacity,
    TextInput,
} from 'react-native';
import {Actions} from 'react-native-router-flux';
import Amplify, {
    API,
    graphqlOperation,
} from 'aws-amplify';
import { Auth } from 'aws-amplify';

import config from "../aws-exports";
Amplify.configure(config);
import SendSMS from 'react-native-sms';
import SmsAndroid from 'react-native-get-sms-android';
import { DeviceMotion } from 'expo-sensors';

const Seperator = () => (
    <View style={styles.seperator}/>
);

const goToContacts = () => {
    Actions.contact()
}

const goToWeather = () => {
    Actions.weather()
}

const logOut = async () => {await Auth.signOut()};

DeviceMotion.addListener((event) => {if (event.acceleration>=30) sendSMS()});

const PanicButton = () => {   
    const [contact] = useState([
        {
            id: '123-con',
            name: 'John Doe',
            relation: 'Self'
        },
    ])

    const sendSMS = async () => {
        const details = await API.put('zsecurityapp', '/status', {
            body: { contactID },
        })
        console.log(details)
    }

    return (
        <SafeAreaView style={styles.container}>
            <Fragment>
                <View>
                    <Text style={styles.heading}>
                        Welcome to ZSecurity App
                    </Text>
                </View>
                <Seperator/>
                <View style={styles.panicContainer}>
                    <Text style={styles.title}>
                        Are you in trouble?
                    </Text>
                    <TouchableOpacity 
                        onPress={sendSMS}
                        style={styles.panicButton}>
                        <Text style={styles.panicButtonTxt}>Press Me!!</Text>
                    </TouchableOpacity>
                </View>
                <Seperator/>
                <View style={styles.navButtonContainer}>
                    <TouchableOpacity
                        onPress={goToContacts}
                        style={styles.navButton}>
                        <Text style={styles.navButtonTxt}>Add Contacts</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.navButtonContainer}>
                    <TouchableOpacity
                        onPress={goToWeather}
                        style={styles.weatherButton}>
                        <Text style={styles.navButtonTxt}>Weather</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.navButtonContainer}>
                    <TouchableOpacity
                        onPress={logOut}
                        style={styles.logOutButton}>
                        <Text style={styles.navButtonTxt}>Sign Out</Text>
                    </TouchableOpacity>
                </View>
            </Fragment>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        flex: 1,
        marginHorizontal: 16,
    },
    heading: {
        textAlign: 'center',
        marginVertical: 8,
        fontSize: 30,
        marginTop: 0,
    },
    title: {
        textAlign: 'center',
        fontSize: 20,
        marginVertical: 8,
    },
    seperator: {
        marginVertical: 8,
        borderBottomColor: '#737373',
        borderBottomWidth: StyleSheet.hairlineWidth,
    },
    panicContainer: {
        justifyContent: 'space-around',
        backgroundColor: '#ddd',
        width: '100%',
        alignContent: 'center',
        alignItems: 'center'
    },
    panicButton: {
        backgroundColor: '#ff0000',
        width: 300,
        marginVertical: 25,
    },
    panicButtonTxt: {
        color: 'white',
        textAlign: 'center',
        marginVertical: 8,
        fontSize: 20,
    },
    navButtonContainer: {
        justifyContent: 'space-around',
        width: '100%',
        alignContent: 'center',
        alignItems: 'center'
    },
    navButton: {
        backgroundColor: '#1E6B52',
        width: 200,
        marginVertical: 25,
    },
    weatherButton: {
        backgroundColor: 'blue',
        width: 200,
        marginVertical: 25,
    },
    logOutButton: {
        backgroundColor: 'tomato',
        width: 200,
        marginVertical: 25,
    },
    navButtonTxt: {
        color: 'white',
        textAlign: 'center',
        marginVertical: 8,
        fontSize: 20,
    }
})

export default PanicButton;