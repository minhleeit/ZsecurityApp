import React from 'react';
import {
    StyleSheet,
    Text,
    TextInput,
    Button,
    View
} from 'react-native';
import Amplify from 'aws-amplify';
import config from "../aws-exports";

Amplify.configure(config);

import {API, graphqlOperation} from "aws-amplify";

const ListContacts = `
    query {
        listContacts {
            items {
                id name phone email
            }
        }
    }`;

const AddContact = `
    mutation($name: String! $phone: Int $email: String) {
        createContact(input: {
            name: $name
            phone: $phone
            email: $email
        }) {
            id name phone email
        }
    }`;

export default class Contact extends React.Component {
    state = {
        name: '',
        phone: null,
        email: '',
        contacts: []
    };

    async componentDidMount() {
        try {
            const contacts = await API.graphql(graphqlOperation(ListContacts));
            console.log('contacts: ', contacts);
            this.setState({contacts: contacts.data.listContacts.items});
        } catch (err) {
            console.log('error: ', err);
        }
    }

    onChangeText = (key, val) => {
        this.setState({ [key]: val });
    };

    addContact = async () => {
        if (this.state.name === '' || this.state.phone === 0 || this.state.email === '')
            return;

        const contact = {name: this.state.name, phone: this.state.phone, email: this.state.phone};

        try {
            const contacts = [...this.state.contacts, contact];
            this.setState({contacts, name: '', phone: null, email: ''});
            console.log('contacts: ', contacts);
            await API.graphql(graphqlOperation(AddContact, contact));
            console.log(`success`);
        } catch (err) {
            console.log('error: ', err);
        }
    };

    render() {
        return (
            <View style={styles.container}>
                <TextInput 
                    style={styles.input}
                    value={this.state.name}
                    onChangeText={val => this.onChangeText('name', val)}
                    placeholder='Who is this?'
                />
                <TextInput
                    style={styles.input}
                    value={this.state.phone}
                    onChangeText={val => this.onChangeText('phone', val)}
                    placeholder="Call this number"
                />
                <TextInput
                    style={styles.input}
                    value={this.state.email}
                    onChangeText={val => this.onChangeText('email', val)}
                    placeholder="Email"
                />
                <Button onPress={this.addContact} title='Add Contact' color='#eeaa55' />
                {this.state.contacts.map((contact, index) => (
                    <View key={index} style={styles.contact}>
                        <Text style={styles.name}>{contact.name}</Text>
                        <Text style={styles.phone}>{contact.phone}</Text>
                        <Text style={styles.email}>{contact.email}</Text>
                    </View>
                ))}
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        paddingHorizontal: 10,
        paddingTop: 50,
    },
    input: {
        height: 50,
        borderBottomWidth: 2,
        borderBottomColor: 'blue',
        marginVertical: 10,
    },
    contact: {
        borderBottomWidth: 1,
        borderBottomColor: '#ddd',
        paddingVertical: 10,
    },
    name: {fontSize: 16},
    phone: {color: 'rgba(0,0,0,.5)'},
    email: {color: 'rgba(0,0,0,.5)'},
});