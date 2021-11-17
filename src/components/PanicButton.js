import React from "react";
import {
    Button,
    SafeAreaView, 
    Text, 
    View, 
    StyleSheet, 
    Alert,
    TouchableOpacity
} from 'react-native';
import {Actions} from 'react-native-router-flux';

const Seperator = () => (
    <View style={styles.seperator}/>
);

const goToContacts = () => {
    Actions.contact()
}

const PanicButton = () => {    
    return (
        <SafeAreaView style={styles.container}>
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
                    onPress={() => Alert.alert('Dialing: 911...')}
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
        </SafeAreaView>
    );
};

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