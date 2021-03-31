import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import PlusButton from '../ui/ActionButton/PlusButton';

const Counter = ({number, doThis, type}) => {
  const add = (tp, num, fun) => {
    if (fun === 'add') {
      const n = num + 1;
      doThis(tp, n);
    } else {
      const n = num - 1;
      if (n < 0) {
        doThis(tp, 0);
      } else {
        doThis(tp, n);
      }
    }
  };
  return (
    <View style={styles.containerCounter}>
      <TouchableOpacity
        style={styles.container}
        onPress={() => add(type, number, 'add')}>
        <Text>+</Text>
      </TouchableOpacity>
      <Text>{number}</Text>
      <TouchableOpacity
        style={styles.container}
        onPress={() => add(type, number, 'substract')}>
        <Text>-</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Counter;

const styles = StyleSheet.create({
  containerCounter: {
    flexDirection: 'row',
    width: '30%',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  container: {
    backgroundColor: '#FFFF',
    borderRadius: 200,
    paddingRight: 2,
    paddingLeft: 2,
    paddingTop: 2,
    paddingBottom: 2,

    width: 25,
    height: 25,
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
