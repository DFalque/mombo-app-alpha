import React from 'react';
import {Text, StyleSheet, TouchableOpacity} from 'react-native';

const LinkGreySimple = ({text, doThis}) => {
  return (
    <TouchableOpacity onPress={() => doThis()} style={styles.container}>
      <Text style={styles.text}>{text}</Text>
    </TouchableOpacity>
  );
};

export default LinkGreySimple;

const styles = StyleSheet.create({
  container: {
    //width: 100,
    // backgroundColor: '#ffff',
    //alignItems: 'center',
    //backgroundColor: 'black',
    marginTop: 30,
  },
  text: {
    fontFamily: 'Montserrat-Regular',
    color: 'grey',
    fontSize: 16,
    fontStyle: 'normal',
    lineHeight: 15,
    fontWeight: 'bold',
    // textDecorationLine: 'underline',
    //textDecorationStyle: 'solid',
    //textDecorationColor: '#D81159',
  },
});
