import 'react-native-gesture-handler';
import React, {useEffect, useState} from 'react';
import { View, Text } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import WelcomeScreen from '../screens/WelcomeScreen'
import AsyncStorage from '@react-native-async-storage/async-storage';
//ACCOUNT
import Account from '../screens/Account/Account';
import SignUp from '../screens/Account/SignUp';
//FIRSTIME
import FirstTime from '../screens/Account/FirstTime';
import Interest from '../screens/firsTime/Interest';
import Time from '../screens/firsTime/Time';
import BottomTab from './../screens/bottom/BottomTab'



const RootStack = createStackNavigator();

export default function AuthNav () {

  const [isFirstLaunch, setIsFirstLaunch] = useState(null);

  let routeName;


  useEffect(() => {
    AsyncStorage.getItem('alreadyLaunched').then((value) => {
      if (value == null) {
        setIsFirstLaunch(true);
        console.log('first time')
      } else {
        console.log('old user time')
        setIsFirstLaunch(false);
      }
    }); // Add some error handling, also you can simply do setIsFirstLaunch(null)
  
  }, []);

  if (isFirstLaunch === null) {
    return null; // This is the 'tricky' part: The query to AsyncStorage is not finished, but we have to present something to the user. Null will just render nothing, so you can also put a placeholder of some sort, but effectively the interval between the first mount and AsyncStorage retrieving your data won't be noticeable to the user. But if you want to display anything then you can use a LOADER here
  } else if (isFirstLaunch == true) {
    routeName = 'welcome';
  } else {
    routeName = 'account';
  }



  return (
         <RootStack.Navigator initialRouteName={routeName} headerMode='none'>   
            <RootStack.Screen name="welcome" component={WelcomeScreen}/>
            <RootStack.Screen name="account" component={AccountStackScreen}/>
      </RootStack.Navigator>
  );
}

const AccountStack = createStackNavigator();

const AccountStackScreen = () => {
  return (
    <AccountStack.Navigator
      initialRouteName="Cuenta"
      screenOptions={{headerShown: false}}
      tabBarOption={{}}>
      <AccountStack.Screen name="Cuenta" component={Account} Options={{}} />
      <AccountStack.Screen name="Registrarse" component={SignUp} Options={{}} />
      <AccountStack.Screen name="Tab" component={BottomTab} Options={{}} />
      <AccountStack.Screen name="FirstTimeStack" component={FirstTimeStackScreen}
        Options={{}}
      />
    </AccountStack.Navigator>
  );
};

//STACK START
const FirstTimeStack = createStackNavigator();

const FirstTimeStackScreen = () => {
  return (
    <FirstTimeStack.Navigator
      initialRouteName="Start"
      screenOptions={{headerShown: false}}
      tabBarOption={{}}>
      <FirstTimeStack.Screen
        name="FirstTime"
        component={FirstTime}
        Options={{}}
      />
      <AccountStack.Screen name="Intereses" component={Interest} Options={{}} />
      <AccountStack.Screen name="Tiempo" component={Time} Options={{}} />
    </FirstTimeStack.Navigator>
  );
};
