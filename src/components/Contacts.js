import React from 'react';
import {
    StyleSheet,
    View,
    Text,
    TextInput,
    TouchableOpacity
} from 'react-native';
import Amplify, {Hub} from 'aws-amplify';
import { DataStore, Predicates } from '@aws-amplify/datastore';
import { withAuthenticator } from 'aws-amplify-react-native';
import {Actions} from 'react-native-router-flux';
import { Contacts } from '../models';
import aws_exports from '../aws-exports';

Amplify.configure(aws_exports);

const goToHome = () => {
    Actions.panicButton()
}

class Contact1 extends React.Component {
    state = {
        contactName: '',
        contactPhone: 0,
        contactEmail: '',
        contacts: []
    };

    async componentDidMount() {
        await this.loadContacts();
        DataStore.observe(Contacts).subscribe(this.loadContacts);
    }

    loadContacts = async () => {
        const contacts = await DataStore.query(Contacts, Predicates.ALL);
        this.setState({contacts});
    };

    addContact = async () => {
        await DataStore.save(
            new Contacts({
                name: this.state.contactName,
                phone: this.state.contactPhone,
                email: this.state.contactEmail,
            })
        );

        this.setState({contactEmail: '', contactPhone: 0, contactName: ''});
    }

    removeContact = (contact) => () => DataStore.delete(contact);

    render() {
        const { contactName, contactPhone, contactEmail, contacts } = this.state;

        return (
            <View style={styles.container}>
                <Text>Add contacts to your list!</Text>
                <TextInput 
                    style={styles.input}
                    value={contactName}
                    onChange={val => this.setState({contactName: val.target.value})}
                    placeholder='Who is this?'
                />
                <TextInput
                    style={styles.input}
                    value={contactPhone}
                    onChange={val => this.setState({contactPhone: val.target.value})}
                    placeholder="Call this number"
                />
                <TextInput
                    style={styles.input}
                    value={contactEmail}
                    onChange={val => this.setState({contactEmail: val.target.value})}
                    placeholder="Email"
                />
                <TouchableOpacity 
                    onPress={this.addContact}
                    style={styles.addButton}>
                    <Text style={styles.addButtonTxt}>Add Contact</Text>
                </TouchableOpacity>
                <View>
                    <TouchableOpacity
                        onPress={goToHome}>
                            <Text style={styles.homeLink}>Go Back Home</Text>
                    </TouchableOpacity>
                </View>
                {this.state.contacts.map((contact, index) => (
                    <View key={contact.id} style={styles.contact}>
                        <Text style={styles.name}>{contact.contactName}</Text>
                        <Text style={styles.phone}>{contact.contactPhone}</Text>
                        <Text style={styles.email}>{contact.contactEmail}</Text>
                    </View>
                ))}
            </View>
        )
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
        borderBottomColor: '#737373',
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
    addButton: {
        backgroundColor: '#1E6B52',
        width: '100%',
        marginVertical: 25,
    },
    addButtonTxt: {
        color: 'white',
        textAlign: 'center',
        marginVertical: 8,
        fontSize: 20,
    },
    homeLink: {
        color: 'blue',
        marginVertical: 25,
    }
});

export default Contact1;