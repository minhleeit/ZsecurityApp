import React, {
    useEffect,
    useState
} from 'react';
import {
    StyleSheet,
    Text,
    TextInput,
    ScrollView,
    View,
    TouchableOpacity,
    Dimensions,
    ActivityIndicator
} from 'react-native';
import Amplify, {
    API,
    graphqlOperation,
} from 'aws-amplify';
import { Actions } from 'react-native-router-flux';
import { Feather as Icon } from '@expo/vector-icons';

import { 
    createContact, 
    updateContact, 
    deleteContact 
} from '../graphql/mutations';
import { listContacts } from '../graphql/queries';
import {Contact} from '../models';

import config from "../aws-exports";
Amplify.configure(config);

const { width } = Dimensions.get('window');

const goToHome = () => {
    Actions.panicButton()
}

export default function AddContact() {
    const [name, setName] = useState('');
    const [phone, setPhone] = useState(0);
    const [email, setEmail] = useState('');
    const [contacts, setContacts] = useState([]);
    const [loading, setLoading] = useState(false);

    const addContact = async () => {
        const input = { name, phone, email };
        const result = await API.graphql(
            graphqlOperation(createContact, { 
                input 
            })
        );

        const newContact = result.data.createContact;
        const updateContact = [newContact, ...contacts];
        setContacts(updateContact);
        setName('');
        setPhone(0);
        setEmail('');
    };

    useEffect(() => {
        fetchContacts();
    }, []);

    async function fetchContacts() {
        try {
            setLoading(true);
            const contactData = await API.graphql(graphqlOperation(listContacts));
            const contacts = contactData.data.listContacts.items;
            console.log(contacts);
            setContacts(contacts);
            setLoading(false);
        } catch (err) {
            setLoading(false);
            console.log('Error fetching data');
        }
    }

    const removeContact = async id => {
        try {
            const input = { id };
            const result = await API.graphql(
                graphqlOperation(deleteContact, {
                    input
                })
            );
            const deleteContactId = result.data.deleteContact.id;
            const updateContact = contacts.filter(contact => contact.id !== deleteContactId);
            setContacts(updateContact); 
        } catch (err) {
            console.log(err);
        }
    };
        
    return (
        <View style={styles.container}>
            <TextInput 
                style={styles.input}
                value={name}
                onChangeText={val => setName(val)}
                placeholder='Who is this?'
            />
            <TextInput
                style={styles.input}
                value={phone}
                onChangeText={val => setPhone(val)}
                placeholder="Call this number"
            />
            <TextInput
                style={styles.input}
                value={email}
                onChangeText={val => setEmail(val)}
                placeholder="Email"
            />
            <TouchableOpacity 
                onPress={addContact}
                style={styles.addButton}>
                <Text style={styles.addButtonTxt}>Add Contact</Text>
            </TouchableOpacity>
            <View>
                <TouchableOpacity
                    onPress={goToHome}>
                        <Text style={styles.homeLink}>Go Back Home</Text>
                </TouchableOpacity>
            </View>
            {loading && (
                <View style={styles.loadingContainer}>
                    <ActivityIndicator size="large" color="tomato"/>
                </View>
            )}
            {contacts.map((contact, index) => (
                <View key={index} style={styles.contact}>
                    <Text style={styles.name}>{contact.name}</Text>
                    <Text style={styles.phone}>{contact.phone}</Text>
                    <Text style={styles.email}>{contact.email}</Text>
                    <TouchableOpacity onPress={() => removeContact(contact.id)}>
                        <Icon name="trash-2" size={18} color="tomato"/>
                    </TouchableOpacity>
                </View>
            ))}
        </View>
    );
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
    },
    loadingContainer: {
        marginVertical: 10,
    }
});