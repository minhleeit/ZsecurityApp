import React from 'react';
import { StyleSheet, Text, View, Button, TouchableOpacity, Pressable, Dimensions, Alert } from 'react-native';
import { Auth } from 'aws-amplify';
const { width } = Dimensions.get('window');
const welcome = () => {
  const signOut = async () => {
    try {
      await Auth.signOut({ global: true });
    } catch (error) {
      console.log('error signing out: ', error);
    }
  };
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Zsecurity App!</Text>
        
      </View>
      <View style={styles.container}>
        <View style={styles.header}>
        
        <Button style={styles.button}
          title="Panic Button"
          onPress={() => Alert.alert('Simple Button pressed')}
        />
        
        <Button
          title="Scan Crimes Button"
          onPress={() => Alert.alert('Simple Button pressed')}
        />

        <Button
          title="Fall Dectection Button"
          onPress={() => Alert.alert('Simple Button pressed')}
        />  
            
        <Pressable style={styles.signOut} onPress={() => signOut()}>
          <Text style={styles.signOutText}>Sign out</Text>
        </Pressable>
        </View>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    marginTop: 100,
    backgroundColor: '#FFFFFF',    
    justifyContent: 'center',  
    //paddingVertical: 20,
    justifyContent: 'space-between',
  },
  header: {
    
    flexDirection: 'column',
    justifyContent: 'space-between',
    width: width,
    alignItems: 'center',
  },
  headerText: {
    color: '#3399ff',
    fontSize: 40,
    fontWeight: 'bold',
  },

  button: {
    alignItems: "center",
    //backgroundColor: "#DDDDDD",
    padding: 10,
    
  },


  signOut: {
    marginTop: 300,
    backgroundColor: '#FF8000',
    padding: 10,
    borderRadius: 20,
  },
  signOutText: {
    color: '#fff',
    fontSize: 18,
  },
});
export default welcome;