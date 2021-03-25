import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';

const ActionButtonWhite = ({text, doThis}) => {
  return (
    <TouchableOpacity onPress={() => doThis()} style={styles.container}>
      <Text style={styles.text}>{text}</Text>
    </TouchableOpacity>
  );
};

export default ActionButtonWhite;

const styles = StyleSheet.create({
  container: {
    //width: 100,
    // backgroundColor: '#ffff',
    alignItems: 'center',
    marginTop: 30,
  },
  text: {
    fontFamily: 'Montserrat-Regular',
    color: 'white',
    fontSize: 16,
    fontStyle: 'normal',
    lineHeight: 15,
    fontWeight: 'bold',
    textDecorationLine: 'underline',
    textDecorationStyle: 'solid',
    textDecorationColor: '#ffff',
  },
});
