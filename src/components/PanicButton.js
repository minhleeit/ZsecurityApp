import React, { Component, Fragment } from "react";
import { useEffect } from "react";
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
import SendSMS from 'react-native-sms';
import SmsAndroid from 'react-native-get-sms-android';
import { DeviceMotion } from 'expo-sensors';

sendSMS = () => {
    console.log('sending SMS...');

    SendSMS.send({
        body: 'Please help, I am in danger!!',
        recipients: ['2052001633',],
        successTypes: ['sent', 'queued'],
        allowAndroidSendWithoutReadPermission: true,
    }, (completed, cancelled, error) => {
        if (completed) {
            console.log('SMS Sent Completed');
        } else if (cancelled) {
            console.log('SMS Sent Cancelled');
        } else if (error) {
            console.log('SMS Sent Errored');
        }
    });
}

const Seperator = () => (
    <View style={styles.seperator}/>
);

const goToContacts = () => {
    Actions.contact()
}

DeviceMotion.addListener((event) => {if (event.acceleration>=30) sendSMS()});

class PanicButton extends React.Component {    
    constructor(props) {
        super(props);
        this.state = {
            message: ''
        }
    }



            


    render() {
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
                            onPress={this.sendSMS}
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
                </Fragment>
            </SafeAreaView>
        );
    }
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
    navButtonTxt: {
        color: 'white',
        textAlign: 'center',
        marginVertical: 8,
        fontSize: 20,
    }
})

export default PanicButton;