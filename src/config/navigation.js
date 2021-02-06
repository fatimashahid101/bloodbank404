import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import DonationFormScreen from '../screens/DonationFormScreen';
import ExploreScreen from '../screens/ExploreScreen';
import HomeScreen from '../screens/HomeScreen';
import DonorsScreen from '../screens/DonorsScreen';
// import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Icon from 'react-native-vector-icons/Ionicons';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';

const HomeStack = createStackNavigator();
const AboutStack = createStackNavigator();
const Drawer = createDrawerNavigator();
const Tab = createMaterialBottomTabNavigator();
function AppNavigation(){
  return(
    <Tab.Navigator
    initialRouteName="Feed"
    activeColor="#fff"
    // barStyle={{ backgroundColor: 'tomato' }}
  >
    <Tab.Screen
      name="Home"
      component={HomeStackScreen}
      options={{
        tabBarLabel: 'Home',
        tabBarColor: 'red',
        tabBarIcon: ({ color }) => (
          <Icon name="ios-home" color={color} size={26} />
        ),
      }}
    />
    <Tab.Screen
      name="DonationForm"
      component={AboutStackScreen}
      options={{
        tabBarLabel: 'DonationForm',
        tabBarColor: 'red',
        tabBarIcon: ({ color }) => (
          <Icon name="ios-notifications" color={color} size={26} />
        ),
      }}
    />
     <Tab.Screen
      name="Explore"
      component={ExploreScreen}
      options={{
        tabBarLabel: 'Explore',
        tabBarColor: 'red',
        tabBarIcon: ({ color }) => (
          <Icon name="ios-aperture" color={color} size={26} />
        ),
      }}
    />
    <Tab.Screen
      name="Donors list"
      component={DonorsScreen}
      options={{
        tabBarLabel: 'Donors list',
        tabBarColor: 'red',
        tabBarIcon: ({ color }) => (
          <Icon name="ios-person" color={color} size={26} />
        ),
      }}
    />
  </Tab.Navigator>
  );
}
export default AppNavigation;

const HomeStackScreen = ({navigation}) => (
  <HomeStack.Navigator screenOptions={{
          headerStyle: {
          backgroundColor: 'red',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
          fontWeight: 'bold'
          }
      }}>
          <HomeStack.Screen name="Home" component={HomeScreen} options={{
          title:'Home',
          headerLeft: () => (
              <Icon.Button name="ios-menu" size={25} backgroundColor="red" onPress={() => navigation.openDrawer()}></Icon.Button>
          )
          }} />
  </HomeStack.Navigator>
  );
  
  const AboutStackScreen = ({navigation}) => (
  <AboutStack.Navigator screenOptions={{
          headerStyle: {
          backgroundColor: 'red',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
          fontWeight: 'bold'
          }
      }}>
          <AboutStack.Screen name="DonationForm" component={DonationFormScreen} options={{
            title:'DonationForm',
          headerLeft: () => (
              <Icon.Button name="ios-menu" size={25} backgroundColor="red" onPress={() => navigation.openDrawer()}></Icon.Button>
          )
          }} />
  </AboutStack.Navigator>
  );
// const Stack = createStackNavigator();

// function AppNavigation() {
//     return (
//       <NavigationContainer>
//         <Stack.Navigator>
//           <Stack.Screen name="login" component={login} />
//           <Stack.Screen name="signup" component={signup} />
//           {/* <Stack.Screen name="ImagePicker" component={ImagePicker} /> */}
//         </Stack.Navigator>
//       </NavigationContainer>
//     );
//   }
    // export default AppNavigation;