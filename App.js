//REACT
import 'react-native-gesture-handler';
import * as React from 'react';
import {Dimensions} from 'react-native';
import {Text} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {NavigationContainer} from '@react-navigation/native';
import Ionicons from 'react-native-vector-icons/Ionicons';
//SCREENS//
//HOME
import HomeScreen from './src/screens/bottom/MapScreen';
//AGENCY
import AgencyScreen from './src/screens/bottom/AgencyScreen';
import AgencyDetailsScreen from './src/screens/bottom/AgencyDetailsScreen';
//MAPA
import MapScreen from './src/screens/MapPage';
import GuideScreen from './src/screens/bottom/HomeScreen';
//MESSAGES
import MessageScreen from './src/screens/bottom/MessageScreen';
import ChatScreen from './src/screens/bottom/ChatScreen';
import ItineraryScreen from './src/screens/bottom/ItineraryScreen';
//PROFILE
import ProfileScreen from './src/screens/bottom/ProfileScreen';
// Falta la pantalla de itinerario no se donde ponerla
//
import MapboxGL from '@react-native-mapbox-gl/maps';
import {firebase} from '@react-native-firebase/database';

import {firebaseConfig, mapBoxGLkey} from './database';

//                                                                //
//VARIABLES
//let deviceWidth = Dimensions.get('window').width;
//let deviceHeight = Dimensions.get('window').height;
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}
const firestore = firebase.firestore();

MapboxGL.setAccessToken(mapBoxGLkey);

//                                                                //
// STACKS
const HomeStack = createStackNavigator();
const AgencyStack = createStackNavigator();
const MapStack = createStackNavigator();
const MessageStack = createStackNavigator();
const ProfileStack = createStackNavigator();

const HomeStackScreen = () => {
  return (
    <HomeStack.Navigator
      initialRouteName="Para ti"
      screenOptions={{headerShown: false}}
      tabBarOption={{}}>
      <HomeStack.Screen name="Para ti" component={HomeScreen} Options={{}} />
    </HomeStack.Navigator>
  );
};

const AgencyStackScreen = ({navigation, route}) => {
  if (route.state && route.state.index > 0) {
    navigation.setOptions({tabBarVisible: false});
  } else {
    navigation.setOptions({tabBarVisible: true});
  }
  return (
    <AgencyStack.Navigator
      initialRouteName="Agencias"
      screenOptions={{headerShown: false}}>
      <AgencyStack.Screen
        name="Agencias"
        component={AgencyScreen}
        Options={{}}
      />
      <AgencyStack.Screen
        name="Agencia"
        component={AgencyDetailsScreen}
        //Options={{tabBarVisible: false}}
        //tabBarVisible={false}
      />
    </AgencyStack.Navigator>
  );
};

const MapStackScreen = ({navigation, route}) => {
  if (route.state && route.state.index > 0) {
    navigation.setOptions({tabBarVisible: false});
  } else {
    navigation.setOptions({tabBarVisible: true});
  }
  return (
    <MapStack.Navigator
      initialRouteName="Para ti"
      screenOptions={{headerShown: false}}>
      <MapStack.Screen
        name="Mapa"
        component={MapScreen}
        Options={{title: 'Map', headerShown: false}}
      />
      <MapStack.Screen name="Guia" component={GuideScreen} Options={{}} />
    </MapStack.Navigator>
  );
};

const MessageStackScreen = ({navigation, route}) => {
  if (route.state && route.state.index > 0) {
    navigation.setOptions({tabBarVisible: false});
  } else {
    navigation.setOptions({tabBarVisible: true});
  }
  return (
    <MessageStack.Navigator
      initialRouteName="Para ti"
      screenOptions={{headerShown: false}}>
      <MessageStack.Screen
        name="Para ti"
        component={MessageScreen}
        Options={{}}
      />
      <MessageStack.Screen name="Chat" component={ChatScreen} Options={{}} />
      <MessageStack.Screen
        name="Itinerario"
        component={ItineraryScreen}
        Options={{}}
      />
    </MessageStack.Navigator>
  );
};

const ProfileStackScreen = () => {
  return (
    <ProfileStack.Navigator
      initialRouteName="Para ti"
      screenOptions={{headerShown: false}}>
      <ProfileStack.Screen
        name="Para ti"
        component={ProfileScreen}
        Options={{}}
      />
    </ProfileStack.Navigator>
  );
};
//                                                                            //
// TAB

const Tab = createBottomTabNavigator();

//                                                                            //
// FUNCTION APP
const activeTintColor = '#000';
const inactiveTintColor = 'gray';
export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        // CONFIGURACION DEL TAB NAVIGATOR
        initialRouteName="Home"
        headerMode="none"
        screenOptions={({route}) => ({
          // CONFIGURACION PARA EL ICONO
          tabBarIcon: ({focused, color, size}) => {
            let iconName;
            if (route.name === 'Para ti') {
              iconName = focused ? 'ios-home' : 'ios-home-outline';
            } else if (route.name === 'Agencias') {
              iconName = focused ? 'ios-briefcase' : 'ios-briefcase-outline';
            } else if (route.name === 'Mapa') {
              iconName = focused ? 'ios-map' : 'ios-map-outline';
            } else if (route.name === 'Mensajes') {
              iconName = focused ? 'ios-chatbubble' : 'ios-chatbubble-outline';
            } else if (route.name === 'Perfil') {
              iconName = focused ? 'ios-person' : 'ios-person-outline';
            }

            // You can return any component that you like here!
            return <Ionicons name={iconName} size={size} color={color} />;
          },

          tabBarLabel: ({focused}) => {
            let labelName;
            if (route.name === 'Para ti') {
              labelName = 'Para ti';
            } else if (route.name === 'Agencias') {
              labelName = 'Agencias';
            } else if (route.name === 'Mapa') {
              labelName = 'Mapa';
            } else if (route.name === 'Mensajes') {
              labelName = 'Mensajes';
            } else if (route.name === 'Perfil') {
              labelName = 'Perfil';
            }
            return (
              <Text
                style={{
                  fontSize: 11,
                  fontFamily: 'Montserrat-Medium',
                  marginBottom: 5,
                  color: focused ? activeTintColor : inactiveTintColor,
                }}>
                {' '}
                {labelName}{' '}
              </Text>
            );
          },

          // AÑADIR CONFIGURACION PARA EL LABEL
        })}
        // CONFIGURACION DEL COLOR
        tabBarOptions={{
          activeTintColor: activeTintColor,
          inactiveTintColor: inactiveTintColor,
        }}>
        <Tab.Screen name="Para ti" component={HomeStackScreen} />
        <Tab.Screen name="Agencias" component={AgencyStackScreen} />
        <Tab.Screen name="Mapa" component={MapStackScreen} />
        <Tab.Screen name="Mensajes" component={MessageStackScreen} />
        <Tab.Screen name="Perfil" component={ProfileStackScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
