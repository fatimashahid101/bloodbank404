import React from 'react';
import { View, Text, Button, StyleSheet, StatusBar, TouchableOpacity} from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import { useTheme } from 'react-native-paper';
const HomeScreen= ({navigation}) => {
  // const { colors } = useTheme();
     return (
        <View style={styles.container}>
          {/* <StatusBar barStyle= { theme.dark ? "light-content" : "dark-content" }/> */}
          <Text style={{color: "red", fontSize: 24, fontWeight:"bold"}}>Home Screen</Text>
          <View style={{ borderWidth: 2, borderColor: "red",width: "80%", alignItems: "center" }} >
          <TextInput 
                    placeholder="Search"
                     style={{color: "red"}}
                />
           </View>
            <TouchableOpacity
                    onPress={() => navigation.navigate("DonationForm")}
                    style={[styles.signIn, {
                        borderColor: 'red',
                        borderWidth: 1,
                        marginTop: 15
                    }]}
                >
                    <Text style={[styles.textSign, {
                        color: 'red'
                    }]}>Donate Here..</Text>
                </TouchableOpacity>
      </View>
       
      );
  };
  export default HomeScreen;
  const styles = StyleSheet.create({
    container: {
      flex: 1, 
      alignItems: 'center', 
      justifyContent: 'center'
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
  },
  });