import React, {useState, useEffect} from 'react';
import 'react-native-gesture-handler';
import AuthNavigation from './src/navigation/AuthNavigation'
import BottomTab from './src/screens/bottom/BottomTab'
import auth from '@react-native-firebase/auth';
import { 
  NavigationContainer, 
  DefaultTheme as NavigationDefaultTheme,
} from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
export default function App() {
  const [user, setUser] = useState(false);
  const [isFirstLaunch, setIsFirstLaunch] = useState(false);


 const onAuthStateChanged = (user) => {
    setUser(user);
    console.log(user)
  };

  const listenToUserState = () => {
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber; // unsubscribe on unmount
  };

  useEffect(() => {
    listenToUserState();
    AsyncStorage.getItem('alreadyLaunched').then((value) => {
      if (value == null) {
       // No need to wait for `setItem` to finish, although you might want to handle errors
        setIsFirstLaunch(true);
        console.log('first time')
      } else {
        console.log('old user time')
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
       {user && !isFirstLaunch ? <BottomTab /> : <AuthNavigation />}
    </NavigationContainer>
  );
}


