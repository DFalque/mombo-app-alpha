import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';

const PlusButton = () => {
  return (
    <View>
      <TouchableOpacity style={styles.container} title="+">
        <Text>+</Text>
      </TouchableOpacity>
    </View>
  );
};

export default PlusButton;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFFF',
    borderRadius: 100,
    paddingRight: 7,
    paddingLeft: 7,
    paddingTop: 1,
    paddingBottom: 1,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
});
