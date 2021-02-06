import React from 'react';
import { View, Text, Button, StyleSheet, StatusBar } from 'react-native';
const ProfileScreen= ({navigation}) => {
     return (
        <View style={styles.container}>
          {/* <StatusBar barStyle= { theme.dark ? "light-content" : "dark-content" }/> */}
          <Text style={{color: "red"}}>profile Screen</Text>
        <Button
          title="Go to about screen"
          onPress={() => navigation.navigate("About Screen")}
        />
        </View>
      );
  };
  export default  ProfileScreen;
  const styles = StyleSheet.create({
    container: {
      flex: 1, 
      alignItems: 'center', 
      justifyContent: 'center'
    },
  });