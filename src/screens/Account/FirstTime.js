import React, {useState, useEffect} from 'react';
import {View, Text, StyleSheet, TextInput, AsyncStorage} from 'react-native';
//Components
import LinkGreySimple from '../../ui/Links/LinkGreySimple';

const FirstTime = (props) => {
  const finishStart = async () => {
    console.log('El valor de read es: ');
    await AsyncStorage.setItem('read', 'false');
    const pff = await AsyncStorage.getItem('read');
    console.log(pff);
  };

  return (
    <View style={styles.container}>
      <Text>Estamos Start</Text>
      <TextInput
        style={styles.input}
        underlineColorAndroid="transparent"
        placeholder="Email"
        placeholderTextColor="grey"
        autoCapitalize="none"
        onChangeText={(e) => onChange(e, 'email')}
      />
      <TextInput
        style={styles.input}
        underlineColorAndroid="transparent"
        placeholder="Email"
        placeholderTextColor="grey"
        autoCapitalize="none"
        onChangeText={(e) => onChange(e, 'email')}
      />
      <Text>Adultos</Text>
      <Text>Niños</Text>
      <Text>Presupuesto</Text>
      <LinkGreySimple text={'Salir'} doThis={finishStart} />
    </View>
  );
};

export default FirstTime;

const styles = StyleSheet.create({
  container: {flex: 1},
  input: {
    marginBottom: 15,
    marginTop: 15,
    marginLeft: 60,
    marginRight: 60,
    height: 40,
    borderColor: 'grey',
    borderWidth: 1,
  },
});
