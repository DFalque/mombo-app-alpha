import React from 'react';
import {  Text } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from './HomeScreen'
import MapScreen from './MapScreen'
import AgencyScreen from './AgencyScreen'
import MessageScreen from './MessageScreen'
import ProfileScreen from './ProfileScreen'


const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();
const   activeTintColor = '#000'
const   inactiveTintColor = 'gray'

const MainTabScreen = () => (

    <Tab.Navigator
    screenOptions={({ route }) => ({
    tabBarLabel: ({ focused }) => {
        let labelName;
        if (route.name === 'Home') {
            labelName = 'Para ti'
        }
        else if (route.name === 'Map') {
            labelName = 'Mapa'
          }
        else if (route.name === 'Agency') {
        labelName = 'Agencias'
          }
        else if (route.name === 'Message') {
            labelName = 'Mensajes'
              }
        else if (route.name === 'Profile') {
        labelName = 'Perfil'
            }
        return  <Text style={{ fontSize: 11, fontFamily:'Montserrat-Medium',
        color: focused ? activeTintColor : inactiveTintColor       
    }}>  {labelName}  </Text>
    },
      tabBarIcon: ({ focused, color, size }) => {
        let iconName;
        if (route.name === 'Home') {
          iconName = focused
            ? 'ios-home'
            : 'ios-home-outline';
        } else if (route.name === 'Map') {
          iconName = focused ? 'ios-map' : 'ios-map-outline';
        }
        else if (route.name === 'Agency') {
            iconName = focused ? 'ios-briefcase' : 'ios-briefcase-outline';
          }
          else if (route.name === 'Message') {
            iconName = focused ? 'ios-chatbubble' : 'ios-chatbubble-outline';
          }
          else if (route.name === 'Profile') {
            iconName = focused ? 'ios-person' : 'ios-person-outline';
          }

        // You can return any component that you like here!
        return <Ionicons name={iconName} size={size} color={color} />;
      },
    })}
    tabBarOptions={{
      activeTintColor: activeTintColor,
      inactiveTintColor: inactiveTintColor, 
    }}
  >
    <Tab.Screen name="Home" component={HomeScreen} />
    <Tab.Screen name="Map" component={MapScreen} />
    <Tab.Screen name="Agency" component={AgencyScreen} />
    <Tab.Screen name="Message" component={MessageScreen} />
    <Tab.Screen name="Profile" component={ProfileScreen} />
  </Tab.Navigator>
    
);

export default MainTabScreen;




  