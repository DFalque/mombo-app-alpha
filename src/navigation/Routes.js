import React, {useContext, useState, useEffect} from 'react';
import auth from '@react-native-firebase/auth';
import BottomTab from  '../screens/bottom/BottomTab'
import AuthNavigation from '../navigation/AuthNavigation'
import AsyncStorage from '@react-native-async-storage/async-storage';

import { 
    NavigationContainer, 
    DefaultTheme as NavigationDefaultTheme,
  } from '@react-navigation/native';

import {AuthContext} from '../context/AuthProvider';

const Routes = () => {
  const {setUser, user, isFirstLaunch, setIsFirstLaunch} = useContext(AuthContext);


  const onAuthStateChanged = (localuser) => {
     setUser(localuser);
     console.log(localuser)
   };
 
   const listenToUserState = () => {
     const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
     return subscriber; // unsubscribe on unmount
   };
 
   useEffect(() => {

    listenToUserState();

    AsyncStorage.getItem('alreadyLaunched').then((value) => {
      if (!value) {
       // No need to wait for `setItem` to finish, although you might want to handle errors
        setIsFirstLaunch(false);
        console.log('first time')
      } else {
       setIsFirstLaunch(value);
       console.log(value, 'old user time')
      }
    }); 
  }, []);

  const CustomDefaultTheme = {
    ...NavigationDefaultTheme,
    colors: {
      ...NavigationDefaultTheme.colors,
      background: '#ffffff',
      text: '#333333'

    }

  }

  const theme =  CustomDefaultTheme; 

  return (
   
    <NavigationContainer theme={theme}>
       {user && isFirstLaunch ? <BottomTab /> : <AuthNavigation />}
    </NavigationContainer>
   
  );
}

export default Routes;
