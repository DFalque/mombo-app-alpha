import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';

const ActionButton = () => {
  return (
    <TouchableOpacity
      onPress={() => alert('Do Something')}
      style={styles.container}>
      <Text style={styles.text}>VER MÁS</Text>
    </TouchableOpacity>
  );
};

export default ActionButton;

const styles = StyleSheet.create({
  container: {
    width: 100,
    backgroundColor: '#D81159',
    alignItems: 'center',
    marginTop: 10,
    padding: 10,
    paddingTop: 15,
    paddingBottom: 15,
    borderRadius: 25,
    //  boxShadow: '4 4 20 rgba(0, 0, 0, 0.1)',
    // shadowColor: 'black',
    //shadowRadius: 25,
    //shadowOpacity: 0.1,
    //shadowOffset: {x: 0, y: 0},
    //elevation: 5,
    //overflow: 'hidden',
  },
  text: {
    fontFamily: 'Montserrat-Regular',
    color: '#ffffff',
    fontSize: 12,
    fontStyle: 'normal',
    lineHeight: 15,
    fontWeight: 'bold',
  },
});
