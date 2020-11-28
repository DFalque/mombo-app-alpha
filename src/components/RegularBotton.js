import React from 'react';
import {View, Text, Image, StyleSheet, TouchableOpacity} from 'react-native';

const RegularBotton = ({text}) => {
  return (
    <TouchableOpacity
      activeOpacity={1}
      delayPressIn={0}
      onPress={() => alert('Do Something')}
      style={styles.container}>
      <Text style={styles.text}>{text}</Text>
    </TouchableOpacity>
  );
};

export default RegularBotton;

const styles = StyleSheet.create({
  container: {
    marginEnd: 10,
    paddingLeft: 6,
    paddingRight: 6,
    paddingTop: 8,
    paddingBottom: 8,
    borderRadius: 20,
    backgroundColor: 'rgba(216,17,89,0.15)',
  },
  text: {
    color: '#D81159',
    fontSize: 11,
    fontFamily: 'Montserrat',
    fontWeight: 'bold',
    fontStyle: 'normal',
    lineHeight: 13,
    margin: 0,
    textAlign: 'center',
  },
});
