import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const ActionFooter = ({text}) => {
  return (
    <View style={styles.container}>
      <Icon name="bookmark-outline" size={26} color="#ffffff" />
      <Text style={styles.text}>{text}</Text>
    </View>
  );
};

export default ActionFooter;

const styles = StyleSheet.create({
  container: {
    //marginTop: 20,
    //marginBottom: 10,
    flexDirection: 'row',
    height: 60,
    backgroundColor: '#D81159',
    justifyContent: 'center',
    alignItems: 'center',
    // position: 'fixed',
  },
  text: {margin: 5, color: '#fff', fontSize: 18, fontWeight: 'bold'},
});
