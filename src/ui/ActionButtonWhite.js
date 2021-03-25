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
    backgroundColor: '#ffff',
    alignItems: 'center',
    marginTop: 10,
    padding: 10,
    paddingTop: 17,
    paddingBottom: 17,
    borderRadius: 25,
    paddingRight: 32,
    paddingLeft: 32,
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
    color: 'black',
    fontSize: 16,
    fontStyle: 'normal',
    lineHeight: 15,
    fontWeight: 'bold',
  },
});
