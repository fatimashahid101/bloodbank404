import React from 'react';
import { useState } from 'react';
import { 
  View, 
  Text, 
  Button, 
  TouchableOpacity, 
  Dimensions,
  TextInput,
  Platform,
  StyleSheet,
  ScrollView,
  StatusBar
} from 'react-native';
import * as Animatable from 'react-native-animatable';
import { useTheme } from 'react-native-paper';
import database from '@react-native-firebase/database';
import { FirebaseDatabaseTypes } from '@react-native-firebase/database';
const DonationFormScreen= ({props}) => {
  const [userName,setUserName] = useState("");
   const [email,setEmail] = useState("");
    const [address,setAddress] = useState("");
    const [age,setAge] = useState("");
    const [bloodGroup,setBloodGroup] = useState("");
    const save_data = () => {
    let users = {
        userName,
        email,
        address,
        age,
        bloodGroup
    }
    database().ref('/').child('Donationusers').push(users)
    setUserName("")
    setEmail("")
    setAddress("")
    setAge("")
    setBloodGroup("")
    // console.log("user===>" , user)
    }
     return (
        <View style={styles.container}>
          <StatusBar backgroundColor='#009387' barStyle="light-content"/>
        <View style={styles.header}>
            <Text style={styles.text_header}>Donate Now!</Text>
        </View>
        <Animatable.View 
            animation="fadeInUpBig"
            style={styles.footer}
        >
          <ScrollView>
          <Text style={styles.text_footer}>Username</Text>
          <TextInput 
                    placeholder="Your Username"
                    value={userName} onChangeText={(text)=>setUserName(text)}
                    style={styles.textInput}
                />
                 <Text style={styles.text_footer}>Email</Text>
          <TextInput 
                    placeholder="Your Email"
                    value={email} onChangeText={(text)=>setEmail(text)}
                    style={styles.textInput}
                />
                <Text style={styles.text_footer}>Address</Text>
          <TextInput 
                    placeholder="Your Address"
                    value={address} onChangeText={(text)=>setAddress(text)}
                    style={styles.textInput}
                />
              <Text style={styles.text_footer}>Age</Text>
          <TextInput 
                    placeholder="Your Age"
                    value={age} onChangeText={(text)=>setAge(text)}
                    style={styles.textInput}
                />
                <Text style={styles.text_footer}>Blood group</Text>
          <TextInput 
                    placeholder="Your Blood group"
                    value={bloodGroup} onChangeText={(text)=>setBloodGroup(text)}
                    style={styles.textInput}
                />
                   </ScrollView>
        </Animatable.View>
          {/* <StatusBar barStyle= { theme.dark ? "light-content" : "dark-content" }/>
          <Text style={{color: "red", fontSize: 24, fontWeight:"bold"}}>Home Screen</Text>
          <View style={{ borderWidth: 2, borderColor: "red",width: "80%", alignItems: "center" }} >
          <TextInput 
                    placeholder="Search"
                     style={{color: "red"}}
                />
           </View> */}
           <TouchableOpacity
                        onPress={save_data}
                        style={[styles.signIn, {
                        borderColor: 'red',
                        borderWidth: 1,
                        marginTop: 15
                    }]}
                >
                    <Text style={[styles.textSign, {
                        color: 'red'
                    }]}>Submit</Text>
                </TouchableOpacity>
      </View>
       
      );
  };
  export default DonationFormScreen;
  const styles = StyleSheet.create({
    container: {
      flex: 1, 
      alignItems: 'center', 
      justifyContent: 'center'
    },
    header: {
      flex: 1,
      justifyContent: 'flex-end',
      paddingHorizontal: 20,
      paddingBottom: 10
  },
  footer: {
      flex: Platform.OS === 'ios' ? 3 : 5,
      backgroundColor: '#fff',
      borderTopLeftRadius: 50,
      borderTopRightRadius: 50,
      paddingHorizontal: 80,
      paddingVertical: 80
  },
  text_header: {
      color: 'red',
      fontWeight: 'bold',
      fontSize: 40
  },
  text_footer: {
      color: 'red',
      fontSize: 18,
      alignItems: 'center'
  },
    signIn: {
      width: '80%',
      height: 50,
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: 10
  },
  textSign: {
      fontSize: 18,
      fontWeight: 'bold'
  },
    textInput: {
      flex: 1,
      paddingLeft: 10,
      color: "red",
      width: "70%"
  },
  });